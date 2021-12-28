import React from 'react';
import styles from './App.module.css';
import { useRef, useState } from 'react';

function App() {
  const fileInputRef = useRef();
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (fileInputRef.current) fileInputRef.current.click();
          }}
          className={styles.button}
        >
          choose image
        </button>
        <input className={styles.input} type="file" ref={fileInputRef} />
      </form>
    </div>
  );
}

export default App;
