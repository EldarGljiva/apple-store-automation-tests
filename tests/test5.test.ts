import { Builder, By, until, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { HomePage } from "../core/page-objects/home-page";
import { ProductPage } from "../core/page-objects/product-page";
import { CartPage } from "../core/page-objects/cart-page";
import { CheckoutPage } from "../core/page-objects/checkout-page";

import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let productPage: ProductPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

beforeAll(async () => {
  driver = await createDriver(testData.url.home_page);
  homePage = new HomePage(driver);
  productPage = new ProductPage(driver);
  cartPage = new CartPage(driver);
  checkoutPage = new CheckoutPage(driver);
}, 20000);

test("Checking out", async () => {
  //Add Item to cart first
  await homePage.searchProduct();
  await productPage.clickBuyProduct();
  await productPage.addToCart();
  await driver.get(testData.url.home_page);
  //proceed with payment
  await homePage.pressCartIconAndReview();
  await cartPage.payMonthly();
  await checkoutPage.checkoutMonthly();
  await driver.sleep(2000);
}, 20000);

afterAll(async () => {
  await quitDriver(driver);
}, 10000);
