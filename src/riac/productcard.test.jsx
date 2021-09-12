// import React from 'react';
// import { render, mount, shallow } from 'enzyme';
// import ProductCard from './productcard.jsx';

// const Enzyme = require('enzyme');

// const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
// Enzyme.configure({ adapter: new EnzymeAdapter() });

// import Button from './Button';

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

// const Fixture = function Fixture() {
//   return (
//     <div>
//       <span className="foo" />
//       <span className="bar baz" />
//     </div>
//   );
// };
// test('asdf', () => {
//   const wrapper = mount(<Fixture />); // mount/render/shallow when applicable

//   expect(wrapper.find('span')).toExist();
//   expect(wrapper.find('ul')).not.toExist();
// });