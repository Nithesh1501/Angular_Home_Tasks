import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective implements OnChanges {
  @Input('isDeleted') isDeleted: boolean = false;
  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.el, this.isDeleted);

    if (this.isDeleted) {
      this.el.nativeElement.style.color = 'red';
    }
    else {
      this.el.nativeElement.style.color = 'green';
    }
  }
}
