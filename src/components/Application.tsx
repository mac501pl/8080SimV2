import React from 'react';
import { hot } from 'react-hot-loader';

import MonacoEditor from 'react-monaco-editor';

const Application: React.FC = (): JSX.Element => {

  return <MonacoEditor />;
};

export default hot(module)(Application);
