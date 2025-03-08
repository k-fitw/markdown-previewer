import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import {FaFreeCodeCamp, FaCode, FaExpandArrowsAlt, FaCompressAlt} from "react-icons/fa";
import './App.css'

// default markdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;
function App() {
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
  const [showEditor, setShowEditor] = useState<boolean>(true);
  const [showPreview, setShowPreview] = useState<boolean>(true);

  const toggleEditor = () => {
    if(!showPreview)
    {
      setShowPreview(!showPreview);
    }else{
      setShowPreview(!showPreview);
    }
  }

  const togglePreview = () => {
    if(!showEditor)
      {
        setShowEditor(!showEditor);
      }else{
        setShowEditor(!showEditor);
      }
  }

  return (
    <>
       <div>
        <h1 style={{ textAlign: 'center' }}>Markdown Previewer</h1>
        <div className="boxes-container">
          {showEditor && (
            <div className='editor-column' style={{ width: showPreview ? '50%' : '100%'}}>
              <div id="editor-header">
                <FaFreeCodeCamp style={{ fontSize: "20px", marginRight: "10px" }} />
                Editor
                <button onClick={toggleEditor} style={{ marginLeft: 'auto' }}>{showPreview ? <FaExpandArrowsAlt /> : <FaCompressAlt/>}</button>
              </div>
              <textarea name="editor" id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            </div>
          )}
          {showPreview && (
            <div id="preview">
              <div className="review-header">
                <FaCode />
                Preview
                <button onClick={togglePreview} style={{ marginLeft: 'auto' }}>{showEditor ? <FaExpandArrowsAlt /> : <FaCompressAlt/>}</button>
              </div>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
