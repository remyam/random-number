import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'client/components/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'client/reducers';

describe('Home', () => {
  let component;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('has expected content', () => {
    const initialState = {
      value: 0,
      counter: 0,
      random: []
    };

    const store = createStore(rootReducer, initialState);

    component = ReactDOM.render(<Provider store={store}><Home /></Provider>, container);

    expect(component).to.not.be.false;
  });
});
