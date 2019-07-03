/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

export const Footer = props => {
  return (
    <div className="footer" style={{ textAlign: 'center', padding: '1em' }}>
      &copy; {new Date().getFullYear()} - Made with{' '}
      <span style={{ color: 'red', fontWeight: 700 }}>♥</span> by{' '}
      <a
        style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}
        href="https://duydev.me"
        target="_blank"
      >
        Trần Nhật Duy
      </a>
    </div>
  );
};
