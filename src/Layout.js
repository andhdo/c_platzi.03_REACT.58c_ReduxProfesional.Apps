import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearError } from './actions';
import './Layout.css';

const Layout = ({children}) => {
  const errorMessage = useSelector((state)=> state.ui.error);
  //const errorMessage = useSelector((state)=> state.get(['ui','error'])).;
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };

  return (
    <div>
      {children}
      {errorMessage && (
        <div className='wrapper' color='red'>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Layout;