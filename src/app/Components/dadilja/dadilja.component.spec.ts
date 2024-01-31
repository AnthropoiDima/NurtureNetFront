import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadiljaComponent } from './dadilja.component';

describe('DadiljaComponent', () => {
  let component: DadiljaComponent;
  let fixture: ComponentFixture<DadiljaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadiljaComponent]
    });
    fixture = TestBed.createComponent(DadiljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
