import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent],
  template: `
  <div class="container">
    <app-item-list></app-item-list>
  </div>
  `
})
export class AppComponent {
  title = 'demo';
}
