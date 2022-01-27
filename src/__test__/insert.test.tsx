import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Insert from '../pages/insert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Button } from '@mui/material';
import BaseButton from '../components/BaseButton';
import ReactDOM from 'react-dom';
import ApiService from '../ApiService/crud.service';
jest.mock('../ApiService/crud.service');


test('Insert Page Render Test', () => {

  const insertModule = render(
    <Provider store={configureStore({})}>
      <BrowserRouter >
        <div className="App">
          <Routes>
            <Route path="/" element={<Insert />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
  // console.log(insertModule);
  expect(insertModule.getByText('Add User')).toBeInTheDocument();
  // expect(insertModule.queryByTitle('Submit Buttons')).toBeInTheDocument();
  // const submitBtn = insertModule.queryByTitle('Submit Buttons');
  // expect(submitBtn).toBeTruthy();

});

describe('Testing  button in Insert Page', () => {

  it('onclick', () => {

    const insertModule = render(
      <Provider store={configureStore({})}>
        <BrowserRouter >
          <div className="App">
            <Routes>
              <Route path="/" element={<Insert />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    );
    expect(insertModule.getByText('Submit')).toBeInTheDocument();
    const submitBtn = insertModule.getByText('Submit');
    expect(submitBtn).toBeTruthy();
    expect(submitBtn).toMatchSnapshot();

    // fireEvent.click(submitBtn)
    // console.log(submitBtn.innerHTML);

    // expect(submitBtn.innerHTML).toBe("Submit");

  })

});



describe('Form Test in Insert Page', () => {


  let container: HTMLDivElement;
  const insertApiServiceSpy = jest.spyOn(ApiService, 'postData');
  const getApiServiceSpy = jest.spyOn(ApiService, 'getData');

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
    ReactDOM.render(
      <Provider store={configureStore({})}>
        <BrowserRouter >
          <div className="App">
            <Routes>
              <Route path="/" element={<Insert />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>,
      container
    )
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('Form renders', () => {
    const inputs = container.querySelectorAll('input')
    console.log(inputs);
    console.log(inputs.length);
    expect(inputs.length).toBe(3);
    expect(inputs[0].name).toBe('firstName');
    expect(inputs[1].name).toBe('email');
    expect(inputs[2].name).toBe('phone');
  })


  describe("mockImplementation", () => {
    test("function", () => {
      const mockFn1 = jest.fn().mockImplementation(() => 42);
      const mockFn2 = jest.fn(() => 42);

      expect(mockFn1()).toBe(42);
      expect(mockFn2()).toBe(42);
    });
  });

  // 
  it('Values check', () => {


    const inputs = container.querySelectorAll('input')
    const name = inputs[0];
    const email = inputs[1];
    const phone = inputs[2];
    const submitBtn = container.querySelectorAll('button[type=button]')
    console.log(submitBtn.length);
    // expect(submitBtn[0]).toBeTruthy();
    let getName = fireEvent.change(name, { target: { value: 'firstName' } })
    let getEmail = fireEvent.change(email, { target: { value: 'email' } })
    let getPhone = fireEvent.change(phone, { target: { value: '9876543210' } })

    const fakeUserResponse = {
      'data': {
        email: "jcmoorthy5050@gmail.com",
        firstName: "pgmoorthy",
        phone: "9876543210"
      }
    };
    // expect(container.getByText('Submit')).toBeInTheDocument();

    fireEvent.click(submitBtn[0])


    var apiFunc = jest.spyOn(ApiService, 'postData').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(fakeUserResponse)
      })
    })
    // console.log('====================================');
    // console.log(apiFunc);
    // console.log('====================================');
    // const submitBtnInsert = container.getByText('Submit');


    // console.log('firstName', getName);
    // console.log('email', getEmail);
    // console.log('phone', getPhone);

    //  let data = {
    //   names: getName,
    //   emails: getEmail,
    //   phones: getPhone
    // }

    // let data = {
    //   email: "jcmoorthy5050@gmail.com",
    //   firstName: "pgmoorthy",
    //   phone: "9876543210"
    // }

    // console.log(data);

    // expect(insertApiServiceSpy).toBeCalledWith(data ,expect.any(Object), expect.any(Function));
    // expect(insertApiServiceSpy).toBeCalledWith(getName, getEmail, getPhone);
    // expect(insertApiServiceSpy).toBeCalledWith(
    //   {
    //     firstName: getName, email: getEmail,phone: getPhone
    //   },expect.any(Object), expect.any(Function)
    //  );

    // expect(insertApiServiceSpy).toBe(data);

  })



});

test('button test', () => {

  const insertModule = render(
    <Provider store={configureStore({})}>
      <BrowserRouter >
        <div className="App">
          <Routes>
            <Route path="/" element={<Insert />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
  expect(insertModule.getByText('Submit')).toBeInTheDocument();
  const submitBtn = insertModule.getByText('Submit');
  // console.log(submitBtn)
  expect(submitBtn).toBeTruthy();

  const baseBtn = render(<BaseButton text="Submit" variant="contained" />)
  // console.log(baseBtn)
  expect(baseBtn).toBeTruthy();
  // expect(submitBtn).toBE(baseBtn);
  expect(submitBtn).toMatchSnapshot();

  // const wrapper = renderer.create( <BaseButton text="Submit" variant="contained" />);
  // // console.log(wrapper.toJSON())
  // expect(wrapper.toJSON()).toBe(submitBtn);
})



// describe("post requests",()=>{
  //   // const validRequest={method:'post',body:{user:"Jill",password:'hill',post:"He broke his crown!"}}
  //   const validRequest={
  //     email: "jcmoorthy5050@gmail.com",
  //     firstName: "pgmoorthy",
  //     phone: "9876543210"
  //   }
  //   const invalidRequest={method:'post',body:{user:"Jill",password:'beanstock',post:"Jack is cool..."}}

  //   it("returns a 200 status and adds the post to the database",()=>{
  //    const newDatabase={
  //    users:[
  //     {
  //       name:"Jack",
  //       passwordHash:"dasdKDKDJSLASDLASDJSAasdsdc123",
  //       posts:["I just bought some magic beans!"]
  //     },
  //     {
  //       name:"Jill",
  //       passwordHash:"dasdKDKDJSLASDLASDJSAasdsdc123",
  //       posts:["Jack fell down!","He broke his crown!"]
  //     },
  //    ]
  //    }
  //    const mockApiCall=ApiService.postData(validRequest)
  //    console.log('====================================');
  //    console.log(mockApiCall);
  //    console.log('====================================');

  //   //  return mockApiCall.then(response=>{
  //   //  expect(response.status).toBe(200)
  //   // //  expect(ApiService.ApiService).toEqual(newDatabase)
  //   //  })
  //   })
  // })
