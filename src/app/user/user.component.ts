import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 @Input() name = 'Rosiee!!';
 @Input() imagelink = "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
}
