import React, { Component } from "react";
import Coach from "../components/Coach";
import ThinkingBubble from "../components/ThinkingBubble";
import ActionButton from "../components/ActionButton";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coachMoodActions from '../actions/CoachMoods';
import PropTypes from 'prop-types';

class CoachContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'shocked',
      coachStatus: 'normal',
    };
  }

  render() {
    return (
      <React.Fragment>
        <ThinkingBubble status={this.props.coachStatus} /><br />
        <Coach mood={this.props.mood} /><br />
        <ActionButton onClick={this.props.moodActions.coachIsSad} text='Sad' />
        <ActionButton onClick={this.props.moodActions.coachIsHappy} text='Happy' />
        <ActionButton onClick={this.props.moodActions.coachIsNormal} text='Normal' />
        <ActionButton onClick={this.props.moodActions.coachIsShocked} text='Shocked' />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    mood: state.mood,
    coachStatus: state.coachStatus,
  }
}

function mapDispatchToProps(dispatch) {
  //return { actions: bindActionCreators(coachMoodActions, dispatch) }
  return {
    moodActions: bindActionCreators(coachMoodActions, dispatch)
  }
  /*return {
    onHappyClick: () =>
      dispatch({
        type: 'COACH_HAPPY'
      }),
    onSadClick: () =>
      dispatch({
        type: 'COACH_SAD'
      })
  }*/
}

CoachContainer.propTypes = {
  mood: PropTypes.oneOf([
    'normal',
    'shocked',
    'happy',
    'sad',
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(CoachContainer);
