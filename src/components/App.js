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
      markdown: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
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
              <div class="preview-wrapper card">
                <Toolbar
                  titleText="Previewer"
                >
                </Toolbar>
                <Previewer
                  markdown={this.state.markdown}
                >
                </Previewer>
              </div>
            </div>
            
            <div class="col-sm-6 order-sm-1">
              <div class="editor-wrapper card">
                <Toolbar
                  titleText="Editor"
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
