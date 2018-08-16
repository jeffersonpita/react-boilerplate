import { login, logout } from '../../actions/auth';

test('should generate LOGIN action object', ()=>{
  const uid = 'asd123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate LOGOUT action object', ()=>{
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
