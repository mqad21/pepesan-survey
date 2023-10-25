export type Questionnaire = {
    title: string;
    description?: string;
    logo?: string;
    pages: Page[];
}

export type Page = {
    name: string;
    elements: Element[];
}

export type Element = {
    type: string;
    name: string;
    title: string;
    isRequired: boolean;
    choices?: Choice[] | string[];
}

export type Choice = {
    text: string;
    value: string;
}