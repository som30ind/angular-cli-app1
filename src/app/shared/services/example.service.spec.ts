/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleService]
    });
  });

  it('should ...', inject([ExampleService], (service: ExampleService) => {
    expect(service).toBeTruthy();
  }));
});
