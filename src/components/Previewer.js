import React from "react";
import { marked } from 'marked';
import DOMPurify from 'dompurify';

class Previewer extends React.Component {
    render() {
        // set marked options so that carriage returns can be parsed as line breaks
        // when rendering the html.
        marked.setOptions({
            breaks: true,
        })

        const renderer = new marked.Renderer();

        // override renderer's link function
        renderer.link = function(href, title, text) {
            return `<a target="_blank" href="${href}">${text}</a>`
        }

        // sanitize html that was parsed from markdown text
        const html = DOMPurify.sanitize(
            marked(this.props.markdown, {renderer: renderer})
        );

        return (
            <div
                id="previewer"
                className="previewer"
                dangerouslySetInnerHTML={{
                    __html: html
                }}
            >
            </div>
        );
    }
}
  
export default Previewer;