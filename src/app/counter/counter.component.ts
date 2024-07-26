import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  like = 24;
  disLike = 12;

  likeIncrement() {
    this.like += 1;
  }
  disLikeIncrement() {
    this.disLike += 1;
  }
}
