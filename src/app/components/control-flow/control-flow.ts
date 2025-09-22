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


  isShow() {
    this.isVisible = true;
  }

  isHide() {
    this.isVisible = false;
  }
}
