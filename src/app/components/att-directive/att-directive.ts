import {
  LowerCasePipe,
  NgClass,
  NgStyle,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
  JsonPipe,
  DatePipe
} from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, LowerCasePipe, UpperCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  div1ClassName = signal<String>('');

  isDiv2Blue: boolean = false;

  fullName: string = 'myo Htet Kyaw';

  rollNoList: number[] = [1, 2, 3, 4, 5, 6, 7];

  studentInfo: any = {
    name: 'myo Htet Kyaw',
    age: 25,
    address: 'Yangon, Myanmar',
  };

  currentDate: Date = new Date();

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  setBgClass(className: String) {
    this.div1ClassName.set(className);
  }

  toggleDiv2BgColor() {
    this.isDiv2Blue = !this.isDiv2Blue;
  }
}
