import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class EconomicComponent implements OnInit {
  chosenMissedWork: string;
  missedWork: string[] = [
    'Yes',
    'No'
  ];

  chosenDays : string;
  days : string[] = [
    '0 days',
    '1 day',
    '2 days',
    '3-4 days',
    '5-6 days',
    '1-2 weeks',
    '3+ weeks'
  ];

  chosenDisability: string;
  disability: string[] = [
    'Yes',
    'No'
  ];

  chosenDisabilityLong: string;
  disabilityLong: string[] = [
    '0 days',
    '1 day',
    '2 days',
    '3-4 days',
    '5-6 days',
    '1-2 weeks',
    '3+ weeks'
  ];

  chosenWorking: string;
  working: string[] = [
    'Yes',
    'No'
  ];

  chosenLimited: string;
  limited: string[] = [
    'Pre-injury level',
    'Limited Capacity'
  ];

  chosenTime: string;
  time: string[] = [
    'Full time',
    'Part time'
  ];

  chosenNow: string;
  now: string[] = [
    'Full time',
    'Part time'
  ];

  currentInformativeMessage = '';
  informativeMessages: string[] = [
    'Don’t wrap anything tightly around your ribs while they’re healing. You don’t want anything to limit your breathing, which could lead to pneumonia.',
    'A rib fracture is typically a crack or break in one or more of your rib bones.',
    'A break in the thick tissue that connects the ribs to the breastbone may also be called a fractured rib even if the bone itself is not broken.',
    'Your ribs are the round long bones in your chest that wrap around your upper body. They connect your breastbone to your spine.',
    'The ribs are connected to each other by several layers of muscles that assist with breathing.',
    'A rib fracture can be very painful because your ribs move when you breathe, cough, and move your upper body.',
    'The ribs in the middle of your chest are the ones that break most often.',
    'Healing of fractured ribs can take at least six weeks.',
    'Most people with broken ribs do not need surgery and can heal at home.',
    'Deep-breathing and coughing exercises can help to prevent a collapsed lung or a lung infection.',
    'Bed rest is not recommended, but neither is physically strenuous activity.',
    'While you heal, avoid movements that put painful pressure on your ribs.',
    'Your ribs have two main jobs: they protect the organs in your chest and they keep space open inside your chest for your lungs to fill up with air.',
  ]

  constructor(private apiService: ApiService) { }
  message:string = "Survey submitted successfully";

  ngOnInit() {
    this.currentInformativeMessage = this.informativeMessages[ Math.floor(Math.random() * this.informativeMessages.length) + 1  ]
  }

  submit() : void {
    //This needs more testing.  I have never worked with hashmaps in TS --Evan
    interface IHash {
      [details: string] : number;
    }

    let myhash: IHash = {};   
    myhash['0 days'] = 0; myhash['1 day'] = 1; myhash['2 days'] = 2; myhash['3-4 day'] = 3; myhash['5-6 days'] = 4; myhash['1-2 weeks'] = 5; myhash['3+ weeks'] = 6; 

    let answers = this.chosenMissedWork === 'Yes' ? 0 : 1;
    answers += myhash[this.chosenDays];
    answers += this.chosenDisability === 'Yes' ? 0 : 1;
    answers += myhash[this.chosenDisabilityLong];
    answers += this.chosenWorking === 'Yes' ? 0 : 1;
    answers += this.chosenLimited === 'Pre-injury level' ? 0 : 1;
    answers += this.chosenTime === 'Full time' ? 0 : 1;
    answers += this.chosenNow === 'Full time' ? 0 : 1;

    // this.apiService.submitEconomic(answers);
    alert("Survey Submitted");
  }
}
