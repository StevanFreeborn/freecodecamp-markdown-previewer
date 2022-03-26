import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

class Toolbar extends React.Component {
    render() {
        
        let titleIcon = (this.props.titleText === "Editor") ?
        <FontAwesomeIcon icon={faKeyboard}/> :
        <FontAwesomeIcon icon={faCode}/>;

        let maxMinIcon = (this.props.maxState) ?
        <FontAwesomeIcon icon={faCompress}/> :
        <FontAwesomeIcon icon={faExpand}/>;

        return (
            <div className="toolbar">
                <div className="title">
                    {titleIcon} {this.props.titleText}
                </div>
                <div className="icons">
                    <i onClick={this.props.onClick}>{maxMinIcon}</i>
                </div>
            </div>
        );
    }
}
  
export default Toolbar;