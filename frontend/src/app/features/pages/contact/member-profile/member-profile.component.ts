import { Component } from '@angular/core';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrl: './member-profile.component.scss'
})
export class MemberProfileComponent {
  data: any = [
    {
      value: '24K',
      icon: 'donut-chart',
      title: 'Total Projects',
    },
    {
      value: '155K',
      icon: 'goal',
      title: 'Pending Projects',
    },
    {
      value: '$50.5M',
      icon: 'award',
      title: 'Total Revenue',
    },
  ]

  
}
