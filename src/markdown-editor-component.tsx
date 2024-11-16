import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertedHtml = marked(markdown);
    setHtml(convertedHtml);
  }, [markdown]);

  return (
    <div className="flex h-screen">
      <textarea
        className="w-1/2 p-4 font-mono text-sm border-r resize-none"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your Markdown here..."
      />
      <div 
        className="w-1/2 p-4 overflow-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownEditor;
