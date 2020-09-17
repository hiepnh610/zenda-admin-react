import React from 'react';
import './assets/css/theme.min.css';
import './assets/fonts/feather/feather.css';

import MainSidebar from './components/sidebar';

function Layout () {
  return (
    <div className="Layout">
      <MainSidebar />
    </div>
  );
}

export default Layout;
