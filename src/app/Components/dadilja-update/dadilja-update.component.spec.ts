import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadiljaUpdateComponent } from './dadilja-update.component';

describe('DadiljaUpdateComponent', () => {
  let component: DadiljaUpdateComponent;
  let fixture: ComponentFixture<DadiljaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadiljaUpdateComponent]
    });
    fixture = TestBed.createComponent(DadiljaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
