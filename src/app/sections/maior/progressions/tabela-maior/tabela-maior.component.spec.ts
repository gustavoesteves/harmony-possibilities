import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMaiorComponent } from './tabela-maior.component';

describe('TabelaMaiorComponent', () => {
  let component: TabelaMaiorComponent;
  let fixture: ComponentFixture<TabelaMaiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaMaiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaMaiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
