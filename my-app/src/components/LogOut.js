import React from 'react';
import {auth} from '../firebase';

const style = {
    button: 'bg-gray-200 px-4 py-2 hover:bg-gray-100',
};

const LogOut = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <button onClick={signOut} className = {style.button}>
      LogOut
    </button>
  );
};

export default LogOut;
