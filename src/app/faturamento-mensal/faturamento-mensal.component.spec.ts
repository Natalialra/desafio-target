import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentoMensalComponent } from './faturamento-mensal.component';

describe('FaturamentoMensalComponent', () => {
  let component: FaturamentoMensalComponent;
  let fixture: ComponentFixture<FaturamentoMensalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturamentoMensalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturamentoMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
