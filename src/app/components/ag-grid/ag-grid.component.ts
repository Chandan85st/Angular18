import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import 'ag-grid-community/styles/ag-grid.css';/* Core Data Grid CSS */
import 'ag-grid-community/styles/ag-theme-material.css';/* Quartz Theme Specific CSS */

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <ag-grid-angular
    class="ag-theme-material"
    style="height: 90vh;"
    [rowData]="rowData"
    [columnDefs]="colDefs"
    [pagination]="pagination"
    [paginationPageSize]="paginationPageSize"
    [paginationPageSizeSelector]="paginationPageSizeSelector"
    [defaultColDef]="defaultColDef"
    />
  `,
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent {

  // @Input() colDefs: any[] = [];

  pagination = true;
  paginationPageSize = 13;
  paginationPageSizeSelector = [13, 20]

  defaultColDef: ColDef = {
    flex: 1,
  }

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "studentName", headerName: "Student Name" },
    { field: "studentEmail", headerName: "Email ID" },
    { field: "studentBranch", headerName: "Student Branch" },
    { field: "action", headerName: "Action" }
  ];

  // Row Data: The data to be displayed.
  rowData = [
    { studentName: "Tesla", studentEmail: "Model Y", studentBranch: 64950, action: true },
    { studentName: "Ford", studentEmail: "F-Series", studentBranch: 33850, action: false },
    { studentName: "Toyota", studentEmail: "Corolla", studentBranch: 29600, action: false },
  ];


}

