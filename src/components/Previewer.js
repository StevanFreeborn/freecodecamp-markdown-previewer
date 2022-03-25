import React from "react";
import { marked } from 'marked';

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        marked.setOptions({
            breaks: true,
        })

        const renderer = new marked.Renderer();

        renderer.link = function(href, title, text) {
            return `<a target="_blank" href="${href}">${text}</a>`
        }

        const html = marked(this.props.markdown, {renderer: renderer});

        return (
            <div
                id="previewer"
                className="previewer"
                dangerouslySetInnerHTML={{
                    __html: marked(this.props.markdown, {renderer: renderer})
                }}
            >
            </div>
        );
    }
}
  
export default Previewer;