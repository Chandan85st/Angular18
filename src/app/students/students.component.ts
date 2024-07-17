import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAppService } from '../student.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { AgGridComponent } from '../components/ag-grid/ag-grid.component';

@Component({
  selector: 'app-students',
  standalone: true,
  providers: [StudentAppService],
  imports: [CommonModule, AgGridComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {

  itemData: any[] = [];
  pagination = true;
  paginationInitial = 1;
  paginationPageSize = 5;
  paginationPageSizeSelector = [13, 20]

  sliceStart: number = 0;
  sliceEnd: number = 5;


  constructor(private _studentApiService: StudentAppService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStudentsList()
    // this._studentApiService.searchedKey.subscribe(res => {
    //   console.log(res)
    // })
  }

  getStudentsList(): void {
    this._studentApiService.getList().subscribe((res: any) => {
      this.itemData = res;
    })
  }

  deleteStudent(id: number): void {
    this._studentApiService.deleteStud(id).subscribe(
      res => {
        console.log('Student deleted successfully');
        this.getStudentsList();
      },
      error => {
        console.error('Error deleting student', error);
      }
    )
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getStudentsList()
      console.log('The dialog was closed');
    });
  }

  paginationPrev(): void {
    if (this.sliceEnd > 5) {
      this.sliceStart = this.sliceStart - 5
      this.sliceEnd = this.sliceEnd - 5
    }
  }

  paginationNext(): void {
    if (this.itemData.length >= this.sliceEnd) {
      this.sliceStart = this.sliceStart + 5
      this.sliceEnd = this.sliceEnd + 5
    }
  }

}













