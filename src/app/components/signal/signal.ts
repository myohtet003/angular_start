import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

  firstName: string = "myo htet";

  productName: string = "laptop";

  CourseName = signal<String>("React");

  CourseDuration = signal<String>("15 videos");

  CourseDetail = computed(() => this.CourseName() + " - " + this.CourseDuration());

  constructor() {
    this.firstName = "Aung Aung";
    console.log("first", this.firstName);

    this.CourseName.set("Angular");
    this.CourseDuration.set("20 videos");
    console.log("first", this.CourseName());
    console.log("second", this.CourseDuration());
  }
}
