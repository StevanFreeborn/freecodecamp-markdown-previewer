import React from "react";

class Editor extends React.Component {
    render() {
        return (
            <textarea 
                id="editor-text-area"
                onChange={this.props.onChange}
                value={this.props.markdown}
                className={this.props.classes}
            />
        );
    }
}
  
export default Editor;