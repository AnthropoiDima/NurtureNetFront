import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenaComponent } from './ocena.component';

describe('OcenaComponent', () => {
  let component: OcenaComponent;
  let fixture: ComponentFixture<OcenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcenaComponent]
    });
    fixture = TestBed.createComponent(OcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
