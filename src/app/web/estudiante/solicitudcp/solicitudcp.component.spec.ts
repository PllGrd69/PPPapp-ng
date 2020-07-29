import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudcpComponent } from './solicitudcp.component';

describe('SolicitudcpComponent', () => {
  let component: SolicitudcpComponent;
  let fixture: ComponentFixture<SolicitudcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
