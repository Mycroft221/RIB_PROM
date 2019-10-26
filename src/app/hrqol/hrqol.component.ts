import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-hrqol',
  templateUrl: './hrqol.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class HrqolComponent implements OnInit {

  chosenHealthLevel: string;
  healthLevel: string[] = [
    '1 - Excellent',
    '2 - Very Good',
    '3 - Good',
    '4 - Fair',
    '5 - Poor'
  ];

  chosenHealthLevelNow: string;
  healthLevelNow: string[] = [
    '1 - Much better now than one year ago',
    '2 - Somewhat better now than one year ago',
    '3 - About the same',
    '4 - Somewhat worse now than one year ago',
    '5 - Much worse now than one year ago'
  ];

  chosenVigorousActivities: string;
  vigorousActivities: string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenModerateActivities : string;
  moderateActivities : string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenLifting : string;
  lifting : string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenClimbingSeveral : string;
  climbingSeveral : string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenClimbingOne : string;
  climbingOne: string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenBending : string;
  bending : string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenWalkingMiles : string;
  walkingMiles : string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenWalkingBlocks : string;
  walkingBlocks : string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenWalkingOneBlock : string;
  walkingOneBlock: string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenBathing : string;
  bathing : string[] = [
    '1 - Yes, limited a lot',
    '2 - Yes, limited a little',
    '3 - No, not limited at all'
  ];

  chosenCutWork : string;
  cutWork : string[] = [
    'Yes',
    'No'
  ];

  chosenAccomplishedLess : string;
  accomplishedLess : string[] = [
    'Yes',
    'No'
  ];

  chosenLimitedWork : string;
  limitedWork : string[] = [
    'Yes',
    'No'
  ];

  chosenDifficultyWork : string;
  difficultyWork : string[] = [
    'Yes',
    'No'
  ];

  chosenCutTimeWork : string;
  cutTimeWork : string[] = [
    'Yes',
    'No'
  ];

  chosenAccomplishedLessLiked : string;
  accomplishedLessLiked : string[] = [
    'Yes',
    'No'
  ];

  chosenWorkNotAsCarefully : string;
  workNotAsCarefully : string[] = [
    'Yes',
    'No'
  ];

  chosenPhysicalEmotionalProblems : string;
  physicalEmotionalProblems : string[] = [
    '1 - Not at all',
    '2 - Slightly',
    '3 - Moderately',
    '4 - Quite a bit',
    '5 - Extremely'
  ];

  chosenBodilyPain : string;
  bodilyPain : string[] = [
    '1 - None',
    '2 - Very mild',
    '3 - Mild',
    '4 - Moderate',
    '5 - Severe',
    '6 - Very severe'
  ];

  chosenPainInterfere : string;
  painInterfere : string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Moderately',
    '4 - Quite a bit',
    '5 - Extremely'
  ];

  chosenPep : string;
  pep : string[] = [
    'All of the time',
    'Most of the time',
    'A good bit of the time',
    'Some of the time',
    'A little of the time',
    'None of the time'
  ];

  chosenNervous : string;
  nervous : string[] = [
    'All of the time',
    'Most of the time',
    'A good bit of the time',
    'Some of the time',
    'A little of the time',
    'None of the time'
  ];

  chosenDownNoCheer : string;
  downNoCheer : string[] = [
    'All of the time',
    'Most of the time',
    'A good bit of the time',
    'Some of the time',
    'A little of the time',
    'None of the time'
  ];

  chosenCalmPeaceful : string;
  calmPeaceful : string[] = [
   'All of the time',
   'Most of the time',
   'A good bit of the time',
   'Some of the time',
   'A little of the time',
   'None of the time'
 ];

  chosenLotEnergy : string;
  lotEnergy : string[] = [
    'All of the time',
    'Most of the time',
    'A good bit of the time',
    'Some of the time',
    'A little of the time',
    'None of the time'
  ];

  chosenDownhearted : string;
  downhearted: string[] = [
   'All of the time',
   'Most of the time',
   'A good bit of the time',
   'Some of the time',
   'A little of the time',
   'None of the time'
 ];

  chosenWornOut : string;
  wornOut: string[] = [
    'All of the time',
    'Most of the time',
    'A good bit of the time',
    'Some of the time',
    'A little of the time',
    'None of the time'
  ];

  chosenHappyPerson : string;
  happyPerson : string[] = [
   'All of the time',
   'Most of the time',
   'A good bit of the time',
   'Some of the time',
   'A little of the time',
   'None of the time'
  ];

  chosenFeelTired : string;
  feelTired : string[] = [
    'All of the time',
    'Most of the time',
    'A good bit of the time',
    'Some of the time',
    'A little of the time',
    'None of the time'
  ];

  chosenPhysicalEmotionalSocial : string;
  physicalEmotionalSocial : string[] = [
    '1 - All of the time',
    '2 - Most of the time',
    '3 - Some of the time',
    '4 - A little of the time',
    '5 - None of the time'
  ];

  chosenSickEasier : string;
  sickEasier : string[] = [
    'Definitely true',
    'Mostly true',
    'Don\'t know',
    'Mostly false',
    'Definitely false'
  ];

  chosenHealthyAnybody : string;
  healthyAnybody : string[] = [
    'Definitely true',
    'Mostly true',
    'Don\'t know',
    'Mostly false',
    'Definitely false'
  ];

  chosenHealthWorse : string;
  healthWorse : string[] = [
    'Definitely true',
    'Mostly true',
    'Don\'t know',
    'Mostly false',
    'Definitely false'
  ];

  chosenHealthExcellent : string;
  healthExcellent : string[] = [
    'Definitely true',
    'Mostly true',
    'Don\'t know',
    'Mostly false',
    'Definitely false'
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
    let physicalFunctioning = (Number(this.chosenVigorousActivities.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenModerateActivities.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenLifting.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenClimbingSeveral.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenClimbingOne.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenBending.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenWalkingMiles.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenWalkingBlocks.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenWalkingOneBlock.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning + (Number(this.chosenBathing.substring(0, 1)) - 1) * 50;
    physicalFunctioning = physicalFunctioning / 10;
    let roleLimitationsPhysical = this.chosenCutWork === 'Yes' ? 0 : 100;
    roleLimitationsPhysical = roleLimitationsPhysical + this.chosenAccomplishedLess === 'Yes' ? 0 : 100;
    roleLimitationsPhysical = roleLimitationsPhysical + this.chosenLimitedWork === 'Yes' ? 0 : 100;
    roleLimitationsPhysical = roleLimitationsPhysical + this.chosenDifficultyWork === 'Yes' ? 0 : 100;
    roleLimitationsPhysical = roleLimitationsPhysical / 4;
    let roleLimitationsEmotional = this.chosenCutTimeWork === 'Yes' ? 0 : 100;
    roleLimitationsEmotional = roleLimitationsEmotional + this.chosenAccomplishedLessLiked === 'Yes' ? 0 : 100;
    roleLimitationsEmotional = roleLimitationsEmotional + this.chosenWorkNotAsCarefully === 'Yes' ? 0 : 100;
    roleLimitationsEmotional = roleLimitationsEmotional / 3;
    this.apiService.submitHrqol(physicalFunctioning, roleLimitationsPhysical, roleLimitationsEmotional);
    alert("Survey Submitted");
  }
}
