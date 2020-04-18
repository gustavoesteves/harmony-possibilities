import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleFifhtsComponent } from './circle-fifhts.component';

describe('CircleFifhtsComponent', () => {
  let component: CircleFifhtsComponent;
  let fixture: ComponentFixture<CircleFifhtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleFifhtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleFifhtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
