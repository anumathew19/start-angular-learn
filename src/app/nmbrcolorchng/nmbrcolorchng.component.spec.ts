import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmbrcolorchngComponent } from './nmbrcolorchng.component';

describe('NmbrcolorchngComponent', () => {
  let component: NmbrcolorchngComponent;
  let fixture: ComponentFixture<NmbrcolorchngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmbrcolorchngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmbrcolorchngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
