import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './students/add-student/add-student.component';

export const routes: Routes = [
    { path: 'students', component: StudentsComponent },
    { path: 'add-student', component: AddStudentComponent }
];
