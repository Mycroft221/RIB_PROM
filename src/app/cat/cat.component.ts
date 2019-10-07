import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-hrqol',
  templateUrl: './hrqol.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class HrqolComponent implements OnInit {
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
    /*if(this.chosenSpirometerMeasurement != null && this.chosenPainLevel != null){

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
    } */
  }
}
