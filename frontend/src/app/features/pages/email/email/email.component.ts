import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  menus: any = [
    {
      categoryName: 'MAILBOX',
      items: [
        {
          icon: 'pi-inbox',
          text: 'Inbox',
          tag: 20,
          tagType: 'primary',
          link: '/email/inbox'
        },
        {
          icon: 'pi-clock',
          text: 'Snoozed',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-file',
          text: 'Draft',
          tag: 8,
          tagType: 'red',
          link: ''
        },
        {
          icon: 'pi-send',
          text: 'Sent Mail',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-trash',
          text: 'Trash',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-info-circle',
          text: 'Span',
          tag: 4,
          tagType: '',
          link: ''
        },
      ]
    },
    {
      categoryName: 'FILTERS',
      items: [
        {
          icon: 'pi-star',
          text: 'Starred',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-bolt',
          text: 'Important',
          tag: 0,
          tagType: '',
          link: ''
        },
      ]
    },
    {
      categoryName: 'LABELS',
      items: [
        {
          icon: 'pi-tag',
          text: 'Personal',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-tag',
          text: 'Company',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-tag',
          text: 'Wallet Balance',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-tag',
          text: 'Friends',
          tag: 0,
          tagType: '',
          link: ''
        },
        {
          icon: 'pi-tag',
          text: 'Family',
          tag: 0,
          tagType: '',
          link: ''
        },
      ]
    },
  ]
}
