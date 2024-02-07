import { Component, Input } from '@angular/core';
import { Utilities } from '../../../../../core/utils/utilities';
import { ITaskList } from '../../../../../core/interfaces/ITaskList';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.scss'
})
export class MyTasksComponent {
  @Input() files: ITaskList[] = [
    {
      name: 'Public Beta Release',
      assigned: {
        name: 'James Andy',
        avatar: 'user23.jpg',
      },
      deadline: '14 Mar 2023',
      status: 'Ongoing',
      completion: '10/10',
      priority: 'High',
    },
    {
      name: 'Fix Platform Errors',
      assigned: {
        name: 'Alina Smith',
        avatar: 'user22.jpg',
      },
      deadline: '12 Feb 2023',
      status: 'Completed',
      completion: '9/10',
      priority: 'Low',
    },
    {
      name: 'Launch our Mobile App',
      assigned: {
        name: 'David Warner',
        avatar: 'user21.jpg',
      },
      deadline: '10 Mar 2023',
      status: 'Ongoing',
      completion: '8/10',
      priority: 'High',
    },
    {
      name: ' Add the New Pricing Page ',
      assigned: {
        name: 'Steven Smith',
        avatar: 'user20.jpg',
      },
      deadline: '08 Mar 2023',
      status: 'Ongoing',
      completion: '7/10',
      priority: 'Medium',
    },
    {
      name: 'Redesign New Online Shop',
      assigned: {
        name: 'Shane Cloud',
        avatar: 'user19.jpg',
      },
      deadline: '01 Mar 2023',
      status: 'Pending',
      completion: '6/10',
      priority: 'Low',
    },
    {
      name: 'Material Ui Design',
      assigned: {
        name: 'Olivia Lucy',
        avatar: 'user18.jpg',
      },
      deadline: '03 Apr 2023',
      status: 'Pending',
      completion: '5/10',
      priority: 'High',
    },
    {
      name: 'Add Progress Track',
      assigned: {
        name: 'Liam Payne',
        avatar: 'user17.jpg',
      },
      deadline: '12 Feb 2023',
      status: 'Completed',
      completion: '4/10',
      priority: 'Medium',
    },
    {
      name: 'Project for Client',
      assigned: {
        name: 'David Warner',
        avatar: 'user16.jpg',
      },
      deadline: '14 Mar 2023',
      status: 'Ongoing',
      completion: '3/10',
      priority: 'Low',
    },
    {
      name: 'Opened New Showcase',
      assigned: {
        name: 'Alina Smith',
        avatar: 'user15.jpg',
      },
      deadline: '28 Feb 2023',
      status: 'Completed',
      completion: '2/10',
      priority: 'High',
    },
    {
      name: 'Updated the Status',
      assigned: {
        name: 'James Andy',
        avatar: 'user14.jpg',
      },
      deadline: '10 Mar 2023',
      status: 'Completed',
      completion: '1/10',
      priority: 'Medium',
    },
    {
      name: 'Launch our Mobile App',
      assigned: {
        name: 'David Warner',
        avatar: 'user22.jpg',
      },
      deadline: '10 Mar 2023',
      status: 'Ongoing',
      completion: '8/10',
      priority: 'High',
    },
    {
      name: ' Add the New Pricing Page ',
      assigned: {
        name: 'Steven Smith',
        avatar: 'user20.jpg',
      },
      deadline: '08 Mar 2023',
      status: 'Ongoing',
      completion: '7/10',
      priority: 'Medium',
    },
    {
      name: 'Redesign New Online Shop',
      assigned: {
        name: 'Shane Cloud',
        avatar: 'user19.jpg',
      },
      deadline: '01 Mar 2023',
      status: 'Pending',
      completion: '6/10',
      priority: 'Low',
    },
    {
      name: 'Material Ui Design',
      assigned: {
        name: 'Olivia Lucy',
        avatar: 'user18.jpg',
      },
      deadline: '03 Apr 2023',
      status: 'Pending',
      completion: '5/10',
      priority: 'High',
    },
    {
      name: 'Add Progress Track',
      assigned: {
        name: 'Liam Payne',
        avatar: 'user17.jpg',
      },
      deadline: '12 Feb 2023',
      status: 'Completed',
      completion: '4/10',
      priority: 'Medium',
    },
  ]

  public getStatusClass(type: string): string {
    return Utilities.setStatusClass(type);
  }
}
