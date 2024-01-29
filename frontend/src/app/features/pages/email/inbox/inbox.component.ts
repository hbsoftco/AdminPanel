import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {
  mails: any = [
    {
      star: false,
      check: false,
      title: 'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
      date: '14 Feb 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: true,
      check: false,
      title: 'Last pic over my village – Yeah id like that! Do you remember the video som..',
      date: '12 Feb 2023',
      names: 'Lucas Kriebel (via Twitter)'
    },
    {
      star: false,
      check: false,
      title: 'Mochila Beta: Subscription Confirmed – Youve been confirmed! Welcome to',
      date: '5 Feb 2023',
      names: 'Andrew Zimmer'
    },
    {
      star: false,
      check: false,
      title: 'Youve been confirmed! Welcome to the ruling class of the inbox. For your',
      date: '22 Feb 2023',
      names: 'Infinity HR'
    },
    {
      star: true,
      check: false,
      title: 'For your records, here is a copy of the information you submitted to us...',
      date: '09 Feb 2023',
      names: 'me, keter (4)'
    },
    {
      star: true,
      check: false,
      title: 'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
      date: '08 Feb 2023',
      names: 'Death to Stock'
    },
    {
      star: false,
      check: false,
      title: 'Off on Thursday – Eff that place, you might as well stay here with us inst',
      date: '07 Feb 2023',
      names: 'Erik, me (5)'
    },
    {
      star: false,
      check: false,
      title: 'Trip home from 🎉 Colombo has been arranged, then Jenna will come to hom...',
      date: '06 Feb 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: true,
      check: false,
      title: 'This Weeks Top Stories – Our top pick for you on Medium this week The',
      date: '05 Feb 2023',
      names: 'Google Drive Team'
    },
    {
      star: false,
      check: false,
      title: 'Weekend on Revibe – Todays Friday and we thought maybe you want so',
      date: '04 Feb 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: false,
      check: false,
      title: 'You can now use your storage in Google Drive – Hey Nicklas Sandell! Tha',
      date: '02 Feb 2023',
      names: 'me, Susanna (11)'
    },
    {
      star: false,
      check: false,
      title: 'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
      date: '01 Feb 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: false,
      check: false,
      title: 'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
      date: '04 Nov 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: false,
      check: false,
      title: 'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
      date: '03 Nov 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: false,
      check: false,
      title: 'Weekend on Revibe – Todays Friday and we thought maybe you want so',
      date: '02 Nov 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: true,
      check: false,
      title: 'Weekend on Revibe – Todays Friday and we thought maybe you want so',
      date: '01 Nov 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: true,
      check: false,
      title: 'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
      date: '08 Feb 2023',
      names: 'Death to Stock'
    },
    {
      star: false,
      check: false,
      title: 'Off on Thursday – Eff that place, you might as well stay here with us inst',
      date: '07 Feb 2023',
      names: 'Erik, me (5)'
    },
    {
      star: false,
      check: false,
      title: 'Trip home from 🎉 Colombo has been arranged, then Jenna will come to hom...',
      date: '06 Feb 2023',
      names: 'Benthon, me (3)'
    },
    {
      star: true,
      check: false,
      title: 'This Weeks Top Stories – Our top pick for you on Medium this week The',
      date: '05 Feb 2023',
      names: 'Google Drive Team'
    },
  ]
}
