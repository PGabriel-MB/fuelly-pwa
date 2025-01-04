import React from 'react';
import styles from './styles.module.css';

const SplashScreen: React.FC = () => {
  return (
    <div className={styles.splashScreen}>
      <h1>Fuelly</h1>
      <p>Mantendo o tanque cheio!</p>
    </div>
  );
};      

export default SplashScreen;
