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

test("Item Support Page", async () => {
  await homePage.searchProduct();
  await productPage.clickSupport();
  await productPage.pressReplaceLink();
  await productPage.pressServiceButton();
}, 55000);

afterAll(async () => {
  await quitDriver(driver);
}, 10000);
