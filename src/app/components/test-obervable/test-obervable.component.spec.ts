import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObervableComponent } from './test-obervable.component';

describe('TestObervableComponent', () => {
  let component: TestObervableComponent;
  let fixture: ComponentFixture<TestObervableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestObervableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
