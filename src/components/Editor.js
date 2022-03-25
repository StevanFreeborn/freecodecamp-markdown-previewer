import React from "react";

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="editor">
                <textarea 
                    id="editor-text-area"
                />
            </div>
        );
    }
}
  
export default Editor;