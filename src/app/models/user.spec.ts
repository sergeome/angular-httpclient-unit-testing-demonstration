import { User } from './user';
describe('User', () => {
  let user = null;

  beforeEach(() => {
    user = new User('john@doe', 'johnspassword');
  });

  it('should be initialized', () => {
    expect(user).toBeTruthy();
  });
  it('should be serialized to Json properly', () => {
    const jsonPropertiesActual = Object.keys(user.toJson());
    const jsonPropertiesExpected = [
      'email',
      'password'
    ];
    expect(jsonPropertiesActual).toEqual(jsonPropertiesExpected);
  });
});
