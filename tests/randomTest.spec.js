const { isNull, toBeFalsy, createUser, fetchUser } = require('./../calculator');

describe('Random test functions for YouTube video', () => {
  test('should return null', () => {
    const result = isNull();
    expect(result).toBeNull();
  });

  //checks if argument passed to function is a falsy value, there is also toBeTruthy
  test('Should check if argument passed to function is a falsy value', () => {
    const result = toBeFalsy();
    expect(result).toBeFalsy();
  });

  //check if a function exists first
  test('createUser function exists', () => {
    expect(createUser).toBeDefined();
  });

  //for an object or an array that have different memory addresses, you need to use toEqual
  test('Should check if user is object', () => {
    const result = createUser();
    expect(result).toEqual({ firstName: 'Joshua', lastName: 'George' });
  });

  //check for less than or equal too
  test('check if less than or equal', () => {
    const load1 = 200;
    const load2 = 300;
    expect(load1 + load2).toBeLessThanOrEqual(500);
  });
});

//test regular expressions '/I/i' ==> if an i exist but is case INsensitive
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

//arrays checking if an array includes a string with 'toContain'
test('Admin should be in thee username', () => {
  usernames = ['josh', 'Ragnar', 'admin'];
  expect(usernames).toContain('admin');
});

//using axios to fetch async data and check it, using api to give users
test('check if axios call returns the right data', async () => {
  //the assertions is for async data
  expect.assertions(1);
  //you need to return the data to work with async data
  const data = await fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
