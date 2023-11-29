// CounterContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const resetCounter = () => {
    setCounter(0);
  };

  const pauseCounter = () => {
    setIsPaused(true);
  };

  const resumeCounter = () => {
    setIsPaused(false);
  };

  return (
    <CounterContext.Provider
      value={{ counter, resetCounter, pauseCounter, resumeCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};
