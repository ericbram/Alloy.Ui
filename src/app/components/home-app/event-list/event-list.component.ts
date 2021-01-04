// Copyright 2021 Carnegie Mellon University. All Rights Reserved.
// Released under a MIT (SEI)-style license. See LICENSE.md in the project root for license information.

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventTemplateService } from 'src/app/generated/alloy.api/api/eventTemplate.service';
import { EventTemplate } from 'src/app/generated/alloy.api/model/eventTemplate';
import { Router } from '@angular/router';
import { ComnAuthQuery, Theme } from '@cmusei/crucible-common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public eventsDataSource: MatTableDataSource<EventTemplate>;
  public displayedColumns: string[] = ['name', 'description', 'durationHours'];

  public filterString: string;
  public isLoading: Boolean;
  theme$: Observable<Theme>;

  constructor(
    private eventTemplateService: EventTemplateService,
    private router: Router,
    private authQuery: ComnAuthQuery
  ) {
    this.theme$ = this.authQuery.userTheme$;

    this.eventsDataSource = new MatTableDataSource<EventTemplate>(
      new Array<EventTemplate>()
    );
  }

  ngOnInit() {
    this.filterString = '';

    // Initial datasource
    this.eventTemplateService.getEventTemplates().subscribe((defs) => {
      this.eventsDataSource.data = defs;
      this.sort.sort(<MatSortable>{ id: 'name', start: 'asc' });
      this.eventsDataSource.sort = this.sort;
    });

    // Subscribe to the service
    this.isLoading = false;
  }

  /**
   * Called by UI to add a filter to the DataSource
   * filterValue
   */
  applyFilter(filterValue: string) {
    this.filterString = filterValue;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.eventsDataSource.filter = filterValue;
  }

  /**
   * Clears the search string
   */
  clearFilter() {
    this.applyFilter('');
  }

  openEvent(id: string) {
    this.router.navigate(['/events/' + id]);
  }
}
