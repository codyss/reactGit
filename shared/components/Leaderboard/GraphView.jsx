import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class GraphViewToggle extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, key) {
    this.props.dispatch(Actions.changeGraph(key));
  }

  render () {
    return (
      <div id="graphToViewButton">
      <DropdownButton onSelect={this.handleClick} bsStyle="primary" title="Chart Metric" id={`dropdown-basic-1`}>
        <MenuItem eventKey="lastWeekCommits">Last Week Commits</MenuItem>
        <MenuItem eventKey="lastWeekPulls">Last Week Pull Requests</MenuItem>
        <MenuItem eventKey="totalCommits">Total Commits</MenuItem>
        <MenuItem eventKey="currentStreak">Current Streak</MenuItem>
        <MenuItem eventKey="longestStreak">Longest Streak</MenuItem>
      </DropdownButton>
    </div>
    );
  }
}

export default connect()(GraphViewToggle);
