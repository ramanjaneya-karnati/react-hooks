import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import sinon from 'sinon';

describe('Rendering the component', ()=>{

  const wrapper = shallow(<App/>);

  it('Renders the component without crash', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should simulate the button clicks', function () {
    const buttonClick = sinon.spy();
    const wrapper = shallow(<App onClick={buttonClick}/>);
    wrapper.find('button').simulate('click');
    expect(buttonClick).toHaveProperty('callCount', 0);
  });
});

