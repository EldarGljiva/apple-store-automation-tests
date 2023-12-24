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
  private button = By.id("add-to-cart");
  constructor(driver: WebDriver) {
    super(driver);
  }

  //Regression Test 3: Add to Cart
  //Adding item to cart should be done successfully
  async clickBuyProduct() {
    await this.findElementAndClick(this.buy);
  }
  async addToCart() {
    await this.findElementAndClick(this.button);
  }
}
