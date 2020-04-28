import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LudoboardComponent } from './ludoboard.component';

describe('LudoboardComponent', () => {
  let component: LudoboardComponent;
  let fixture: ComponentFixture<LudoboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LudoboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LudoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
