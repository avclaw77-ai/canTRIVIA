const { test, expect } = require('@playwright/test');

test.describe('canTRIVIA — Home Screen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads home screen with title and start button', async ({ page }) => {
    await expect(page.locator('.site-title')).toBeVisible();
    await expect(page.locator('#start-btn')).toBeVisible();
    await expect(page.locator('.category-grid')).toBeVisible();
    await expect(page.locator('.difficulty-group')).toBeVisible();
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/canTRIVIA/);
  });

  test('category buttons are interactive', async ({ page }) => {
    const historyBtn = page.locator('.category-btn[data-category="history"]');
    await historyBtn.click();
    await expect(historyBtn).toHaveAttribute('aria-pressed', 'true');
  });

  test('difficulty buttons are interactive', async ({ page }) => {
    const hardBtn = page.locator('.difficulty-btn[data-difficulty="hard"]');
    await hardBtn.click();
    await expect(hardBtn).toHaveAttribute('aria-pressed', 'true');
  });
});

test.describe('canTRIVIA — Game Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('starts a game and shows question', async ({ page }) => {
    await page.click('#start-btn');
    await expect(page.locator('.question-text')).toBeVisible();
    await expect(page.locator('.question-counter')).toContainText('1');
    await expect(page.locator('.progress-bar-container')).toBeVisible();
  });

  test('answering a question shows feedback and fun fact', async ({ page }) => {
    await page.click('#start-btn');
    await page.locator('.option-btn').first().click();
    await expect(page.locator('.feedback')).toBeVisible();
    await expect(page.locator('.fun-fact')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
  });

  test('can navigate through all questions to results', async ({ page }) => {
    await page.click('#start-btn');

    for (let i = 0; i < 10; i++) {
      await page.locator('.option-btn').first().click();
      await page.locator('#next-btn').click();
    }

    await expect(page.locator('.results-screen')).toBeVisible();
    await expect(page.locator('.results-score')).toBeVisible();
  });

  test('home button returns to home screen', async ({ page }) => {
    await page.click('#start-btn');
    await page.click('#home-btn');
    await expect(page.locator('.home-screen')).toBeVisible();
  });

  test('keyboard navigation works (press 1 to answer)', async ({ page }) => {
    await page.click('#start-btn');
    await page.keyboard.press('1');
    await expect(page.locator('.feedback')).toBeVisible();
  });
});

test.describe('canTRIVIA — Results Screen', () => {
  test('shows score and action buttons', async ({ page }) => {
    await page.goto('/');
    await page.click('#start-btn');

    for (let i = 0; i < 10; i++) {
      await page.locator('.option-btn').first().click();
      await page.locator('#next-btn').click();
    }

    await expect(page.locator('.results-heading')).toBeVisible();
    await expect(page.locator('#play-again-btn')).toBeVisible();
    await expect(page.locator('#share-btn')).toBeVisible();
    await expect(page.locator('#results-home-btn')).toBeVisible();
    await expect(page.locator('.ottavo-cta')).toBeVisible();
  });

  test('play again starts a new game', async ({ page }) => {
    await page.goto('/');
    await page.click('#start-btn');

    for (let i = 0; i < 10; i++) {
      await page.locator('.option-btn').first().click();
      await page.locator('#next-btn').click();
    }

    await page.click('#play-again-btn');
    await expect(page.locator('.question-text')).toBeVisible();
    await expect(page.locator('.question-counter')).toContainText('1');
  });
});

test.describe('canTRIVIA — Language Toggle', () => {
  test('switches to French', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#lang-toggle')).toHaveText('FR');
    await page.click('#lang-toggle');
    await expect(page.locator('#lang-toggle')).toHaveText('EN');
    await expect(page.locator('#start-btn')).toBeVisible();
  });

  test('French language persists into game', async ({ page }) => {
    await page.goto('/');
    await page.click('#lang-toggle');
    await page.click('#start-btn');
    await expect(page.locator('.question-text')).toBeVisible();
  });
});

test.describe('canTRIVIA — Accessibility', () => {
  test('skip link is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.skip-link')).toBeAttached();
  });

  test('progress bar has ARIA attributes', async ({ page }) => {
    await page.goto('/');
    await page.click('#start-btn');
    const progressBar = page.locator('.progress-bar-container');
    await expect(progressBar).toHaveAttribute('role', 'progressbar');
    await expect(progressBar).toHaveAttribute('aria-valuenow', '1');
  });

  test('category and difficulty groups have ARIA labels', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.category-grid')).toHaveAttribute('role', 'group');
    await expect(page.locator('.difficulty-group')).toHaveAttribute('role', 'group');
  });
});

test.describe('canTRIVIA — Category Filter', () => {
  test('can start game with specific category', async ({ page }) => {
    await page.goto('/');
    await page.click('.category-btn[data-category="sports"]');
    await page.click('#start-btn');
    await expect(page.locator('.category-tag')).toBeVisible();
    await expect(page.locator('.question-text')).toBeVisible();
  });
});
