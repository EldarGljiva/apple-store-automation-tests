import BasePage from "./base-page";
import { WebDriver, By, until } from "selenium-webdriver";
import { Key } from "selenium-webdriver";

import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CartPage extends BasePage {
  private removeButton = By.css('button[data-autom="bag-item-remove-button"]');

  private payButton = By.id("cart-actions-installmentCheckout");

  private payButtonFull = By.id("shoppingCart.actions.checkout");
  constructor(driver: WebDriver) {
    super(driver);
  }

  async removeItemFromCart() {
    await this.findElementAndClick(this.removeButton);
  }
  async payMonthly() {
    await this.findElementAndClick(this.payButton);
  }
  async payInFull() {
    await this.findElementAndClick(this.payButtonFull);
  }
}
