import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { throttle } from 'lodash';

@Directive({
  selector: '[appHorizontalScroll]',
})
export class HorizontalScrollDirective implements AfterViewInit {
  @Input() speed = 2;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const handleWheel = throttle((e: WheelEvent) => {
      e.preventDefault();
      this.el.nativeElement.scrollBy({
        left: e.deltaY * this.speed,
        behavior: 'smooth',
      });
    }, 0);

    this.el.nativeElement.addEventListener('wheel', handleWheel, {
      passive: false,
    });
  }
}
