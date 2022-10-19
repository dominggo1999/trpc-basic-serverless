import React from 'react';
// @ts-ignore
import Istoria from 'istoria';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../client/styles/GlobalStyles';
import 'twin.macro';

const stories = import.meta.glob('../../**/*.stories.{js,jsx,ts,tsx}', { eager: true });

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div tw="p-3">
        {children}
      </div>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <Istoria.Sandbox
      stories={stories}
      wrapper={Wrapper}
    />
  );
};

export default App;
