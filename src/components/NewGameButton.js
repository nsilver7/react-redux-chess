import React from 'react';
import PropTypes from 'prop-types';

const NewGameButton = (props) => (

  <svg width={props.size} height={props.size} viewBox='0 0 430 430' xmlns='http://www.w3.org/2000/svg' onClick={props.onClick}>
    <g id='Page-1' fill='none' fillRule='evenodd'>
        <circle id='outer' stroke='#000' fill='#FFF' cx='215' cy='215' r='214.5'
        />
        <path d='M259.5,170.5 L347,170.5 C351.69442,170.5 355.5,174.30558 355.5,179 L355.5,251 C355.5,255.69442 351.69442,259.5 347,259.5 L259.5,259.5 L259.5,347 C259.5,351.69442 255.69442,355.5 251,355.5 L179,355.5 C174.30558,355.5 170.5,351.69442 170.5,347 L170.5,259.5 L83,259.5 C78.3055796,259.5 74.5,255.69442 74.5,251 L74.5,179 C74.5,174.30558 78.3055796,170.5 83,170.5 L170.5,170.5 L170.5,83 C170.5,78.3055796 174.30558,74.5 179,74.5 L251,74.5 C255.69442,74.5 259.5,78.3055796 259.5,83 L259.5,170.5 Z'
        id='new-game' stroke='#FFF' fill='#000' />
    </g>
  </svg>

);

NewGameButton.propTypes = {
  size: PropTypes.number
};

NewGameButton.defaultProps = {
  size: 100
};

export default NewGameButton;
