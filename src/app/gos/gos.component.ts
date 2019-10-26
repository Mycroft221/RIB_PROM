import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-hrqol',
  templateUrl: './hrqol.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class HrqolComponent implements OnInit {
  chosenSpirometerMeasurement: string;
  spirometerMeasurements: string[] = [
    '< 500 mL',
    '500 - 750 mL',
    '750 - 1000 mL',
    '1000 - 1250 mL',
    '1250 - 1500 mL',
    '1500 - 1750 mL',
    '> 1750 mL'
  ];

  chosenPainLevel: string;
  painLevels: string[] = [
    '0 (No hurt)',
    '2 (Hurts a little bit)',
    '4 (Hurts a little more)',
    '6 (Hurts even more)',
    '8 (Hurts a lot)',
    '10 (Hurts worst)'
  ];

  //Flag Evan Start

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
