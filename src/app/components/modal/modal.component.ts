import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentAppService } from '../../student.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, ReactiveFormsModule, CommonModule],
  providers: [StudentAppService],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  addStudentForm!: FormGroup;

  constructor(
    private fb: FormBuilder, private _studentApiService: StudentAppService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addStudentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email]],
      studentBranch: ['', [Validators.required]]
    })

    this.addStudentForm.patchValue({
      studentName: this.data.studentName,
      studentEmail: this.data.studentEmail,
      studentBranch: this.data.studentBranch,
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.addStudentForm.valid) {
      this._studentApiService.editStudent(this.data.id, this.addStudentForm.value).subscribe(
        res => {
          console.log('Student update successfully');
          this.addStudentForm.reset();
          this.dialogRef.close();

          // const data = { message: 'Hello from Sender Component' };
          // this._studentApiService.searchedKey.next(data);


        },
        error => {
          console.error('Error adding student', error);
        }

      )
    }
  }

}
