import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHilight]'
})
export class HilightDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'hilight');
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'hilight');
  }

  

}
