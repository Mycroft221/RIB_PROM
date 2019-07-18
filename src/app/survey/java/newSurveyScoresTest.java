package assignment;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import java.util.List;
import java.util.ArrayList;
import org.hl7.fhir.instance.model.api.IBaseOperationOutcome;
import ca.uhn.fhir.model.primitive.IdDt;
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;

/**
 * Unit test for simple SimpleGetPatientById.
 */
public class newSurveyScoresTest extends TestCase {

    private String serverBase ="http://hapi.fhir.org/baseDstu3";

    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public newSurveyScoresTest(String testName) {
        super(testName);
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite() {
        return new TestSuite(newSurveyScoresTest.class);
    }

    /**
     * Rigourous Test :-)
     */
    public void testaddPainObservation() {
        newSurveyScores survey = new newSurveyScores(serverBase);

        String pid = "1696383";
        int Pain = 1;
        String expected_code = "http://hapi.fhir.org/baseDstu3/Observation/1812089/_history/1";
        String pain_code = survey.addPainObservation(pid, Pain);
        System.out.println(pain_code);
    }

    public void testAddObservation() {
    	newSurveyScores survey = new newSurveyScores(serverBase);

        String pid = "1696383";
        double Inspiratory = 750.0;
        String expected_code = "http://hapi.fhir.org/baseDstu3/Observation/1812092/_history/1";
        String inspiratory_code = survey.addInspiratoryObservation(pid, Inspiratory);
        System.out.println(inspiratory_code);
    }
}
