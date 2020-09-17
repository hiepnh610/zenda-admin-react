import React from 'react';
import './assets/css/theme.min.css';
import './assets/fonts/feather/feather.css';

import MainHeader from './components/header';
import MainSidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <MainHeader />

      <MainSidebar />
    </div>
  );
}

export default App;
