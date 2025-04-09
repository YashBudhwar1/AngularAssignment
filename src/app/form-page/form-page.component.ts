import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Contact Form</h2>
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" formControlName="name" />
        <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
          <p>Name is required.</p>
        </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email" />
        <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
          <p>Email is invalid.</p>
        </div>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" formControlName="message"></textarea>
        <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
          <p>Message is required.</p>
        </div>
      </div>
      <button type="submit" [disabled]="contactForm.invalid">Submit</button>
    </form>
  `,
  styles: [],
})
export class FormPageComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({}); // Provide a default value

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission here
    }
  }
}