import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExampleComponent } from './binding-example.component';

describe('BindingExampleComponent', () => {
  let component: BindingExampleComponent;
  let fixture: ComponentFixture<BindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
