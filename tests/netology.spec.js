const { chromium } = require("playwright");
const{email, password} = require("../user");
const{ test, expect } =require("@playwright/test");

test('test', async ({ page }) => {
  await page.goto('https://netology.ru');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Пароль' }).click();
  await page.getByRole('textbox', { name: 'Пароль' }).fill(password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.locator("[data-testid= 'menu-userface']")).toContainText("ЛБ");

  await page.goto('https://netology.ru');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Пароль' }).click();
  await page.getByRole('textbox', { name: 'Пароль' }).fill(invalidPassword);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.locator("[data-testid= 'login-error-hint']")).toContainText("Вы ввели неправильно логин или пароль.");
});