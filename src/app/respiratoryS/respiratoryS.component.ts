import { Component, OnInit } from './node_modules/@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-hrqol',
  templateUrl: './hrqol.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class HrqolComponent implements OnInit {
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
    this.currentInformativeMessage = this.informativeMessages[ Math.floor(Math.random() * this.informativeMessages.length) + 1  ]
  }

  submit() : void {
    if(this.chosenSpirometerMeasurement != null && this.chosenPainLevel != null){

      var painScore = this.chosenPainLevel.substring(0, this.chosenPainLevel.indexOf(" "));
      var spiroScore = this.chosenSpirometerMeasurement;
      if (spiroScore.includes(" - ")){
        spiroScore = spiroScore.substring(spiroScore.indexOf(" - ") + 3, spiroScore.indexOf(" mL"));
      }
      else {
        spiroScore = spiroScore.substring(2, spiroScore.indexOf(" mL"));
      }

      this.apiService.submitSurvey(parseFloat(spiroScore), parseFloat(painScore))
      alert(this.message);
    }else {
      alert("Survey incomplete!");
    }
  }
}
