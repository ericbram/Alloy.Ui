// Copyright 2021 Carnegie Mellon University. All Rights Reserved.
// Released under a MIT (SEI)-style license. See LICENSE.md in the project root for license information.

import { TestBed } from '@angular/core/testing';

import { EventTemplatesService } from './event-templates.service';

describe('EventTemplatesService', () => {
  let service: EventTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
