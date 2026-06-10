import BasePage from "../BasePage";

/**
 * Brokers Page - page object
 * URL: /professionals
 */
export default class BrokersPage extends BasePage {
  async waitForBrokersPageToLoad() {
    await this.waitForElement("css=h6.heading-subtitle");
  }

  async getBookDemoButtonText(): Promise<string> {
    return await this.getText(
      "xpath=//div[contains(@class, 'section-hero')]//a[@href='#demo-form']",
    );
  }
}
