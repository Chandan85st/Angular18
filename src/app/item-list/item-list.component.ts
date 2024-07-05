import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemDetailComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit {

  itemData: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedData: any[] = [];
  detailData: any;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getList().subscribe((res: any) => {
      this.itemData = res;
      this.updatePaginatedData();
    });
  }

  getDetail(data: any): void {
    this.detailData = data
  }

  previousPage(): void {
    this.setPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.setPage(this.currentPage + 1);
  }

  totalPages(): number {
    return Math.ceil(this.itemData.length / this.itemsPerPage);
  }

  setPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage = page;
    this.updatePaginatedData();
  }

  updatePaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedData = this.itemData.slice(startIndex, startIndex + this.itemsPerPage);
  }

}
