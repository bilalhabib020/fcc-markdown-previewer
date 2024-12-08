import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faMinimize } from '@fortawesome/free-solid-svg-icons'

import { marked } from "marked";



export default function Previewer ({ markdown, expandPreviewer, handleExpandPreviewer }) {

   
marked.setOptions({
    breaks: true
  });

  const renderer = new marked.Renderer();

  const normalStyle = {
    width: "50%",
    height: "50%"
}

const expandedStyle = {
    width: "50%",
    height: "100%"
}

    return (
        <div id="previewer" style={ expandPreviewer ? expandedStyle : normalStyle } className='shadow-lg'>
              <div className="text-light bg-dark d-flex justify-content-between align-items-center">
                <h5 id='previewer-heading'>Preview</h5>
                <button id='preview-btn' className="btn btn-outline-success btn-sm" onClick={handleExpandPreviewer} >{ expandPreviewer ? <FontAwesomeIcon icon={faMinimize} /> : <FontAwesomeIcon icon={faMaximize} />}</button>
            </div>
            <div className='bg-light ps-3' id="preview" dangerouslySetInnerHTML={{ 
                __html: marked(markdown, { renderer: renderer }) 
                }}>
            
            </div>
        </div>
    )
}