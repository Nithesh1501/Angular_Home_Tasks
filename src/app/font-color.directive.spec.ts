import { ElementRef, SimpleChange } from '@angular/core';
import { FontColorDirective } from './font-color.directive';

describe('FontColorDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef = new ElementRef(document.createElement('div'));
    const directive = new FontColorDirective(el);
    expect(directive).toBeTruthy();
  });
});
