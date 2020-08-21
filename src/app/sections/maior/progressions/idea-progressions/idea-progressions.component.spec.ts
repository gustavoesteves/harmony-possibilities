import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaProgressionsComponent } from './idea-progressions.component';

describe('IdeaProgressionsComponent', () => {
  let component: IdeaProgressionsComponent;
  let fixture: ComponentFixture<IdeaProgressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaProgressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaProgressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
