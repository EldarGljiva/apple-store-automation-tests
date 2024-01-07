import BasePage from "./base-page";
import { WebDriver, By, until } from "selenium-webdriver";
import { Key } from "selenium-webdriver";

import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ProductPage extends BasePage {
  private buy = By.css(
    "a[href='https://www.apple.com/us/shop/goto/product/MME73']"
  );
  private support = By.css("a[href='https://support.apple.com/airpods']");
  private button = By.id("add-to-cart");
  private replace = By.linkText("Replace an AirPod");
  private serviceButton = By.className(
    "has-cta alignment horizontal-align-center"
  );
  private india = By.css("a[href='/?locale=en_IN']");
  private headerIndia = By.css("h1");
  constructor(driver: WebDriver) {
    super(driver);
  }

  //Regression Test 3: Add to Cart
  //Adding item to cart should be done successfully
  async clickBuyProduct() {
    await this.findElementAndClick(this.buy);
  }
  async clickSupport() {
    await this.findElementAndClick(this.support);
  }
  async addToCart() {
    await this.findElementAndClick(this.button);
  }
  async pressReplaceLink() {
    await this.findElementAndClick(this.replace);
  }
  async pressServiceButton() {
    await this.findElementAndClick(this.serviceButton);
  }
  async selectIndia() {
    await this.findElementAndClick(this.india);
  }
  async headerIsVisible() {
    await this.findElement(this.headerIndia);
  }
}
