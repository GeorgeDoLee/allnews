import React, { useState } from 'react';

const Toast = ({ message, type }) => {
  return (
    <div 
        className={`text-lg font-firago absolute top-10 left-1/2 transform -translate-x-1/2 
            bg-newspaper px-10 py-5 shadow-lg rounded-md border border-dark
            ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}
    >
      <span>{message}</span>
    </div>
  );
};

let showToast;

const ToastManager = () => {
  const [toast, setToast] = useState({ message: '', type: '', visible: false });

  showToast = (message, type) => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast({ ...toast, visible: false });
    }, 3000);
  };

  return (
    <>
      {toast.visible && <Toast message={toast.message} type={toast.type} />}
    </>
  );
};

export const toast = {
  success: (message) => showToast(message, 'success'),
  error: (message) => showToast(message, 'error'),
};

export default ToastManager;
