import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set activation to true', () => {
    UsersService.users[0].isDeleted = false;
    UsersService.setActivation(UsersService.users[0].id, true);
    let finalStatus = UsersService.users[0].isDeleted;
    expect(finalStatus).toBe(true);
  });

  it('should set activation to false', () => {
    UsersService.users[0].isDeleted = true;
    UsersService.setActivation(UsersService.users[0].id, false);
    let finalStatus = UsersService.users[0].isDeleted;
    expect(finalStatus).toBe(false);
  });

  it('should count deleted users to be 1', () => {
    let finalStatus = UsersService.getDeletedUsers().length;
    expect(finalStatus).toBe(1);
  })
});
