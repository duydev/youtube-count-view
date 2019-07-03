import React from 'react';
import { InputBase, IconButton, Icon, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import './search-bar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  onInputChange = value => {
    this.setState({
      value
    });
  };

  onButtonClick = () => {
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <Paper className="search-bar-wrapper">
        <InputBase
          className="search-bar-input"
          placeholder="Video Id"
          inputProps={{ 'aria-label': 'Video Id' }}
          value={this.state.value}
          onChange={e => this.onInputChange(e.target.value)}
        />
        <IconButton aria-label="Surf" onClick={e => this.onButtonClick(e)}>
          <Icon>search</Icon>
        </IconButton>
      </Paper>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export { SearchBar };
