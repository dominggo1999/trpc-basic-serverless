import React from 'react';
// @ts-ignore
import Istoria from 'istoria';

const stories = import.meta.glob('../**/*.stories.{js,jsx,ts,tsx}', { eager: true });

const App = () => {
  return (
    <Istoria.Controls stories={stories} />
  );
};

export default App;
