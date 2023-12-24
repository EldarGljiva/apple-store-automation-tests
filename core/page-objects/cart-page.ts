import BasePage from "./base-page";
import { WebDriver, By, until } from "selenium-webdriver";
import { Key } from "selenium-webdriver";

import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CartPage extends BasePage {
  private removeButton = By.id(
    "shoppingCart.items.item-c28547aa-0501-4395-9f72-ee2590bafe6d.delete"
  );
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
