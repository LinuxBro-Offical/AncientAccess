import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritagedetailComponent } from './heritagedetail.component';

describe('HeritagedetailComponent', () => {
  let component: HeritagedetailComponent;
  let fixture: ComponentFixture<HeritagedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritagedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
