import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  let pipe: FullNamePipe;
  beforeEach(() => {
    pipe = new FullNamePipe();
  });
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
  it('should return concatenated string', () => {
    let fullName = pipe.transform('John', 'Doe');
    expect(fullName).toBe('John Doe');
    fullName = pipe.transform('Jack', 'Doe');
    expect(fullName).toBe('Jack Doe');
  });
});
