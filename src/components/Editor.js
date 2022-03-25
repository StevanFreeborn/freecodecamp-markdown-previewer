import React from "react";

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea 
                id="editor-text-area"
                onChange={this.props.onChange}
                value={this.props.markdown}
            />
        );
    }
}
  
export default Editor;