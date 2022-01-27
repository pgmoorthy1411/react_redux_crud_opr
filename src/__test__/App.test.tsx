import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from '../App';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import BaseButton from '../components/BaseButton';
// import { shallow , configure } from 'enzyme';
import {createMemoryHistory} from 'history'
import Update from '../pages/update';
import { Button } from '@mui/material';
// import Adapter from 'enzyme-adapter-react-16';

// configure({adapter: new Adapter()});

jest.mock('../pages/update');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

test('App Page Test', () => {
  // const history = createMemoryHistory()

  const wholeModule = render(
    <Provider store={configureStore({})}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  );
  expect(wholeModule.getByText('Dashboard')).toBeInTheDocument();
  expect(wholeModule.getByText('Add User')).toBeInTheDocument();
const btnAdd = wholeModule.getAllByTestId('btn-1');

  
});

// test('Simple Test', () => {

  // describe('Test Case For App', () => {
  //   it('should render button', () => {
  //     const baseBtn = render(
  //       <BaseButton />
  //     );
  // // expect(baseBtn.getByText('Add User')).toBeInTheDocument();
  // expect(baseBtn.getByText('Add User').toBe('Add User') )
     
  //   })
  // })
  
describe('Testing  button', () => {
  const wrapper = renderer.create(<Button  title="Test Button" />);
  it('Should render', () => {
    expect(wrapper.toJSON()).toBeTruthy();
  });
});


  // const history = createMemoryHistory()
  // const navigate = useNavigate();
  // navigate('adduser')
  // // const wholeModule = render(
  // //   <Provider store={configureStore({})}>
  // //     <BrowserRouter >
  // //       <App />
  // //     </BrowserRouter>
  // //   </Provider>
  // // );
  // // // history.push('adduser')

  // // expect(wholeModule.getByText('Add User')).toBeInTheDocument();
  // // expect(wholeModule.getByText('Back')).toBeInTheDocument();

  
//   expect(true).toBe(true)
// })