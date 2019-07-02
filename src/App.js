/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment } from 'react';
import { DefaultLayout } from './components/default-layout';

export const App = props => {
  return (
    <Fragment>
      <DefaultLayout />
      <div className="footer" style={{ textAlign: 'center', padding: '1em' }}>
        &copy; {new Date().getFullYear()} - Make with{' '}
        <span style={{ color: 'red', fontWeight: 700 }}>♥</span> by{' '}
        <a
          style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}
          href="https://duydev.me"
          target="_blank"
        >
          Trần Nhật Duy
        </a>
      </div>
    </Fragment>
  );
};
