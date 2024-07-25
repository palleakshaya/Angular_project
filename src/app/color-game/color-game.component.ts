import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color-game.component.html',
  styleUrl: './color-game.component.scss'
})
export class ColorGameComponent {
  color = ''

colorList = ['crimson','purple','skyblue']

addingColor(){
  this.colorList.push(this.color)
 
 }


}



