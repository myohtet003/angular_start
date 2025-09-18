import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
// import { Admin } from './components/admin/admin';
@Component({
  selector: 'app-root',
  imports: [ Admin, User ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('start_angular');
}
