import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-gos',
  templateUrl: './gos.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class GosComponent implements OnInit {
  chosenAssistanceNeeded: string;
  assistanceNeeded: string[] = [
    'Yes',
    'No'
  ];

  chosenFrequentHelp: string;
  frequentHelp: string[] = [
    'Yes',
    'No'
  ];

  chosenIndependentBefore: string;
  independentBefore: string[] = [
    'Yes',
    'No'
  ];

  chosenShop: string;
  shop: string[] = [
    'Yes',
    'No'
  ];

  chosenShopBefore: string;
  shopBefore: string[] = [
    'Yes',
    'No'
  ];

  chosenTravel: string;
  travel: string[] = [
    'Yes',
    'No'
  ];

  chosenTravelBefore: string;
  travelBefore: string[] = [
    'Yes',
    'No'
  ];

  chosenWorkPrevious: string;
  workPrevious: string[] = [
    'Yes',
    'No'
  ];

  chosenRestricted: string;
  restricted: string[] = [
    'Reduced work capacity?',
    'Able to work only in a sheltered workshop or non-competitive job or currently unable to work?',
    //'None' //Flag: added question, see GOSE survey for differences
  ];

  chosenRestrictionChange: string;
  restrictionChange: string[] = [
    'Yes',
    'No'
  ];

  chosenRegular: string;
  regular: string[] = [
    'Yes',
    'No'
  ];

  chosenRestrictionSocial: string;
  restrictionSocial: string[] = [
    'Participate a bit less: at least half as often as before injury',
    'Participate much less: less than half as often',
    'Unable to participate: rarely, if ever, take part'
  ];

  chosenRestrictionSocialChange: string;
  restrictionSocialChange: string[] = [
    'Yes',
    'No'
  ];

  chosenDisruption: string;
  disruption: string[] = [
    'Yes',
    'No'
  ];

  chosenDisruptionExtent: string;
  disruptionExtent: string[] = [
    'Occasional - Less than weekly',
    'Frequent - once a week or more, but not tolerable',
    'Constant - daily and intolerable'
  ];

  chosenDisruptionChange: string;
  disruptionChange: string[] = [
    'Yes',
    'No'
  ];

  chosenOtherProblems: string;
  otherProblems: string[] = [
    'Yes',
    'No'
  ];

  chosenSimilarInjuryWorse: string;
  similarInjuryWorse: string[] = [
    'Yes',
    'No'
  ];

  chosenFactorOutcome: string;
  factorOutcome: string[] = [
    'Effects of head injury',
    'Effects of illness or injury to another part of the body',
    'A mixture of these'
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
    /*
    1 - Death                       Array 0
    2 - Vegetative State            Array 1
    3 - Lower Severe Disability     Array 2
    4 - Upper Severe Disability     Array 3
    5 - Lower moderate disability   Array 4
    6 - Upper moderate Disability   Array 5
    7 - Lower Good Recovery         Array 6
    8 - Upper Good Recovery         Array 7
    */

    let state = [0,0,0,0,0,0,0,0];

    //Answers Yes No / Answers Other
    if (this.chosenAssistanceNeeded === 'No') {
      state[1]++;
    }

    if (this.chosenFrequentHelp === 'Yes') {
      if (this.chosenIndependentBefore === 'Yes') {
        state[2]++;
      } else {
        state[3]++;
      }
    } else {
      state[1]++;
    }
    
    if (this.chosenShop === 'No') {
      state[3]++;
    }

    if (this.chosenTravel === 'No') {
      state[3]++;
    }
    
    if (this.chosenWorkPrevious === 'No') {
      if (this.chosenRestricted === 'Reduced work capacity?') {
        state[5]++;
      } else {
        state[4]++;
      }
    }

    if (this.chosenRegular === 'No') {
      if (this.chosenRestrictionSocial === 'Participate a bit less: at least half as often as before injury') {
        state[6]++;
      } else if (this.chosenRestrictionSocial === 'Participate much less: less than half as often') {
        state[5]++;
      } else {
        state[4]++;
      }
    }

    if (this.chosenDisruption === 'Yes') {
      if (this.chosenDisruptionExtent === 'Occasional - less than weekly') {
        state[6]++;
      } else if (this.chosenDisruptionExtent === 'Frequent - once a week or more, but not tolerable') {
        state[5]++;
      } else {
        state[4]++;
      }
    }

    if (this.chosenSimilarInjuryWorse === 'Yes') {
      state[6]++;
    } else {
      state[7]++;
    }
    
    let maxIn = 0;
    let max = 0;
    for (let i = 0; i < state.length; i++) {
      if (state[i] > max) {
        max = state[i];
        maxIn = i;
      }
    }

    // this.apiService.submitGos(maxIn + 1); //converting back to proper state (not array index value anymore)
    alert("Survey Submitted");
  }
}
