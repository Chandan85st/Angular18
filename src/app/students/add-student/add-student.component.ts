import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentAppService } from '../../student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  providers: [StudentAppService],
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  addStudentForm!: FormGroup;

  constructor(private fb: FormBuilder, private _studentApiService: StudentAppService) {
    this.addStudentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email]],
      studentBranch: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.addStudentForm.valid) {
      this._studentApiService.addStudent(this.addStudentForm.value).subscribe(
        res => {
          console.log('Student added successfully');
          console.log(this.addStudentForm.value);
          this.addStudentForm.reset();
        },
        error => {
          console.error('Error adding student', error);
        }
      )
    }
  }

}
