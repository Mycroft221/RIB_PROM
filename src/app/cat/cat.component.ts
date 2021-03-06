import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  //Flag Evan Start
  chosenInfoPain: string;
  infoPain: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainEnjoy: string;
  painEnjoy: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainLeisure: string;
  painLeisure: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainPersonal: string;
  painPersonal: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainConcentrate: string;
  painConcentrate: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainDay: string;
  painDay: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainRecreational: string;
  painRecreational: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainTense: string;
  painTense: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainFun: string;
  painFun: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainFamily: string;
  painFamily: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainRelationships: string;
  painRelationships: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainWork: string;
  painWork: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainSleep: string;
  painSleep: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainBurden: string;
  painBurden: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainHousework: string;
  painHousework: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainSocial: string;
  painSocial: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainChores: string;
  painChores: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainTrips: string;
  painTrips: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainEnjoymentSocial: string;
  painEnjoymentSocial: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainHousehold: string;
  painHousehold: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainRemember: string;
  painRemember: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainIrritable: string;
  painIrritable: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainTasks: string;
  painTasks: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainDepressed: string;
  painDepressed: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainDistressing: string;
  painDistressing: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainSocializing: string;
  painSocializing: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainSevere: string;
  painSevere: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainDiscouraged: string;
  painDiscouraged: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainAnxious: string;
  painAnxious: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainAvoid: string;
  painAvoid: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainPrevent: string;
  painPrevent: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainStanding: string;
  painStanding: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainPlan: string;
  painPlan: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainStandingMinutes: string;
  painStandingMinutes: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainSittingMinutes: string;
  painSittingMinutes: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainSittingTen: string;
  painSittingTen: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];
  
  chosenPainSocialPain: string;
  painSocialPain: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainSocialHome: string;
  painSocialHome: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainPreventSitting: string;
  painPreventSitting: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPainPreventStanding: string;
  painPreventStanding: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  // add this
  // chosenTestOption: string;
  // options: string[] = [
  //  'testOpt1',
  //  'testOpt2',
  //  'testOpt3'
  //];
  // end

  //Flag Evan End

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
    // this.currentInformativeMessage = this.informativeMessages[ Math.floor(Math.random() * this.informativeMessages.length) + 1  ]
  }

  submit() : void {
    let painScore = Number(this.chosenInfoPain.substring(0,1));
    painScore += Number(this.chosenPainEnjoy.substring(0,1));
    painScore += Number(this.chosenPainLeisure.substring(0,1));
    painScore += Number(this.chosenPainPersonal.substring(0,1));
    painScore += Number(this.chosenPainConcentrate.substring(0,1));
    painScore += Number(this.chosenPainDay.substring(0,1));
    painScore += Number(this.chosenPainRecreational.substring(0,1));
    painScore += Number(this.chosenPainTense.substring(0,1));
    painScore += Number(this.chosenPainFun.substring(0,1));
    painScore += Number(this.chosenPainFamily.substring(0,1));
    painScore += Number(this.chosenPainRelationships.substring(0,1));
    painScore += Number(this.chosenPainWork.substring(0,1));
    painScore += Number(this.chosenPainSleep.substring(0,1));
    painScore += Number(this.chosenPainBurden.substring(0,1));
    painScore += Number(this.chosenPainHousework.substring(0,1));
    painScore += Number(this.chosenPainSocial.substring(0,1));
    painScore += Number(this.chosenPainChores.substring(0,1));
    painScore += Number(this.chosenPainTrips.substring(0,1));
    painScore += Number(this.chosenPainEnjoymentSocial.substring(0,1));
    painScore += Number(this.chosenPainHousehold.substring(0,1));
    painScore += Number(this.chosenPainRemember.substring(0,1));
    painScore += Number(this.chosenPainIrritable.substring(0,1));
    painScore += Number(this.chosenPainTasks.substring(0,1));
    painScore += Number(this.chosenPainDepressed.substring(0,1));
    painScore += Number(this.chosenPainDistressing.substring(0,1));
    painScore += Number(this.chosenPainSocializing.substring(0,1));
    painScore += Number(this.chosenPainSevere.substring(0,1));
    painScore += Number(this.chosenPainDiscouraged.substring(0,1));
    painScore += Number(this.chosenPainAnxious.substring(0,1));
    painScore += Number(this.chosenPainAvoid.substring(0,1));
    painScore += Number(this.chosenPainPrevent.substring(0,1));
    painScore += Number(this.chosenPainStanding.substring(0,1));
    painScore += Number(this.chosenPainPlan.substring(0,1));
    painScore += Number(this.chosenPainStandingMinutes.substring(0,1));
    painScore += Number(this.chosenPainSittingMinutes.substring(0,1));
    painScore += Number(this.chosenPainSittingTen.substring(0,1));
    painScore += Number(this.chosenPainSocialPain.substring(0,1));
    painScore += Number(this.chosenPainSocialHome.substring(0,1));
    painScore += Number(this.chosenPainPreventSitting.substring(0,1));
    painScore += Number(this.chosenPainPreventStanding.substring(0,1));

    // this.apiService.submitSurvey(painScore)
    alert("Survey Submitted");
  }
}
