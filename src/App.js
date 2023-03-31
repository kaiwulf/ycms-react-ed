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

const [postMD, setPostMD] = useState();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <label>
            <textarea className='form-control'
              onChange={e => setPostMD(e.target.value)}
              value={postMD}
              rows='35'
            />
          </label>
        </div>
      <div className='col-sm-6'>
        <RenderText markdown={postMD} />
      </div>
    </div>
  </div>
  );
}