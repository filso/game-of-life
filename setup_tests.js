const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};
