import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FzButtonComponent } from './fz-button.component';

describe('FzButtonComponent', () => {
  let component: FzButtonComponent;
  let fixture: ComponentFixture<FzButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FzButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
