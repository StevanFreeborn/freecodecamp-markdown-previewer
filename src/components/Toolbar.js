import React from "react";

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="toolbar">
                {this.props.titleText}
            </div>
        );
    }
}
  
export default Toolbar;