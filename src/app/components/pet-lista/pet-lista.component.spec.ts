import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListaComponent } from './pet-lista.component';

describe('PetListaComponent', () => {
  let component: PetListaComponent;
  let fixture: ComponentFixture<PetListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetListaComponent]
    });
    fixture = TestBed.createComponent(PetListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
