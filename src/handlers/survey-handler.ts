import { Extension } from "pepesan";
import Survey from "../models/survey";

export class SurveyHandler extends Extension {

    public survey: Survey

    constructor(survey: Survey) {
        this.survey = survey
    }

    async startSurvey(jid: string) {

    }

}