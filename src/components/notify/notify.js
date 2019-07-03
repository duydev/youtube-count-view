import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar, SnackbarContent, Icon, IconButton } from '@material-ui/core';

const Notify = ({ message, display, onClose, hideDuration }) => {
  return (
    <Snackbar
      open={display}
      autoHideDuration={hideDuration || 3000}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <SnackbarContent
        style={{ backgroundColor: '#d32f2f' }}
        message={
          <div style={{ display: 'flex' }}>
            <Icon fontSize="small">error</Icon>
            <span style={{ paddingLeft: '10px' }}>{message}</span>
          </div>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={onClose}
          >
            <Icon>close</Icon>
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

Notify.propTypes = {
  message: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  hideDuration: PropTypes.number
};

export { Notify };
