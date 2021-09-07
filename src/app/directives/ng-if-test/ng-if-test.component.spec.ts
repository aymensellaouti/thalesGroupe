import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfTestComponent } from './ng-if-test.component';

describe('NgIfTestComponent', () => {
  let component: NgIfTestComponent;
  let fixture: ComponentFixture<NgIfTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
