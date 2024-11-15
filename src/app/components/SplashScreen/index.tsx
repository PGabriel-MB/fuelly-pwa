import React from 'react';
import styles from './SplashScreen.module.css';

const SplashScreen: React.FC = () => {
  return (
    <div className={styles.splashScreen}>
      <h1>Fuelly</h1>
      <p>Gerenciando seus gastos de combustível...</p>
    </div>
  );
};

export default SplashScreen;
