import { test, expect } from "@playwright/test";
import {
  goToBrokersPage,
  navigateToLandingPage,
} from "../../actions/navigation";

/**
 * Test Purpose: Verify that the "For Brokers" page loads successfully and displays the "Book a Demo" button.
 * Test Steps:
 * 1. Navigate to the Perchwell landing page.
 * 2. Navigate to the "For Brokers" page.
 * 3. Wait for the Brokers page to fully load.
 * 4. Retrieve the "Book a Demo" button text.
 * 5. Verify that the button text is "Book a Demo".
 */
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
