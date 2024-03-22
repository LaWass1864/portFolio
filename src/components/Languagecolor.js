import React from 'react';
import CodeHighlighter from './CodeHighlighter'; // Importez le composant CodeHighlighter

const LanguageColor = ({ languages }) => {
  return (
    <div>
      {languages && languages.length > 0 ? (
        languages.map((language, index) => (
          <div key={index}>
            <CodeHighlighter code={language} language="html" /> {/* Remplacez "html" par le langage approprié */}
          </div>
        ))
      ) : (
        <span>-</span>
      )}
    </div>
  );
};

export default LanguageColor;
