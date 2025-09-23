import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [ FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  isVisible: boolean = false;

  startMonthDate: string = "feb";

  cityList: string[] = ["Yangon", "Mandalay", "Naypyitaw", "Mawlamyine"];

  studentList: {name: string, city: string, isActive: boolean}[] = [
    {name: "Aung Aung", city: "Yangon", isActive: false},
    {name: "Kyaw Kyaw", city: "Mandalay", isActive: false},
    {name: "Mya Mya", city: "Naypyitaw", isActive: true},
    {name: "Ko Ko", city: "Mawlamyine", isActive: false},
  ]


  isShow() {
    this.isVisible = true;
  }

  isHide() {
    this.isVisible = false;
  }
}
