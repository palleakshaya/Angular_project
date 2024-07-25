import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  like = 0;
  disLike = 0;

  likeIncrement() {
    this.like += 1;
  }
  disLikeIncrement() {
    this.disLike += 1;
  }
}
