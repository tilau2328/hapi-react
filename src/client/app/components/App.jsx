import React from 'react';
import Header from './Header';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
