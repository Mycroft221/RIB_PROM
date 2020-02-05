import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-respiratoryS',
  templateUrl: './respiratoryS.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class RespiratorySComponent implements OnInit {
  chosenDressing : string;
  dressing : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingFifty : string;
  walkingFifty : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingTwenty : string;
  walkingTwenty : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenMeals : string;
  meals : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenDishes : string;
  dishes : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenSweeping : string;
  sweeping : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenBed : string;
  bed : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenLifting : string;
  lifting : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenCarrying : string;
  carrying : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingMile : string;
  walkingMile : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenBath : string;
  bath : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenShower : string;
  shower : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenSocks : string;
  socks : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenStanding : string;
  standing : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingTen : string;
  walkingTen : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingMileTwo : string;
  walkingMileTwo : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingFive : string;
  walkingFive : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingTenStairs : string;
  walkingTenStairs : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingThirty : string;
  walkingThirty : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenScrubbing : string;
  scrubbing : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenLiftingFive : string;
  liftingFive : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenLiftingTen : string;
  liftingTen : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenLiftingTwenty : string;
  liftingTwenty : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenCarryingFive : string;
  carryingFive : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenCarryingTen : string;
  carryingTen : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenCar : string;
  car : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenDining : string;
  dining : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenLeisureLow : string;
  leisureLow : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenLeisureMid : string;
  leisureMid : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingNonstop : string;
  walkingNonstop : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenWalkingNonstopMile : string;
  walkingNonstopMile : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenSinging : string;
  singing : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
  ];

  chosenTalking : string;
  talking : string[] = [
    '0 - No shortness of breath',
    '1 - Mildly short of breath',
    '2 - Moderately short of breath',
    '3 - Severely short of breath',
    'X - I did not do this in the past 7 days'
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
    let answers = Number(this.chosenDressing.substring(0,1) === 'X' ? 0 : this.chosenDressing.substring(0,1));
    answers += Number(this.chosenWalkingFifty.substring(0,1) === 'X' ? 0 : this.chosenWalkingFifty.substring(0,1));
    answers += Number(this.chosenWalkingTwenty.substring(0,1) === 'X' ? 0 : this.chosenWalkingTwenty.substring(0,1));
    answers += Number(this.chosenMeals.substring(0,1) === 'X' ? 0 : this.chosenMeals.substring(0,1));
    answers += Number(this.chosenDishes.substring(0,1) === 'X' ? 0 : this.chosenDishes.substring(0,1));
    answers += Number(this.chosenSweeping.substring(0,1) === 'X' ? 0 : this.chosenSweeping.substring(0,1));
    answers += Number(this.chosenBed.substring(0,1) === 'X' ? 0 : this.chosenBed.substring(0,1));
    answers += Number(this.chosenLifting.substring(0,1) === 'X' ? 0 : this.chosenLifting.substring(0,1));
    answers += Number(this.chosenCarrying.substring(0,1) === 'X' ? 0 : this.chosenCarrying.substring(0,1));
    answers += Number(this.chosenWalkingMile.substring(0,1) === 'X' ? 0 : this.chosenWalkingMile.substring(0,1));
    answers += Number(this.chosenBath.substring(0,1) === 'X' ? 0 : this.chosenBath.substring(0,1));
    answers += Number(this.chosenShower.substring(0,1) === 'X' ? 0 : this.chosenShower.substring(0,1));
    answers += Number(this.chosenSocks.substring(0,1) === 'X' ? 0 : this.chosenSocks.substring(0,1));
    answers += Number(this.chosenStanding.substring(0,1) === 'X' ? 0 : this.chosenStanding.substring(0,1));
    answers += Number(this.chosenWalkingTen.substring(0,1) === 'X' ? 0 : this.chosenWalkingTen.substring(0,1));
    answers += Number(this.chosenWalkingMileTwo.substring(0,1) === 'X' ? 0 : this.chosenWalkingMileTwo.substring(0,1));
    answers += Number(this.chosenWalkingFive.substring(0,1) === 'X' ? 0 : this.chosenWalkingFive.substring(0,1));
    answers += Number(this.chosenWalkingTenStairs.substring(0,1) === 'X' ? 0 : this.chosenWalkingTenStairs.substring(0,1));
    answers += Number(this.chosenWalkingThirty.substring(0,1) === 'X' ? 0 : this.chosenWalkingThirty.substring(0,1));
    answers += Number(this.chosenScrubbing.substring(0,1) === 'X' ? 0 : this.chosenScrubbing.substring(0,1));
    answers += Number(this.chosenLiftingFive.substring(0,1) === 'X' ? 0 : this.chosenLiftingFive.substring(0,1));
    answers += Number(this.chosenLiftingTen.substring(0,1) === 'X' ? 0 : this.chosenLiftingTen.substring(0,1));
    answers += Number(this.chosenLiftingTwenty.substring(0,1) === 'X' ? 0 : this.chosenLiftingTwenty.substring(0,1));
    answers += Number(this.chosenCarryingFive.substring(0,1) === 'X' ? 0 : this.chosenCarryingFive.substring(0,1));
    answers += Number(this.chosenCarryingTen.substring(0,1) === 'X' ? 0 : this.chosenCarryingTen.substring(0,1));
    answers += Number(this.chosenCar.substring(0,1) === 'X' ? 0 : this.chosenCar.substring(0,1));
    answers += Number(this.chosenDining.substring(0,1) === 'X' ? 0 : this.chosenDining.substring(0,1));
    answers += Number(this.chosenLeisureLow.substring(0,1) === 'X' ? 0 : this.chosenLeisureLow.substring(0,1));
    answers += Number(this.chosenLeisureMid.substring(0,1) === 'X' ? 0 : this.chosenLeisureMid.substring(0,1));
    answers += Number(this.chosenWalkingNonstop.substring(0,1) === 'X' ? 0 : this.chosenWalkingNonstop.substring(0,1));
    answers += Number(this.chosenWalkingNonstopMile.substring(0,1) === 'X' ? 0 : this.chosenWalkingNonstopMile.substring(0,1));
    answers += Number(this.chosenSinging.substring(0,1) === 'X' ? 0 : this.chosenSinging.substring(0,1));
    answers += Number(this.chosenTalking.substring(0,1) === 'X' ? 0 : this.chosenTalking.substring(0,1));

    let score = 0; //T score
    if (answers === 0) { 
      score = 27.7; 
    } else if (answers === 1) {
      score = 32.8;
    } else if (answers === 2) {
      score = 36.1;
    } else if (answers === 3) {
      score = 38.6;
    } else if (answers === 4) {
      score = 40.6;
    } else if (answers === 5) {
      score = 42.3;
    } else if (answers === 6) {
      score = 43.8;
    } else if (answers === 7) {
      score = 45.2;
    } else if (answers === 8) {
      score = 46.4;
    } else if (answers === 9) {
      score = 47.6;
    } else if (answers === 10) {
      score = 48.8;
    } else if (answers === 11) {
      score = 50.0;
    } else if (answers === 12) {
      score = 51.1;
    } else if (answers === 19) { //Skipping 13 through 18
      score = 58.1;
    } else if (answers === 20) {
      score = 59.2;
    } else if (answers === 21) {
      score = 60.2;
    } else if (answers === 22) {
      score = 61.2;
    } else if (answers === 23) {
      score = 62.3;
    } else if (answers === 24) {
      score = 63.5;
    } else if (answers === 25) {
      score = 64.8;
    } else if (answers === 26) {
      score = 66.1;
    } else if (answers === 27) {
      score = 67.7;
    } else if (answers === 28) {
      score = 69.5;
    } else if (answers === 29) {
      score = 71.9;
    } else if (answers === 30) {
      score = 75.9;
    } 

    if (answers >= 13 && answers <= 18) {
      score = 51.1 + (answers - 12) * 1.0;
    }

    // this.apiService.submitRespiratoryS(score);
    alert("Survey Submitted");
  }
}
