import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incNumber, randomizeNumber, incCounter } from '../actions';
import custom from '../styles/custom.css';

class DemoStates extends React.Component {
  
  componentDidMount(){
    const { dispatch } = this.props;
    setInterval(() => dispatch(incCounter()), 2000);
  }

  render() {
    const { value, dispatch } = this.props;
    return (
      <div>
        <h6 className={custom['docs-header']}>Generating random non-repatative number between 1 and 5000 in every 2 seconds</h6>
        <div>
          <div style={{ width: '100%', display: 'inline-block', textAlign: 'center', fontSize: '300px' }}>
            {value}
          </div>
        </div>
      </div>
    );
  }
}

DemoStates.propTypes = {
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    value: state.value,
    counter: state.counter,
    random: state.random
  };
};

export default connect(mapStateToProps, dispatch => ({ dispatch }))(DemoStates);
