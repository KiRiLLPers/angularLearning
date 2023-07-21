import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCardPopupComponent } from './add-new-card-popup.component';

describe('AddNewCardPopupComponent', () => {
  let component: AddNewCardPopupComponent;
  let fixture: ComponentFixture<AddNewCardPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCardPopupComponent]
    });
    fixture = TestBed.createComponent(AddNewCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
