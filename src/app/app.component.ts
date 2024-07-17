import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'demo';
}








// import { ItemListComponent } from './item-list/item-list.component';
// import { ClassStyleComponent } from './ng-classng-style/ng-classng-style.component';
// import { LoginComponent } from './login/login.component';
// import { StudentsComponent } from './students/students.component';

// ClassStyleComponent, ItemListComponent, LoginComponent, StudentsComponent
// <app-students />
// <app-login />
// <app-item-list></app-item-list>
// <app-ng-classng-style></app-ng-classng-style>