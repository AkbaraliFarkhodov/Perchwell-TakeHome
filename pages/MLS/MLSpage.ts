import BasePage from "../BasePage";

/**
 * MLS Page - page object
 * URL: /mls
 */
export default class MLSPage extends BasePage {
  async waitForMLSPageToLoad() {
    await this.waitForElement("css=h6.heading-subtitle");
  }

  async getBookDemoButtonText(): Promise<string> {
    return await this.getText(
      "xpath=//section[contains(@class, 'mls')]//a[@href='#demo-form']",
    );
  }
}
