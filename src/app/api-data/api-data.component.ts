// api-data.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>API Data</h2>
    <div *ngIf="data">
      <pre>{{ data | json }}</pre>
    </div>
    <div *ngIf="error">
      <p>Error: {{ error }}</p>
    </div>
    <div *ngIf="!data && !error">
      <p>Loading...</p>
    </div>
  `,
  styles: [],
})
export class ApiDataComponent implements OnInit {
  data: any;
  error: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (data) => (this.data = data),
      error: (error) => (this.error = error),
    });
  }
}