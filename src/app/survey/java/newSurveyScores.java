package assignment;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import ca.uhn.fhir.rest.api.MethodOutcome;
import org.hl7.fhir.dstu3.model.Patient;
import org.hl7.fhir.dstu3.model.Observation;
import org.hl7.fhir.dstu3.model.Quantity;
import org.hl7.fhir.dstu3.model.Reference;


/**
 * loinc codes
 * Inspiratory capacity: 19852-3
 * Pain severity: 64008-6
 */

/**
 * This class contains methods for updating resources in the FHIR server.
 */
public class newSurveyScores {

    private IGenericClient client = null;

    public newSurveyScores(String baseUrl) {
        FhirContext ctx = FhirContext.forDstu3();
        client = ctx.newRestfulGenericClient(baseUrl);
    }

    /**
     * Find the patient with the given ID and add a Pain severity observation.
     * Int Pain = 0-10 pain rating
     * Return the ID of the newly created observation.
     */
    public String addPainObservation(String patientId, int Pain) {
    	Patient patient = client.read()
    			.resource(Patient.class)
                .withId(patientId)
                .execute();
    	if (patient != null) {
    		Observation observation = new Observation();
        	observation.setSubject(new Reference(patient));
        	
        	observation.getCode()
        			.addCoding()
        			.setSystem("http://loinc.org")
        			.setCode("64008-6")
        			.setDisplay("Pain severity");
        	
        	Quantity quantity = new Quantity();
    		quantity.setValue(Pain)
    				.setUnit("Qn")
    				.setCode("Qn");
    		
    		observation.setValue(quantity);
        	
    		MethodOutcome outcome = client.create()
    				.resource(observation)
    				.execute();
    		return outcome.getId().getValue();
    	}
    	return "";
    }
    /**
     * Find the patient with the given ID and add a Inspiratory capacity by Spirometry observation.
     * double Inspiratory = mL volume, high value of bin Ex. < 500 => 500.0, Ex. 500 <= 750 => 750.0
     * Return the ID of the newly created observation.
     */
    public String addInspiratoryObservation(String patientId, double Inspiratory) {
    	Patient patient = client.read()
    			.resource(Patient.class)
                .withId(patientId)
                .execute();
    	if (patient != null) {
    		Observation observation = new Observation();
        	observation.setSubject(new Reference(patient));
        	
        	observation.getCode()
        			.addCoding()
        			.setSystem("http://loinc.org")
        			.setCode("19852-3")
        			.setDisplay("Inspiratory capacity by Spirometry");
        	
        	Quantity quantity = new Quantity();
    		quantity.setValue(Inspiratory)
    				.setUnit("mL")
    				.setCode("mL");
    		
    		observation.setValue(quantity);
        	
    		MethodOutcome outcome = client.create()
    				.resource(observation)
    				.execute();
    		return outcome.getId().getValue();
    	}
    	return "";
    }

}
