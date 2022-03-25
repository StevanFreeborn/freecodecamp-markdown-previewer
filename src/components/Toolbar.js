import React from "react";

class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar">
                {this.props.titleText}
            </div>
        );
    }
}
  
export default Toolbar;