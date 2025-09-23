import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core'; 

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {

  div1ClassName = signal<String>('');

  isDiv2Blue: boolean = false;


  setBgClass (className: String) {
    this.div1ClassName.set(className);
  }

  toggleDiv2BgColor () {
    this.isDiv2Blue = !this.isDiv2Blue;
  }

}
