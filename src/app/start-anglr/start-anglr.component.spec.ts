import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAnglrComponent } from './start-anglr.component';

describe('StartAnglrComponent', () => {
  let component: StartAnglrComponent;
  let fixture: ComponentFixture<StartAnglrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAnglrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAnglrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
