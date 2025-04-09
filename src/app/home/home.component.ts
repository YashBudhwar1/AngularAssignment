// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Welcome to the Angular App</h2>
    <p>This is the home page.</p>
  `,
  styles: [],
})
export class HomeComponent {}