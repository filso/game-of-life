import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { App } from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('has board', () => {
    let el = component.find('.board');
    expect(el).to.exist;
  });

  it('has controls', () => {
    let el = component.find('.controls');
    expect(el).to.exist;
  });
});
