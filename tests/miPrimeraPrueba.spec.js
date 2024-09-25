const { test, expect } = require('@playwright/test');

test('Prueba de ejemplo con Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const titulo = await page.title();
  expect(titulo).toContain('Playwright');
});
