import React from 'react';
import styles from './App.module.css';
import { useRef, useState } from 'react';

function App() {
  const fileInputRef = useRef();
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <button className={styles.button}>choose image</button>
        <input className={styles.input} type="file" />
      </form>
    </div>
  );
}

export default App;
