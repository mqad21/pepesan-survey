import { Questionnaire } from "./questionnaire";

export default class Survey {

    public questionnaire: Questionnaire;

    constructor(questionnaire: Questionnaire) {
        this.questionnaire = questionnaire;
    }

    get title() {
        return this.questionnaire.title;
    }

}