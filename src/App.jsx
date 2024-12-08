import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Editor from './components/Editor'
import Previewer from './components/Previewer';

function App() {
const [markdown, setMarkdown] = useState(initialState);

const [expandEditor, setExpandEditor] = useState(false);
const [expandPreviewer, setExpandPreviewer] = useState(false);

const handleEditorChange = e => setMarkdown(e.target.value);
const handleExpandEditor = () => setExpandEditor(!expandEditor);
const handleExpandPreviewer = () => setExpandPreviewer(!expandPreviewer);

  return (
    <>
    <div id="wrapper" className='bg-success bg-gradient'>
      <h1 id='app-heading'>Markdown Previewer</h1>

     {  
     expandPreviewer ? null : 
     <Editor 
        markdown={markdown}
        handleEditorChange={handleEditorChange}
        expandEditor={expandEditor}
        handleExpandEditor={handleExpandEditor}
        />
        }

    { 
    expandEditor ? null :  
        <Previewer
        markdown={markdown}
        expandPreviewer={expandPreviewer}
        handleExpandPreviewer={handleExpandPreviewer}
        />
      }
    </div>
    </>
  )
}

const initialState = `
  # React Markdown Previewer
  ## Here are some things you can do
You can make text **bold**
You can create a [Link](https://www.example.com)
Write some \`<span></span>\` inline code
  \`\`\`
  // or a whole code block
  const greeting = 'Hello';
  console.log(greeting);
  \`\`\`
Listing items is very easy
  - List item 1
  - List item 2

  > Making a blockquote is even easier

Thinking about images? Don't worry, we have you covered
  ![Image](https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
  
There are a lot of other cool things to do. Check out this [cheatsheet](https://www.markdownguide.org/cheat-sheet/)
      
      `;

export default App
