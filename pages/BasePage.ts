import { Page } from "@playwright/test";

export default class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElement(selector: string) {
    await this.page
      .locator(selector)
      .waitFor({ state: "visible", timeout: 5000 });
  }

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async getText(selector: string): Promise<string> {
    const locator = this.page.locator(selector);
    const text = (await locator.innerText()).trim();
    return text;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async hover(selector: string) {
    await this.page.locator(selector).hover();
  }
}
