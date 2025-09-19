import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = "Angular 20";

  coursePrice: number = 122;

  maxLength: number = 7;

  minChar: number = 3;

  isDisabled: boolean = false;

  typeName: string = "checkbox";

  myClassName: string = "myColor";

  constructor() {

  }


  sayHello() {
    alert("Hello from method");
  }

  changeCourse() {this.courseName = "React js";}

  ChangeCity( ) {
    alert("city changed");
  }
}
