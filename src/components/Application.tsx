import React from 'react';
import { hot } from 'react-hot-loader';

import MonacoEditor from 'react-monaco-editor';

const Application: React.FC = (): JSX.Element => {

  return <MonacoEditor
    height={520}
  />;
};

export default hot(module)(Application);
