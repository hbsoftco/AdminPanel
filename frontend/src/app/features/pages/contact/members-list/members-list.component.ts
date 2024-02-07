import { Component } from '@angular/core';
import { IUser } from '../../../../core/interfaces';
import { MenuItem } from 'primeng/api';
import { Utilities } from '../../../../core/utils/utilities';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.scss'
})
export class MembersListComponent {
  users: IUser[] = []
  items: MenuItem[] | undefined;

  public getStatusClass(type: string): string {
    return Utilities.setStatusClass(type);
  }

  ngOnInit() {
    this.users = [
      {
        id: 1,
        name: 'Lucile Young',
        avatar: 'user8.jpg',
        username: '@lyoung4a',
        email: 'user8@hbsoft.org',
        role: 'Editor',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Jordan Stevenson',
        avatar: 'user9.jpg',
        username: '@jstevenson5c',
        email: 'user9@hbsoft.org',
        role: 'Admin',
        status: 'Inactive',
      },
      {
        id: 3,
        name: 'Francis Frank',
        avatar: 'user10.jpg',
        username: '@ffrank7e',
        email: 'user10@hbsoft.org',
        role: 'Maintainer',
        status: 'Active',
      },
      {
        id: 4,
        name: 'Phoebe Patterson',
        avatar: 'user11.jpg',
        username: '@ppatterson2g',
        email: 'user11@hbsoft.org',
        role: 'Author',
        status: 'Active',
      },
      {
        id: 5,
        name: 'James Andy',
        avatar: 'user1.jpg',
        username: '@andyjm32',
        email: 'user1@hbsoft.org',
        role: 'Admin',
        status: 'Inactive',
      },
      {
        id: 6,
        name: 'Sarah Taylor',
        avatar: 'user2.jpg',
        username: '@taylors32',
        email: 'user2@hbsoft.org',
        role: 'Editor',
        status: 'Active',
      },
      {
        id: 7,
        name: 'David Warner',
        avatar: 'user3.jpg',
        username: '@davidwabc2',
        email: 'user3@hbsoft.org',
        role: 'Author',
        status: 'Active',
      },
      {
        id: 8,
        name: 'Steven Smith',
        avatar: 'user4.jpg',
        username: '@ssmith542',
        email: 'user4@hbsoft.org',
        role: 'Maintainer',
        status: 'Active',
      },
      {
        id: 3,
        name: 'Francis Frank',
        avatar: 'user10.jpg',
        username: '@ffrank7e',
        email: 'user10@hbsoft.org',
        role: 'Maintainer',
        status: 'Active',
      },
      {
        id: 4,
        name: 'Phoebe Patterson',
        avatar: 'user11.jpg',
        username: '@ppatterson2g',
        email: 'user11@hbsoft.org',
        role: 'Author',
        status: 'Active',
      },
      {
        id: 5,
        name: 'James Andy',
        avatar: 'user1.jpg',
        username: '@andyjm32',
        email: 'user1@hbsoft.org',
        role: 'Admin',
        status: 'Inactive',
      },
      {
        id: 6,
        name: 'Sarah Taylor',
        avatar: 'user2.jpg',
        username: '@taylors32',
        email: 'user2@hbsoft.org',
        role: 'Editor',
        status: 'Active',
      },
    ]

    this.items = [
      {
        label: 'Share',
        icon: 'pi pi-share-alt'
      },
      {
        label: 'Get Shareable Link',
        icon: 'pi pi-link'
      },
      {
        label: 'Rename',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash'
      },
    ]
  }
}
