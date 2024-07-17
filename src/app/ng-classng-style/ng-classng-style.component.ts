import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-classng-style',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-classng-style.component.html',
  styleUrl: './ng-classng-style.component.scss'
})
export class ClassStyleComponent {

  bgColor: string = 'bg-primary';
  isActive: boolean = false;
  num1: string = '';
  num2: string = '';
  isChecked: boolean = false;

  addRedClass(): void {
    this.bgColor = 'bg-danger'
  }

  addBlueClass(): void {
    this.bgColor = 'bg-primary'
  }

  toggleColor(): void {
    this.isActive = !this.isActive;
  }

  onChecked(): void {
    this.isChecked = !this.isChecked;
  }

  customStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'font-size': '16px',
    'text-align': 'center',
    'width': '200px',
    'height': '200px'
  }

  studentList: any[] = [
    { studId: 13, totalMarks: 45, status: true, gender: 'male', name: 'Ravi', city: 'delhi' },
    { studId: 14, totalMarks: 66, status: true, gender: 'female', name: 'Moni', city: 'Nagpur' },
    { studId: 15, totalMarks: 88, status: false, gender: 'male', name: 'Krishan', city: 'Gaya' },
    { studId: 16, totalMarks: 90, status: true, gender: 'male', name: 'Mohit', city: 'Bhagalpur' },
    { studId: 17, totalMarks: 56, status: false, gender: 'female', name: 'Komal', city: 'Mumbai' },
    { studId: 18, totalMarks: 76, status: false, gender: 'female', name: 'Kriti', city: 'Patna' },
    { studId: 19, totalMarks: 98, status: true, gender: 'male', name: 'Shivam', city: 'Pune' },
    { studId: 20, totalMarks: 72, status: false, gender: 'male', name: 'Manish', city: 'Noida' },
  ]

}
