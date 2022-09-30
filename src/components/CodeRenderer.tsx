import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeRenderer = ({ codeString = '', language = 'python' }) => {
  return (
    <SyntaxHighlighter language={language} style={a11yLight}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeRenderer;
