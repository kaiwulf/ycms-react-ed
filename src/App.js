import logo from './logo.svg';
import './App.css';
import { marked } from 'marked';
import { sampleText } from './sampleText.js';
import { render } from '@testing-library/react';

function Render() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <textarea className='form-control'
            onChange={this.handleChange}
            value={this.state.text}
            className='form-control'
            rows='35'
          />
        </div>
        <div className='col-sm-6'>
          <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
        </div>
      </div>
    </div>
  );
}
export default render;

class App {
  state = {
    text: sampleText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }
  renderText = text => {
    const __html = marked(text, {sanitize: true})
    return { __html }
  }
}