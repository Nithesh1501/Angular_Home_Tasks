import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(isDeleted: boolean, ...args: unknown[]): unknown {
    return isDeleted ? "Deleted" : "Active";
  }

}
