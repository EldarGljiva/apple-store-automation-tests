import { Builder, By, until, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { HomePage } from "../core/page-objects/home-page";
import { ProductPage } from "../core/page-objects/product-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let productPage: ProductPage;

beforeAll(async () => {
  driver = await createDriver(testData.url.home_page);
  homePage = new HomePage(driver);
  productPage = new ProductPage(driver);
}, 20000);

test("Add to Cart", async () => {
  await homePage.searchProduct();
  await productPage.clickBuyProduct();
  await productPage.addToCart();
}, 20000);

afterAll(async () => {
  await quitDriver(driver);
}, 10000);
