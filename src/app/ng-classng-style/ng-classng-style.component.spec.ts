import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassngStyleComponent } from './ng-classng-style.component';

describe('NgClassngStyleComponent', () => {
  let component: NgClassngStyleComponent;
  let fixture: ComponentFixture<NgClassngStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassngStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassngStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
