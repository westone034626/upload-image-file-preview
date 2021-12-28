import React from 'react';
import styles from './App.module.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const fileInputRef = useRef<HTMLInputElement>();
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {preview ? (
          <div
            style={{ backgroundImage: `url(${preview})` }}
            className={styles.backgroundImage}
            onClick={() => {
              setImage(null);
            }}
          />
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current.click();
            }}
            className={styles.button}
          >
            choose image
          </button>
        )}

        <input
          accept="image/*"
          className={styles.input}
          type="file"
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </form>
    </div>
  );
}

export default App;
