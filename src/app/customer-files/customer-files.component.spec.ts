import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilesComponent } from './customer-files.component';

describe('CustomerFilesComponent', () => {
  let component: CustomerFilesComponent;
  let fixture: ComponentFixture<CustomerFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
