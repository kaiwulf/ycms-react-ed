import logo from './logo.svg';
import './App.css';
// import { marked } from 'marked';
import { Remarkable } from 'remarkable';
import { sampleText } from './sampleText.js';
import { render } from '@testing-library/react';
import { useState } from 'react';

const md = new Remarkable();

function handleChange(markdown) {
  const inHTML = md.render(markdown);
  return {__html: inHTML};
}
function RenderText({ markdown }) {
  const outMarkup = handleChange(markdown)
  return <div dangerouslySetInnerHTML={outMarkup}/>
}

export default function Editor() {
  const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;
const [value, setValue] = useState();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
        <textarea className='form-control'
          onChange={setValue}
          value={value}
          rows='35'
        />
      </div>
        <div className='col-sm-6'>
           <RenderText />
        </div>
      </div>
    </div>
  );
}