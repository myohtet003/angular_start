import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
// import { Admin } from './components/admin/admin';
@Component({
  selector: 'app-root',
  imports: [ Admin, User, DataBinding ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('start_angular');
}
