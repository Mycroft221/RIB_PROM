import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  userId;

  constructor(private http: Http){}

  setUserId(userId){
    this.userId = userId;
  }


  submitHrqol(physicalFunctioning, roleLimitationsPhysical, roleLimitationsEmotional): void {
    this.http.post(
      'https://hapi.fhir.org/baseDstu3/Observation?_format=json',
      { 
        "resourceType": "Observation",
        "meta": {
          "versionId": "1"
        },
        "code": {
          "coding": [
            {
              "display": "Physical Functioning"
            }
          ]
        },
        "subject": {
          "reference": "Patient/" + this.userId
        },
        "valueQuantity": {
          "value": physicalFunctioning
        }
      }
      ).subscribe( response => {
        console.log("HRQOL response 1: ", response);
      }
    );
    this.http.post(
      'https://hapi.fhir.org/baseDstu3/Observation?_format=json',
      { 
        "resourceType": "Observation",
        "meta": {
          "versionId": "1"
        },
        "code": {
          "coding": [
            {
              "display": "Physical Role Limitations"
            }
          ]
        },
        "subject": {
          "reference": "Patient/" + this.userId
        },
        "valueQuantity": {
          "value": roleLimitationsPhysical
        }
      }
      ).subscribe( response => {
        console.log("HRQOL response 2: ", response);
      }
    );
    this.http.post(
      'https://hapi.fhir.org/baseDstu3/Observation?_format=json',
      { 
        "resourceType": "Observation",
        "meta": {
          "versionId": "1"
        },
        "code": {
          "coding": [
            {
              "display": "Emotional Role Limitations"
            }
          ]
        },
        "subject": {
          "reference": "Patient/" + this.userId
        },
        "valueQuantity": {
          "value": roleLimitationsEmotional
        }
      }
      ).subscribe( response => {
        console.log("HRQOL response 3: ", response);
      }
    );
  }
  submitSurvey(chosenSpirometerMeasurement, chosenPainLevel): boolean {
    const date = "2019-05-01T05:10:52.108+00:00";//new Date();
    let spirometerMeasurementSuccess = false;
    let painLevelSuccess = false;

    this.http.post(
      'https://hapi.fhir.org/baseDstu3/Observation?_format=json',
      { 
        "resourceType": "Observation",
        "meta": {
          "versionId": "1",
          "lastUpdated": date
        },
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "64008-6",
              "display": "Pain severity"
            }
          ]
        },
        "subject": {
          "reference": "Patient/" + this.userId
        },
        "valueQuantity": {
          "value": +chosenPainLevel,
          "unit": "Qn",
          "code": "Qn"
        }
      }
      ).subscribe( response => {
        painLevelSuccess = response.ok
        console.log("Pain severity response", response)
      });

    this.http.post(
      'https://hapi.fhir.org/baseDstu3/Observation?_format=json&_pretty=true',
      {
        "resourceType": "Observation",
        "meta": {
          "versionId": "1",
          "lastUpdated": date
        },
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "19852-3",
              "display": "Inspiratory capacity by Spirometry"
            }
          ]
        },
        "subject": {
          "reference": "Patient/" + this.userId
        },
        "valueQuantity": {
          "value": +chosenSpirometerMeasurement,
          "unit": "mL",
          "code": "mL"
        }
      }
      ).subscribe( response => {
        spirometerMeasurementSuccess = response.ok
        console.log("Inspiratory capacity by Spirometry response", response)
      });
   
      return painLevelSuccess && spirometerMeasurementSuccess;
  }
}
