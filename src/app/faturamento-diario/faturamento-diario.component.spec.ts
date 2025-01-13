import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentoDiarioComponent } from './faturamento-diario.component';

describe('FaturamentoDiarioComponent', () => {
  let component: FaturamentoDiarioComponent;
  let fixture: ComponentFixture<FaturamentoDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturamentoDiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturamentoDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
