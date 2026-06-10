import { test, expect } from "@playwright/test";
import {
  goToBrokersPage,
  navigateToLandingPage,
} from "../../actions/navigation";

test(
  "Verify that the Brokers page loads correctly and the 'Book a Demo' button is visible",
  { tag: "@smoke" },
  async ({ page }) => {
    const landingPage = await navigateToLandingPage(page);
    await landingPage.waitForPageLoad();
    const brokersPage = await goToBrokersPage(page);
    await brokersPage.waitForBrokersPageToLoad();
    const buttonText = await brokersPage.getBookDemoButtonText();
    expect(buttonText).toBe("Book a Demo");
  },
);
