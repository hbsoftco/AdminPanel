import { Component } from '@angular/core';
import { IMember } from '../../../../core/interfaces';

@Component({
  selector: 'app-members-grid',
  templateUrl: './members-grid.component.html',
  styleUrl: './members-grid.component.scss'
})
export class MembersGridComponent {
  members: IMember[] = [
    {
      avatar: '/assets/images/avatars/user12.jpg',
      name: 'Alvarado Turner',
      userName: '@alvaradoturner',
      postCount: '18k',
      followers: '5.21k',
      following: '32k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user13.jpg',
      name: 'Evangelina Mcclain',
      userName: '@evangelinamcclain',
      postCount: '10k',
      followers: '1.11k',
      following: '12k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user11.jpg',
      name: 'Candice Munoz',
      userName: '@candicemunoz',
      postCount: '28k',
      followers: '2.12k',
      following: '21k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user14.jpg',
      name: 'Bernard Langley',
      userName: '@bernardlangley',
      postCount: '21k',
      followers: '1.21k',
      following: '42k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user8.jpg',
      name: 'Kristie Hall',
      userName: '@boltonobrien',
      postCount: '5k',
      followers: '1.11k',
      following: '11k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user23.jpg',
      name: 'Dee Alvarado',
      userName: '@deealvarado',
      postCount: '18k',
      followers: '5.21k',
      following: '32k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user18.jpg',
      name: 'Cervantes Kramer',
      userName: '@cervanteskramer',
      postCount: '8k',
      followers: '3k',
      following: '10k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user22.jpg',
      name: 'Bolton Obrien',
      userName: '@boltonobrien',
      postCount: '18k',
      followers: '5.21k',
      following: '32k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user16.jpg',
      name: 'Dejesus Michael',
      userName: '@dejesusmichael',
      postCount: '9k',
      followers: '21k',
      following: '42k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user15.jpg',
      name: 'Alissa Nelson',
      userName: '@alissanelson',
      postCount: '5k',
      followers: '5k',
      following: '5k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user9.jpg',
      name: 'English Haney',
      userName: '@englishhaney',
      postCount: '10k',
      followers: '4.10k',
      following: '13k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
    {
      avatar: '/assets/images/avatars/user17.jpg',
      name: 'Edwards Mckenzie',
      userName: '@edwardsmckenzie',
      postCount: '18k',
      followers: '5.21k',
      following: '32k',
      email:'alvaradoturner@hbsoft.com',
      phone: '+989120000000'
    },
  ]
}
