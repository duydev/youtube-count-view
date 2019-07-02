import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { DefaultLayout } from './components/default-layout';

export const App = props => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Youtube View Count</title>
      </Helmet>
      <DefaultLayout />
      <div className="footer" style={{ textAlign: 'center', padding: '1em' }}>
        &copy; {new Date().getFullYear()} - Make with{' '}
        <span style={{ color: 'red', fontWeight: 700 }}>♥</span> by{' '}
        <a style={{ textDecoration: 'none' }} href="https://duydev.me">
          Trần Nhật Duy
        </a>
      </div>
    </Fragment>
  );
};
