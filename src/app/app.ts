import { Component, signal } from '@angular/core';
import { ControlFlow } from './components/control-flow/control-flow';

// import { RouterOutlet } from '@angular/router'; 
// import { Admin } from './components/admin/admin';
// import { User } from './components/user/user';
// import { DataBinding } from './components/data-binding/data-binding';
// import { Signal } from './components/signal/signal';
// import { Admin } from './components/admin/admin';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ControlFlow ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('start_angular');
}
