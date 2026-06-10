import BasePage from "../BasePage";

/**
 * Landing Page - page object
 * URL:
 */
export default class LandingPage extends BasePage {
  async waitForPageLoad() {
    await this.waitForElement("css=h1.text-style-superhero");
  }
}
