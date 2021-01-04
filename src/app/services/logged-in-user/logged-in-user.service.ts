// Copyright 2021 Carnegie Mellon University. All Rights Reserved.
// Released under a MIT (SEI)-style license. See LICENSE.md in the project root for license information.

import { Injectable, OnDestroy } from '@angular/core';
import { ComnAuthQuery } from '@cmusei/crucible-common';
import { User as AuthUser } from 'oidc-client';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { PlayerService } from '../../generated/alloy.api';

// Used to display Super User text
export const SUPER_USER = 'Super User';

@Injectable({ providedIn: 'root' })
export class LoggedInUserService implements OnDestroy {
  public loggedInUser$: BehaviorSubject<AuthUser> = new BehaviorSubject(null);
  public isSuperUser: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  unsubscribe$: Subject<null> = new Subject<null>();

  constructor(
    private playerService: PlayerService,
    private authQuery: ComnAuthQuery
  ) {
    this.authQuery.user$
      .pipe(
        filter((user: AuthUser) => user != null),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((user) => this.setLoggedInUser(user));
  }

  public setLoggedInUser(authUser: AuthUser) {
    this.playerService
      .getUserMe()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        authUser.profile = { ...authUser.profile, ...user };
        this.isSuperUser.next(
          user.isSystemAdmin ||
            user.permissions.some((p) => p.key === 'ContentDeveloper')
        );
        this.loggedInUser$.next(authUser);
      });
  }
  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
