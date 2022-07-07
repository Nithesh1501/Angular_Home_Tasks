import { UserStatusPipe } from './user-status.pipe';

describe('UserStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new UserStatusPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Should return Deleted if user is deleted else active', () => {

  let pipe: UserStatusPipe;
  beforeEach(() => {
    pipe = new UserStatusPipe();
  });

  it('should return Deleted if user is deleted', () => {
    let status = pipe.transform(true);
    expect(status).toBe('Deleted');
  });

  it('should return Active if user is active', () => {
    let status = pipe.transform(false);
    expect(status).toBe('Active');
  });
})
