import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluidoComponent } from './concluido.component';

describe('ConcluidoComponent', () => {
  let component: ConcluidoComponent;
  let fixture: ComponentFixture<ConcluidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcluidoComponent]
    });
    fixture = TestBed.createComponent(ConcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
