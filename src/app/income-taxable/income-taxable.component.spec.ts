import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxableComponent } from './income-taxable.component';

describe('IncomeTaxableComponent', () => {
  let component: IncomeTaxableComponent;
  let fixture: ComponentFixture<IncomeTaxableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
