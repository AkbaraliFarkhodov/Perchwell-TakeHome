# Perchwell Take-Home

Playwright end-to-end test suite for validating key navigation and call-to-action behavior on the Perchwell website.

## Overview

This project uses Playwright with TypeScript and the Page Object Model pattern to test user-facing flows on `https://www.perchwell.com/`.

Current coverage includes:

- Landing page load validation
- Navigation to the **For Brokers** page
- Navigation to the **For MLS** page
- Verification that the primary **Book a Demo** CTA is visible and has the expected text

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- Page Object Model

## Project Structure

```text
.
├── actions/
│   └── navigation.ts          # Shared navigation helper
├── pages/
│   ├── BasePage.ts            # Common page actions and helpers
│   ├── Brokers/
│   │   └── BrokersPage.ts     # Brokers page object
│   ├── Landing/
│   │   └── LandingPage.ts     # Landing page object
│   └── MLS/
│       └── MLSpage.ts         # MLS page object
├── tests/
│   ├── Brokers/
│   │   └── Brokers.spec.ts    # Brokers page test
│   └── MLS/
│       └── MLS.spec.ts        # MLS page test
└── playwright.config.ts       # Playwright configuration
```

## Getting Started

### Prerequisites

Install Node.js before running the project.

Recommended:

- Node.js 18+
- npm

### Clone the Repository

```bash
git clone https://github.com/AkbaraliFarkhodov/Perchwell-TakeHome.git
cd Perchwell-TakeHome
```

### Install Dependencies

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run the full test suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/Brokers/Brokers.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run smoke tests only:

```bash
npx playwright test --grep @smoke
```

Open the HTML report:

```bash
npx playwright show-report
```

## Test Configuration

The suite is configured in `playwright.config.ts` with:

- Chromium browser project
- Fully parallel test execution
- Headless mode by default
- 30 second test timeout
- Trace, video, and screenshot capture retained on failure
- HTML report locally
- Blob and HTML reports in CI

## Notes

- Generated Playwright artifacts such as `test-results/` and `playwright-report/` are ignored by Git.
- Tests depend on the public Perchwell website, so failures may occur if live site content, navigation labels, or selectors change.
