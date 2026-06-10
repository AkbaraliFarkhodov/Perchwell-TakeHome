import { test, expect } from "@playwright/test";
import { goToMLSPage, navigateToLandingPage } from "../../actions/navigation";

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
