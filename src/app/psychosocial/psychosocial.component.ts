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
  chosenFeelFailureOne: string;
  feelFailureOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelFailureTwo: string;
  feelFailureTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelUselessOne: string;
  feelUselessOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelUselessTwo: string;
  feelUselessTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelRespectOne: string;
  feelRespectOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelRespectTwo: string;
  feelRespectTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelWorthlessOne: string;
  feelWorthlessOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelWorthlessTwo: string;
  feelWorthlessTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelInferiorOne: string;
  feelInferiorOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFeelInferiorTwo: string;
  feelInferiorTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenConfidenceOne: string;
  confidenceOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenConfidenceTwo: string;
  confidenceTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAttitudeOne: string;
  attitudeOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAttitudeTwo: string;
  attitudeTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHelplessOne: string;
  helplessOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHelplessTwo: string;
  helplessTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBurdenOne: string;
  burdenOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBurdenTwo: string;
  burdenTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAskOne: string;
  askOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAskTwo: string;
  askTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenIsolatedOne: string;
  isolatedOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenIsolatedTwo: string;
  isolatedTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDisconnectedOne: string;
  disconnectedOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDisconnectedTwo: string;
  disconnectedTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBurdenOthersOne: string;
  burdenOthersOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBurdenOthersTwo: string;
  burdenOthersTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCloseOne: string;
  closeOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCloseTwo: string;
  closeTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAvoidOne: string;
  avoidOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAvoidTwo: string;
  avoidTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGuiltyOne: string;
  guiltyOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGuiltyTwo: string;
  guiltyTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHardCloseOne: string;
  hardCloseOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHardCloseTwo: string;
  hardCloseTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenRelatingOne: string;
  relatingOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenRelatingTwo: string;
  relatingTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHideOne: string;
  hideOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHideTwo: string;
  hideTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFutureOne: string;
  futureOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFutureTwo: string;
  futureTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBotheredOne: string;
  botheredOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBotheredTwo: string;
  botheredTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenControlOne: string;
  controlOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenControlTwo: string;
  controlTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenSmallOne: string;
  smallOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenSmallTwo: string;
  smallTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenInterfereOne: string;
  interfereOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenInterfereTwo: string;
  interfereTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFearOne: string;
  fearOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFearTwo: string;
  fearTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenSleepOne: string;
  sleepOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenSleepTwo: string;
  sleepTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDoctorOne: string;
  doctorOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDoctorTwo: string;
  doctorTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGivenOne: string;
  givenOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGivenTwo: string;
  givenTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenTroubleOne: string;
  troubleOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenTroubleTwo: string;
  troubleTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenLacksOne: string;
  lacksOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenLacksTwo: string;
  lacksTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPurposeOne: string;
  purposeOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPurposeTwo: string;
  purposeTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenQuestionOne: string;
  questionOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenQuestionTwo: string;
  questionTwo: string[] = [
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
