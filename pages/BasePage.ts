import {Page} from '@playwright/test';

export default class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector);
    }
}