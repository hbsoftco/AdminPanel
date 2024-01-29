import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messagesList: any = [
    {
      category: {
        name: 'PINNED',
        icon: 'pi pi-bookmark'
      },
      items: [
        {
          name: 'Laurent Perrier',
          avatar: 'user11.jpg',
          isTyping: true,
          status: 'online',
          newMessageCount: 2,
          time: '4:30 PM',
          lastMsg: {
            me: '',
            user: ''
          },
          readStatus: ''
        },
        {
          name: 'Nunez Faulkner',
          avatar: 'user12.jpg',
          isTyping: false,
          status: 'online',
          newMessageCount: 0,
          time: '9:36 AM',
          lastMsg: {
            me: '',
            user: 'Hello everyone ...'
          },
          readStatus: 'read'
        },
        {
          name: 'Bernard Langley',
          avatar: 'user23.jpg',
          isTyping: false,
          status: 'offline',
          newMessageCount: 0,
          time: '7:18 PM',
          lastMsg: {
            me: 'That cool, go for it...',
            user: ''
          },
          readStatus: 'notRead'
        },
        {
          name: 'Edwards Mckenz',
          avatar: 'user22.jpg',
          isTyping: false,
          status: '',
          newMessageCount: 0,
          time: '08:30 PM',
          lastMsg: {
            me: 'Great ! 🔥',
            user: ''
          },
          readStatus: ''
        },
      ]
    },
    {
      category: {
        name: 'ALL MESSAGES',
        icon: 'pi pi-comments'
      },
      items: [
        {
          name: 'Elsie Melendez',
          avatar: 'user16.jpg',
          isTyping: true,
          status: 'online',
          newMessageCount: 2,
          time: '4:30 PM',
          lastMsg: {
            me: '',
            user: ''
          },
          readStatus: ''
        },
        {
          name: 'Mcleod Wagner',
          avatar: 'user17.jpg',
          isTyping: false,
          status: 'online',
          newMessageCount: 0,
          time: '9:36 AM',
          lastMsg: {
            me: '',
            user: 'What are you...'
          },
          readStatus: 'read'
        },
        {
          name: 'Alina Smith',
          avatar: 'user13.jpg',
          isTyping: false,
          status: 'offline',
          newMessageCount: 0,
          time: '7:18 PM',
          lastMsg: {
            me: 'That cool, go for it...',
            user: ''
          },
          readStatus: 'notRead'
        },
        {
          name: 'Silva Foster',
          avatar: 'user9.jpg',
          isTyping: false,
          status: '',
          newMessageCount: 0,
          time: '08:30 PM',
          lastMsg: {
            me: 'Great ! 🔥',
            user: ''
          },
          readStatus: ''
        },
        {
          name: 'Joseph Strick',
          avatar: 'user8.jpg',
          isTyping: false,
          status: '',
          newMessageCount: 0,
          time: '08:30 PM',
          lastMsg: {
            me: 'Cool ! 🔥',
            user: ''
          },
          readStatus: ''
        },
      ]
    }
  ]

  chatData: any = [
    {
      me: false,
      avatar: '/assets/images/avatars/user11.jpg',
      time: '19:04',
      messages: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ligula non varius curabitur etiam malesuada. Congue eget luctus aliquet consectetur.' },
      ]
    },
    {
      me: true,
      avatar: '/assets/images/avatars/user12.jpg',
      time: '12:12',
      messages: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ligula non varius curabitur etiam malesuada. Congue eget luctus aliquet consectetur.' },
      ]
    },
    {
      me: false,
      avatar: '/assets/images/avatars/user11.jpg',
      time: '12:12',
      messages: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ligula non varius.' },
        { text: 'Lorem ipsum dolor sit amet. 🔥' },
      ]
    },
    {
      me: true,
      avatar: '/assets/images/avatars/user12.jpg',
      time: '12:12',
      messages: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ]
    },
    {
      me: false,
      avatar: '/assets/images/avatars/user11.jpg',
      time: '12:12',
      messages: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ligula non varius curabitur etiam malesuada. Congue eget luctus aliquet consectetur.' },
      ]
    },
    {
      me: true,
      avatar: '/assets/images/avatars/user12.jpg',
      time: '12:12',
      messages: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ]
    },
  ]
}
