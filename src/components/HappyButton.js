import React from 'react';
import { connect } from 'react-redux'

const HappyButton = ({ makeHappy }) => {
  return (
    <button onClick={makeHappy}>Make Coach Happy</button>
  )
}

const mapStateToProps = state => {
  return {
    //mine: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeHappy: () =>
      dispatch({
        type: 'COACH_HAPPY'
      })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HappyButton)
