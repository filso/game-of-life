import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
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
