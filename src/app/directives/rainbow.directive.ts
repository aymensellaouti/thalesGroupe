import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  width = 2;
  constructor(private element: ElementRef) {}
  @HostListener('keyup') onKeyUp() {
/*     console.log(this.element.nativeElement.value);

    if (!this.element.nativeElement.style.borderWidth) {
      this.element.nativeElement.style.borderWidth = this.width + 'px';
    } else {
      this.width += 2;
      this.element.nativeElement.style.borderWidth = this.width + 'px';
    } */
    this.bc = this.color = this.getRandomColor();
  }
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
