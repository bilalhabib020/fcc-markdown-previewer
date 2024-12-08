import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faMinimize } from '@fortawesome/free-solid-svg-icons'


export default function Editor ({ markdown, handleEditorChange, expandEditor, handleExpandEditor }) {

    const normalStyle = {
        width: "50%",
        height: "200px",
    }

    const expandedStyle = {
        width: "50%",
        height: "500px"
    }

    return (
        <div className="editor-div" style={expandEditor ? expandedStyle : normalStyle}>
            <div className="text-light bg-dark d-flex justify-content-between align-items-center">
                <h5 id='editor-heading'>Editor</h5>
                <button id='editor-btn' className="btn btn-outline-success btn-sm" onClick={handleExpandEditor} >{ expandEditor ? <FontAwesomeIcon icon={faMinimize} /> : <FontAwesomeIcon icon={faMaximize} />}</button>
            </div>
            <textarea id="editor" className="form-control rounded-0"  value={markdown} onChange={handleEditorChange}></textarea>
        </div>
    )
}