import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PongboardComponent } from './pongboard.component';

describe('PongboardComponent', () => {
  let component: PongboardComponent;
  let fixture: ComponentFixture<PongboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PongboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PongboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
