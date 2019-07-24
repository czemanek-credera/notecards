import React from 'react';
import styles from './app.module.css';

import Canvas from './components/canvas/component';
import Toolbar from './components/toolbar/component';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}><Toolbar /></div>
      <div className={styles.body}><Canvas /></div>
    </div>
  );
}

export default App;
