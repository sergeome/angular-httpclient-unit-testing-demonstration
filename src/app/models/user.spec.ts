import { User } from './user';
describe('User', () => {

  let user = null;

  beforeEach(() => {
    user = new User('John', 'Doe');
  });
  it('should be initialized', () => {
    expect(user).toBeTruthy();
  });
  it('should return full name', () => {
    expect(user.getFullName()).toBe('John Doe');
  });
});
