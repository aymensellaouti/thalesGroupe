import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() heigth = 150;
  @Input() width = 150;
  @Input() isRounded = true;
  @Input() timer = 1500;
  path = 'as.jpg';
  sliderObservable: Observable<string> = null;
  sliderSubscription: Subscription = null;
  @Input() paths = [
    '404.png',
    'as.jpg',
    'zizou.jpeg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  constructor() {}
  ngOnDestroy(): void {
    this.sliderSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.sliderObservable = new Observable((observer) => {
      let i = 1;
      observer.next(this.paths[0]);
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, this.timer);
    });
    this.sliderSubscription = this.sliderObservable.subscribe(
      (newPath) => (this.path = newPath)
    );
  }
}
