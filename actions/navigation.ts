import type { Page } from "@playwright/test";
import MLSPage from "../pages/MLS/MLSpage";
import LandingPage from "../pages/Landing/LandingPage";
import BrokersPage from "../pages/Brokers/BrokersPage";

async function navigateToLandingPage(page: Page) {
  await page.goto("https://www.perchwell.com/");
  return new LandingPage(page);
}

async function goToMLSPage(page: Page) {
  await page.click(
    `//nav[@role='navigation']//a[normalize-space(text())='For MLS']`,
  );
  return new MLSPage(page);
}

async function goToBrokersPage(page: Page) {
  await page.click(
    `//nav[@role='navigation']//a[normalize-space(text())='For Brokers']`,
  );
  return new BrokersPage(page);
}

export { navigateToLandingPage, goToMLSPage, goToBrokersPage };
