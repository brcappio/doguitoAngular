import { TestBed } from '@angular/core/testing';

import { ConsultaCEPService } from './consulta-cep.service';

describe('ConsultaCEPService', () => {
  let service: ConsultaCEPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCEPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
