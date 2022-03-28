import React from 'react';
import '../styles/App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import Editor from './Editor';
import Previewer from './Previewer';
import Toolbar from './Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { placeholderText } from './Placeholder';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholderText,
      isEditorMaximized: false,
      isPreviewMaximized: false,
      isDarkMode: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handleDarkMode = this.handleDarkMode.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  handleEditorMaximize() {
    this.setState({
      isEditorMaximized: !this.state.isEditorMaximized
    });
  }

  handlePreviewMaximize() {
    this.setState({
      isPreviewMaximized: !this.state.isPreviewMaximized
    });
  }

  handleDarkMode(){
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  }

  render() {

    // set default element classes
    let appHeaderClassNames = "app-header";

    let rowClasses = "row";

    let editorDivClassNames = "col-sm-6 order-sm-1";
    let editorWrapperClassNames = "editor-wrapper custom-card";
    let textareaClasses = "";

    let previewDivClassNames = "col-sm-6 order-sm-2";
    let previewerWrapperClassNames = "preview-wrapper custom-card";
    let previewerClasses = "previewer";

    let toolbarClasses = "toolbar";

    // adjust element classes based on state
    if(this.state.isDarkMode)
    {
      appHeaderClassNames += " dark-mode";
      rowClasses += " light-mode";
      editorWrapperClassNames += " dark-mode";
      previewerWrapperClassNames += " dark-mode";
      previewerClasses += " dark-mode previewer-dark-mode";
      toolbarClasses += " toolbar-dark-mode";
      textareaClasses += " dark-mode";
    }

    if(!this.state.isDarkMode)
    {
      appHeaderClassNames += " light-mode";
      editorWrapperClassNames += " light-mode";
      previewerWrapperClassNames += " light-mode";
      previewerClasses += " light-mode previewer-light-mode";
      toolbarClasses += " toolbar-light-mode";
      textareaClasses += " light-mode";
    }

    if(this.state.isEditorMaximized)
    {
      editorDivClassNames = "col-12";
      textareaClasses += " editor-max";
      previewDivClassNames = "hidden";
    }

    if(this.state.isPreviewMaximized)
    {
      editorDivClassNames = "hidden";
      previewDivClassNames = "col-12";
      previewerClasses += " previewer-mobile-max";
    }

    return (
      <div>

        <header className={appHeaderClassNames}>
          <div className="header-title">
            <h1><code>Markdown</code> Previewer</h1>
          </div>
          <div className="icons">
            <i
              onClick={this.handleDarkMode}
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </i>
          </div>
        </header>

        <div className="container-xxl">

          <div className={rowClasses}>

            <div className={previewDivClassNames}>
              <div className={previewerWrapperClassNames}>
                <Toolbar
                  titleText="Previewer"
                  onClick={this.handlePreviewMaximize}
                  maxState={this.state.isPreviewMaximized}
                  toolbarClasses={toolbarClasses}
                >
                </Toolbar>
                <Previewer
                  markdown={this.state.markdown}
                  classes={previewerClasses}
                >
                </Previewer>
              </div>
            </div>

            <div className={editorDivClassNames}>
              <div className={editorWrapperClassNames}>
                <Toolbar
                  titleText="Editor"
                  onClick={this.handleEditorMaximize}
                  maxState={this.state.isEditorMaximized}
                  toolbarClasses={toolbarClasses}
                >
                </Toolbar>
                <Editor
                  markdown={this.state.markdown}
                  onChange={this.handleChange}
                  classes={textareaClasses}
                >
                </Editor>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
