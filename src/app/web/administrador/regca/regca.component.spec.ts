import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcaComponent } from './regca.component';

describe('RegcaComponent', () => {
  let component: RegcaComponent;
  let fixture: ComponentFixture<RegcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
