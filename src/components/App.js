import { render } from '@testing-library/react';
import React from 'react';
import '../styles/App.scss';
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
      <h1>Markdown Previewer</h1>
      </header>
      <div className="editor-previewer-wrapper">
        <div class="editor-wrapper">
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
        <div className="previewer-wrapper">
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
    </div>
    );
  }
}

export default App;
