// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Home Screen", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays site title and tagline", async ({ page }) => {
    await expect(page.locator(".site-title")).toHaveText("canTRIVIA");
    await expect(page.locator(".tagline")).toBeVisible();
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/canTRIVIA/);
  });

  test("displays all 9 category buttons", async ({ page }) => {
    const buttons = page.locator(".category-btn");
    await expect(buttons).toHaveCount(9);
  });

  test("displays 3 difficulty buttons", async ({ page }) => {
    const buttons = page.locator(".difficulty-btn");
    await expect(buttons).toHaveCount(3);
  });

  test("category selection updates active state", async ({ page }) => {
    const historyBtn = page.locator('.category-btn[data-category="history"]');
    await historyBtn.click();
    await expect(historyBtn).toHaveClass(/active/);
    await expect(historyBtn).toHaveAttribute("aria-pressed", "true");
  });

  test("difficulty selection updates active state", async ({ page }) => {
    const hardBtn = page.locator('.difficulty-btn[data-difficulty="hard"]');
    await hardBtn.click();
    await expect(hardBtn).toHaveClass(/active/);
    await expect(hardBtn).toHaveAttribute("aria-pressed", "true");
  });

  test("Play Now button is visible", async ({ page }) => {
    await expect(page.locator("#start-btn")).toBeVisible();
  });
});

test.describe("Game Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();
  });

  test("starts a game and shows question", async ({ page }) => {
    await expect(page.locator(".question-text")).toBeVisible();
    await expect(page.locator(".question-counter")).toContainText("Question 1");
  });

  test("shows options for the question", async ({ page }) => {
    const options = page.locator(".option-btn");
    const count = await options.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("answering a question shows feedback and fun fact", async ({ page }) => {
    await page.locator(".option-btn").first().click();
    await expect(page.locator(".feedback")).toBeVisible();
    await expect(page.locator(".fun-fact")).toBeVisible();
    await expect(page.locator("#next-btn")).toBeVisible();
  });

  test("answering shows correct/incorrect styling", async ({ page }) => {
    await page.locator(".option-btn").first().click();
    const correct = page.locator(".option-btn.correct");
    await expect(correct).toHaveCount(1);
  });

  test("next button advances to next question", async ({ page }) => {
    await page.locator(".option-btn").first().click();
    await page.locator("#next-btn").click();
    await expect(page.locator(".question-counter")).toContainText("Question 2");
  });

  test("home button returns to home screen", async ({ page }) => {
    await page.locator("#home-btn").click();
    await expect(page.locator(".home-screen")).toBeVisible();
  });

  test("progress bar is visible", async ({ page }) => {
    await expect(page.locator(".progress-bar-container")).toBeVisible();
  });
});

test.describe("Results Screen", () => {
  test("completing all questions shows results", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();

    for (let i = 0; i < 10; i++) {
      await page.locator(".option-btn").first().click();
      await page.locator("#next-btn").click();
    }

    await expect(page.locator(".results-screen")).toBeVisible();
    await expect(page.locator(".results-score")).toBeVisible();
    await expect(page.locator(".ottavo-cta")).toBeVisible();
  });

  test("results screen has play again and share buttons", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();

    for (let i = 0; i < 10; i++) {
      await page.locator(".option-btn").first().click();
      await page.locator("#next-btn").click();
    }

    await expect(page.locator("#play-again-btn")).toBeVisible();
    await expect(page.locator("#share-btn")).toBeVisible();
    await expect(page.locator("#results-home-btn")).toBeVisible();
  });

  test("play again starts a new game", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();

    for (let i = 0; i < 10; i++) {
      await page.locator(".option-btn").first().click();
      await page.locator("#next-btn").click();
    }

    await page.locator("#play-again-btn").click();
    await expect(page.locator(".question-text")).toBeVisible();
    await expect(page.locator(".question-counter")).toContainText("Question 1");
  });
});

test.describe("Language Toggle", () => {
  test("language toggle button is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#lang-toggle")).toHaveText("FR");
  });

  test("toggling to French updates UI text", async ({ page }) => {
    await page.goto("/");
    await page.locator("#lang-toggle").click();
    await expect(page.locator("#lang-toggle")).toHaveText("EN");
    await expect(page.locator("#start-btn")).toBeVisible();
  });

  test("toggling back to English restores text", async ({ page }) => {
    await page.goto("/");
    await page.locator("#lang-toggle").click();
    await page.locator("#lang-toggle").click();
    await expect(page.locator(".tagline")).toContainText("How well do you know");
  });

  test("French language persists into game", async ({ page }) => {
    await page.goto("/");
    await page.locator("#lang-toggle").click();
    await page.locator("#start-btn").click();
    await expect(page.locator(".question-text")).toBeVisible();
    await expect(page.locator(".question-counter")).toContainText("de");
  });
});

test.describe("Accessibility", () => {
  test("skip link is present", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveAttribute("href", "#app");
  });

  test("skip link becomes visible on focus", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeFocused();
  });

  test("category buttons have aria-pressed attributes", async ({ page }) => {
    await page.goto("/");
    const buttons = page.locator(".category-btn");
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      const ariaPressed = await buttons.nth(i).getAttribute("aria-pressed");
      expect(ariaPressed).toMatch(/true|false/);
    }
  });

  test("category and difficulty groups have ARIA labels", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".category-grid")).toHaveAttribute("role", "group");
    await expect(page.locator(".difficulty-group")).toHaveAttribute("role", "group");
  });

  test("aria-live region exists for announcements", async ({ page }) => {
    await page.goto("/");
    const liveRegion = page.locator("#sr-announcements");
    await expect(liveRegion).toHaveAttribute("aria-live", "polite");
  });

  test("screen reader announcement on answer", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();
    await page.locator(".option-btn").first().click();
    const liveRegion = page.locator("#sr-announcements");
    const text = await liveRegion.textContent();
    expect(text).toMatch(/Correct|Incorrect/i);
  });

  test("progress bar has ARIA attributes", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();
    const progressBar = page.locator(".progress-bar-container");
    await expect(progressBar).toHaveAttribute("role", "progressbar");
    await expect(progressBar).toHaveAttribute("aria-valuenow", "1");
  });

  test("language toggle has aria-label", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#lang-toggle")).toHaveAttribute("aria-label", "Switch language");
  });
});

test.describe("Categories", () => {
  const categories = [
    "history", "geography", "culture", "language",
    "sports", "indigenous", "science", "food"
  ];

  for (const cat of categories) {
    test(`${cat} category starts a game`, async ({ page }) => {
      await page.goto("/");
      await page.locator(`.category-btn[data-category="${cat}"]`).click();
      await page.locator("#start-btn").click();
      await expect(page.locator(".question-text")).toBeVisible();
      await expect(page.locator(".category-tag")).toBeVisible();
    });
  }
});

test.describe("Keyboard Navigation", () => {
  test("number keys select answers during game", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();
    await page.keyboard.press("1");
    await expect(page.locator(".feedback")).toBeVisible();
  });

  test("Enter key advances after answering", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start-btn").click();
    await page.keyboard.press("1");
    await page.keyboard.press("Enter");
    await expect(page.locator(".question-counter")).toContainText("Question 2");
  });
});
