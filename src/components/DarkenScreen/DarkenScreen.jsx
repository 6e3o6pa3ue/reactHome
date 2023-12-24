import React, { useState, useEffect } from 'react';
import './darkenscreen.css'; 

const DarkenScreen = () => {
  const [darkened, setDarkened] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const darkenedState = localStorage.getItem('darkenedState');
    if (darkenedState === 'true') {
      setDarkened(true);
      setTextVisible(true);
      setShowButton(true);
    } else {
      const darkeningTimer = setTimeout(() => {
        setDarkened(true);
        setTimeout(() => {
          setTextVisible(true);
          setShowButton(true);
        }, 10000); 
      }, 100000); 

      localStorage.setItem('darkenedState', 'true');

      return () => {
        clearTimeout(darkeningTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === '/home' && completed === false) {
 
      console.log('Действие завершено, пользователь на странице Home');
      setCompleted(true);
      setDarkened(false);
      setTextVisible(false);
      setShowButton(false);
    }
  }, [completed]);

  const handleOK = () => {
    window.location.href = '/home';
  };

  return (
    <div className={`overlay ${darkened ? 'darkened' : ''}`}>
      {textVisible && (
        <div className={`content ${showButton ? 'visible' : ''}`}>
          <h1 className='text'>Hi everyone, I would like to present you my final work, a special thanks to Nicholas, I have gained a lot of new knowledge and skills. !</h1>
          {showButton && (
            <button onClick={handleOK} className='button'>OK</button>
          )}
        </div>
      )}
    </div>
  );
};

export default DarkenScreen;
