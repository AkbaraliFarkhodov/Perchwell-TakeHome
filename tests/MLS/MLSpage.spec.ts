import { test, expect } from "@playwright/test";
import { goToMLSPage, navigateToLandingPage } from "../../actions/navigation";

/**
 * Test Purpose: Verify that the "For MLS" page loads successfully and displays the "Book a Demo" CTA.
 *  Test Steps:
 * 1. Navigate to the Perchwell landing page.
 * 2. Wait for the landing page to fully load.
 * 3. Navigate to the "For MLS" page from the top navigation.
 * 4. Wait for the MLS page to fully load.
 * 5. Retrieve the text from the "Book a Demo" button.
 * 6. Verify that the button text is "Book a Demo".
 */
test(
  "Verify that the MLS page loads correctly and the 'Book a Demo' button is visible",
  { tag: "@smoke" },
  async ({ page }) => {
    const landingPage = await navigateToLandingPage(page);
    await landingPage.waitForPageLoad();
    const mlsPage = await goToMLSPage(page);
    await mlsPage.waitForMLSPageToLoad();
    const buttonText = await mlsPage.getBookDemoButtonText();
    expect(buttonText).toBe("Book a Demo");
  },
);
