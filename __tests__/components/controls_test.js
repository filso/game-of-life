import React from 'react';
import { Controls } from '../../src/components/controls';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import sinon from 'sinon';

const TEST_SPEED = 5;

describe('Controls' , () => {
  let component;
  let mockProps = {
    speedUp: sinon.spy(),
    speedDown: sinon.spy(),
    togglePause: sinon.spy(),
    speed: TEST_SPEED
  };

  beforeEach(() => {
    component = shallow(<Controls  {...mockProps} />);
  });

  it('has a working speed up button', () => {
    let button = component.find('.speed-up')
    expect(button).to.exist;

    button.simulate('click');
    expect(mockProps.speedUp.called).to.be.true;
  });

  it('has slow down button', () => {
    let button = component.find('.slow-down');
    expect(button).to.exist;

    button.simulate('click');
    button.simulate('click');
    expect(mockProps.speedDown.calledTwice).to.be.true;
  });

  it('has pause button', () => {
    let button = component.find('.toggle-pause');
    expect(button).to.exist;

    button.simulate('click');
    button.simulate('click');
    expect(mockProps.togglePause.calledTwice).to.be.true;
  });

  it('has speed indicator', () => {
    let indicatorSpan = component.find('.speed-indicator');
    expect(indicatorSpan.contains(`Speed: ${TEST_SPEED}`)).to.equal(true);
  });
});
