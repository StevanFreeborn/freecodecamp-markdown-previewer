import React from 'react';
import '../styles/App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import Editor from './Editor';
import Previewer from './Previewer';
import Toolbar from './Toolbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      isEditorMaximized: false,
      isPreviewMaximized: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
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

  render() {
    return (
      <div>

        <header className="app-header">
          <h1><code>Markdown</code> Previewer</h1>
        </header>

        <div className="container-xxl">

          <div className="row">

          <div className="col-sm-6 order-sm-2">
              <div className="preview-wrapper card">
                <Toolbar
                  titleText="Previewer"
                  onClick={this.handlePreviewMaximize}
                  maxState={this.state.isPreviewMaximized}
                >
                </Toolbar>
                <Previewer
                  markdown={this.state.markdown}
                >
                </Previewer>
              </div>
            </div>
            
            <div className="col-sm-6 order-sm-1">
              <div className="editor-wrapper card">
                <Toolbar
                  titleText="Editor"
                  onClick={this.handleEditorMaximize}
                  maxState={this.state.isEditorMaximized}
                >
                </Toolbar>
                <Editor
                  markdown={this.state.markdown}
                  onChange={this.handleChange}
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
