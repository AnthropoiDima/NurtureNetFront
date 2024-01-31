import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentifikacijaComponent } from './autentifikacija.component';

describe('AutentifikacijaComponent', () => {
  let component: AutentifikacijaComponent;
  let fixture: ComponentFixture<AutentifikacijaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutentifikacijaComponent]
    });
    fixture = TestBed.createComponent(AutentifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
