import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isString, isNumber } from 'util';

@Component({
  selector: 'app-psychosocial',
  templateUrl: './psychosocial.component.html',
  styleUrls: ['./hrqol.component.css']
})
export class PsychosocialComponent implements OnInit {
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

  chosenComfortableOne: string;
  comfortableOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenComfortableTwo: string;
  comfortableTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHandleOne: string;
  handleOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHandleTwo: string;
  handleTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenConfidentOne: string;
  confidentOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenConfidentTwo: string;
  confidentTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGoodOne: string;
  goodOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGoodTwo: string;
  goodTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBodyOne: string;
  bodyOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenBodyTwo: string;
  bodyTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenOptimisticOne: string;
  optimisticOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenOptimisticTwo: string;
  optimisticTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGoingOne: string;
  goingOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenGoingTwo: string;
  goingTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAnythingOne: string;
  anythingOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAnythingTwo: string;
  anythingTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPatientOne: string;
  patientOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPatientTwo: string;
  patientTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHonestOne: string;
  honestOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenHonestTwo: string;
  honestTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCountOne: string;
  countOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCountTwo: string;
  countTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCompassionOne: string;
  compassionOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCompassionTwo: string;
  compassionTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenMeaningfulOne: string;
  meaningfulOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenMeaningfulTwo: string;
  meaningfulTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAwareOne: string;
  awareOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAwareTwo: string;
  awareTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenRealizeOne: string;
  realizeOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenRealizeTwo: string;
  realizeTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenReceivingOne: string;
  receivingOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenReceivingTwo: string;
  receivingTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAppreciateOne: string;
  appreciateOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAppreciateTwo: string;
  appreciateTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenWillingOne: string;
  willingOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenWillingTwo: string;
  willingTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFamilyOne: string;
  familyOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenFamilyTwo: string;
  familyTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCommunityOne: string;
  communityOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCommunityTwo: string;
  communityTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCareOne: string;
  careOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenCareTwo: string;
  careTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenEmotionsOne: string;
  emotionsOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenEmotionsTwo: string;
  emotionsTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAcceptOne: string;
  acceptOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAcceptTwo: string;
  acceptTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenUncertaintyOne: string;
  uncertaintyOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenUncertaintyTwo: string;
  uncertaintyTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAdjustOne: string;
  adjustOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAdjustTwo: string;
  adjustTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenTakeOne: string;
  takeOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenTakeTwo: string;
  takeTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDealOne: string;
  dealOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDealTwo: string;
  dealTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenTendOne: string;
  tendOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenTendTwo: string;
  tendTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenMyselfOne: string;
  myselfOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenMyselfTwo: string;
  myselfTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenLookOne: string;
  lookOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenLookTwo: string;
  lookTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenJoyOne: string;
  joyOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenJoyTwo: string;
  joyTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenEnjoyOne: string;
  enjoyOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenEnjoyTwo: string;
  enjoyTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDayOne: string;
  dayOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenDayTwo: string;
  dayTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenLifeOne: string;
  lifeOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenLifeTwo: string;
  lifeTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAppreciateLifeOne: string;
  appreciateLifeOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenAppreciateLifeTwo: string;
  appreciateLifeTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenSenseOne: string;
  senseOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenSenseTwo: string;
  senseTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPeacefulOne: string;
  peacefulOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPeacefulTwo: string;
  peacefulTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPeaceOne: string;
  peaceOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenPeaceTwo: string;
  peaceTwo: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenImportantOne: string;
  importantOne: string[] = [
    '1 - Not at all',
    '2 - A little bit',
    '3 - Somewhat',
    '4 - Quite a bit',
    '5 - Very much'
  ];

  chosenImportantTwo: string;
  importantTwo: string[] = [
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
    let before = Number(this.chosenFeelFailureOne.substring(0, 1));
    before = before + Number(this.chosenFeelUselessOne.substring(0, 1));
    before = before + Number(this.chosenFeelRespectOne.substring(0, 1));
    before = before + Number(this.chosenFeelWorthlessOne.substring(0, 1));
    before = before + Number(this.chosenFeelInferiorOne.substring(0, 1));
    before = before + Number(this.chosenConfidenceOne.substring(0, 1));
    before = before + Number(this.chosenAttitudeOne.substring(0, 1));
    before = before + Number(this.chosenHelplessOne.substring(0, 1));
    before = before + Number(this.chosenBurdenOne.substring(0, 1));
    before = before + Number(this.chosenAskOne.substring(0, 1));
    before = before + Number(this.chosenIsolatedOne.substring(0, 1));
    before = before + Number(this.chosenDisconnectedOne.substring(0, 1));
    before = before + Number(this.chosenBurdenOthersOne.substring(0, 1));
    before = before + Number(this.chosenCloseOne.substring(0, 1));
    before = before + Number(this.chosenAvoidOne.substring(0, 1));
    before = before + Number(this.chosenGuiltyOne.substring(0, 1));
    before = before + Number(this.chosenHardCloseOne.substring(0, 1));
    before = before + Number(this.chosenRelatingOne.substring(0, 1));
    before = before + Number(this.chosenHideOne.substring(0, 1));
    before = before + Number(this.chosenFutureOne.substring(0, 1));
    before = before + Number(this.chosenBotheredOne.substring(0, 1));
    before = before + Number(this.chosenControlOne.substring(0, 1));
    before = before + Number(this.chosenSmallOne.substring(0, 1));
    before = before + Number(this.chosenInterfereOne.substring(0, 1));
    before = before + Number(this.chosenFearOne.substring(0, 1));
    before = before + Number(this.chosenSleepOne.substring(0, 1));
    before = before + Number(this.chosenDoctorOne.substring(0, 1));
    before = before + Number(this.chosenGivenOne.substring(0, 1));
    before = before + Number(this.chosenTroubleOne.substring(0, 1));
    before = before + Number(this.chosenLacksOne.substring(0, 1));
    before = before + Number(this.chosenPurposeOne.substring(0, 1));
    before = before + Number(this.chosenQuestionOne.substring(0, 1));
    before = before + Number(this.chosenComfortableOne.substring(0, 1));
    before = before + Number(this.chosenHandleOne.substring(0, 1));
    before = before + Number(this.chosenConfidentOne.substring(0, 1));
    before = before + Number(this.chosenGoodOne.substring(0, 1));
    before = before + Number(this.chosenBodyOne.substring(0, 1));
    before = before + Number(this.chosenOptimisticOne.substring(0, 1));
    before = before + Number(this.chosenGoingOne.substring(0, 1));
    before = before + Number(this.chosenAnythingOne.substring(0, 1));
    before = before + Number(this.chosenPatientOne.substring(0, 1));
    before = before + Number(this.chosenHonestOne.substring(0, 1));
    before = before + Number(this.chosenCountOne.substring(0, 1));
    before = before + Number(this.chosenCompassionOne.substring(0, 1));
    before = before + Number(this.chosenMeaningfulOne.substring(0, 1));
    before = before + Number(this.chosenAwareOne.substring(0, 1));
    before = before + Number(this.chosenRealizeOne.substring(0, 1));
    before = before + Number(this.chosenReceivingOne.substring(0, 1));
    before = before + Number(this.chosenAppreciateOne.substring(0, 1));
    before = before + Number(this.chosenWillingOne.substring(0, 1));
    before = before + Number(this.chosenFamilyOne.substring(0, 1));
    before = before + Number(this.chosenCommunityOne.substring(0, 1));
    before = before + Number(this.chosenCareOne.substring(0, 1));
    before = before + Number(this.chosenEmotionsOne.substring(0, 1));
    before = before + Number(this.chosenAcceptOne.substring(0, 1));
    before = before + Number(this.chosenUncertaintyOne.substring(0, 1));
    before = before + Number(this.chosenAdjustOne.substring(0, 1));
    before = before + Number(this.chosenTakeOne.substring(0, 1));
    before = before + Number(this.chosenDealOne.substring(0, 1));
    before = before + Number(this.chosenTendOne.substring(0, 1));
    before = before + Number(this.chosenMyselfOne.substring(0, 1));
    before = before + Number(this.chosenLookOne.substring(0, 1));
    before = before + Number(this.chosenJoyOne.substring(0, 1));
    before = before + Number(this.chosenEnjoyOne.substring(0, 1));
    before = before + Number(this.chosenDayOne.substring(0, 1));
    before = before + Number(this.chosenLifeOne.substring(0, 1));
    before = before + Number(this.chosenAppreciateLifeOne.substring(0, 1));
    before = before + Number(this.chosenSenseOne.substring(0, 1));
    before = before + Number(this.chosenPeacefulOne.substring(0, 1));
    before = before + Number(this.chosenPeaceOne.substring(0, 1));
    before = before + Number(this.chosenImportantOne.substring(0, 1));

    let after = Number(this.chosenFeelFailureTwo.substring(0, 1));
    after = after + Number(this.chosenFeelUselessTwo.substring(0, 1));
    after = after + Number(this.chosenFeelRespectTwo.substring(0, 1));
    after = after + Number(this.chosenFeelWorthlessTwo.substring(0, 1));
    after = after + Number(this.chosenFeelInferiorTwo.substring(0, 1));
    after = after + Number(this.chosenConfidenceTwo.substring(0, 1));
    after = after + Number(this.chosenAttitudeTwo.substring(0, 1));
    after = after + Number(this.chosenHelplessTwo.substring(0, 1));
    after = after + Number(this.chosenBurdenTwo.substring(0, 1));
    after = after + Number(this.chosenAskTwo.substring(0, 1));
    after = after + Number(this.chosenIsolatedTwo.substring(0, 1));
    after = after + Number(this.chosenDisconnectedTwo.substring(0, 1));
    after = after + Number(this.chosenBurdenOthersTwo.substring(0, 1));
    after = after + Number(this.chosenCloseTwo.substring(0, 1));
    after = after + Number(this.chosenAvoidTwo.substring(0, 1));
    after = after + Number(this.chosenGuiltyTwo.substring(0, 1));
    after = after + Number(this.chosenHardCloseTwo.substring(0, 1));
    after = after + Number(this.chosenRelatingTwo.substring(0, 1));
    after = after + Number(this.chosenHideTwo.substring(0, 1));
    after = after + Number(this.chosenFutureTwo.substring(0, 1));
    after = after + Number(this.chosenBotheredTwo.substring(0, 1));
    after = after + Number(this.chosenControlTwo.substring(0, 1));
    after = after + Number(this.chosenSmallTwo.substring(0, 1));
    after = after + Number(this.chosenInterfereTwo.substring(0, 1));
    after = after + Number(this.chosenFearTwo.substring(0, 1));
    after = after + Number(this.chosenSleepTwo.substring(0, 1));
    after = after + Number(this.chosenDoctorTwo.substring(0, 1));
    after = after + Number(this.chosenGivenTwo.substring(0, 1));
    after = after + Number(this.chosenTroubleTwo.substring(0, 1));
    after = after + Number(this.chosenLacksTwo.substring(0, 1));
    after = after + Number(this.chosenPurposeTwo.substring(0, 1));
    after = after + Number(this.chosenQuestionTwo.substring(0, 1));
    after = after + Number(this.chosenComfortableTwo.substring(0, 1));
    after = after + Number(this.chosenHandleTwo.substring(0, 1));
    after = after + Number(this.chosenConfidentTwo.substring(0, 1));
    after = after + Number(this.chosenGoodTwo.substring(0, 1));
    after = after + Number(this.chosenBodyTwo.substring(0, 1));
    after = after + Number(this.chosenOptimisticTwo.substring(0, 1));
    after = after + Number(this.chosenGoingTwo.substring(0, 1));
    after = after + Number(this.chosenAnythingTwo.substring(0, 1));
    after = after + Number(this.chosenPatientTwo.substring(0, 1));
    after = after + Number(this.chosenHonestTwo.substring(0, 1));
    after = after + Number(this.chosenCountTwo.substring(0, 1));
    after = after + Number(this.chosenCompassionTwo.substring(0, 1));
    after = after + Number(this.chosenMeaningfulTwo.substring(0, 1));
    after = after + Number(this.chosenAwareTwo.substring(0, 1));
    after = after + Number(this.chosenRealizeTwo.substring(0, 1));
    after = after + Number(this.chosenReceivingTwo.substring(0, 1));
    after = after + Number(this.chosenAppreciateTwo.substring(0, 1));
    after = after + Number(this.chosenWillingTwo.substring(0, 1));
    after = after + Number(this.chosenFamilyTwo.substring(0, 1));
    after = after + Number(this.chosenCommunityTwo.substring(0, 1));
    after = after + Number(this.chosenCareTwo.substring(0, 1));
    after = after + Number(this.chosenEmotionsTwo.substring(0, 1));
    after = after + Number(this.chosenAcceptTwo.substring(0, 1));
    after = after + Number(this.chosenUncertaintyTwo.substring(0, 1));
    after = after + Number(this.chosenAdjustTwo.substring(0, 1));
    after = after + Number(this.chosenTakeTwo.substring(0, 1));
    after = after + Number(this.chosenDealTwo.substring(0, 1));
    after = after + Number(this.chosenTendTwo.substring(0, 1));
    after = after + Number(this.chosenMyselfTwo.substring(0, 1));
    after = after + Number(this.chosenLookTwo.substring(0, 1));
    after = after + Number(this.chosenJoyTwo.substring(0, 1));
    after = after + Number(this.chosenEnjoyTwo.substring(0, 1));
    after = after + Number(this.chosenDayTwo.substring(0, 1));
    after = after + Number(this.chosenLifeTwo.substring(0, 1));
    after = after + Number(this.chosenAppreciateLifeTwo.substring(0, 1));
    after = after + Number(this.chosenSenseTwo.substring(0, 1));
    after = after + Number(this.chosenPeacefulTwo.substring(0, 1));
    after = after + Number(this.chosenPeaceTwo.substring(0, 1));
    after = after + Number(this.chosenImportantTwo.substring(0, 1));

    //physicalFunctioning = physicalFunctioning / 10;
    this.apiService.submitPsychosocial(before, after);
    alert("Survey Submitted");
  }
}
