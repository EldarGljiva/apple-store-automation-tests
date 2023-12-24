import BasePage from "./base-page";
import { WebDriver, By, until } from "selenium-webdriver";
import { Key } from "selenium-webdriver";

import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CheckoutPage extends BasePage {
  private monthlyCheckout = By.id(
    "shoppingCart.actions.installmentCheckoutOverlay.installmentsCheckout"
  );
  private fullCheckout = By.id("signIn.guestLogin.guestLogin");
  private delieveredPreferenceOne = By.css(
    'label[for="fulfillmentOptionButtonGroup0"]'
  );
  private delieveredPreferenceTwo = By.css(
    "label=[for='fulfillmentOptionButtonGroup1']"
  );
  private zipInputField = By.id(
    "checkout.fulfillment.deliveryTab.delivery.deliveryLocation.address.postalCode"
  );
  private continueShoppingButton = By.id("rs-checkout-continue-button-bottom");
  private zipCodeApplyButton = By.id(
    "checkout.fulfillment.deliveryTab.delivery.deliveryLocation.address.calculate"
  );
  constructor(driver: WebDriver) {
    super(driver);
  }

  async checkoutInFull() {
    await this.findElementAndClick(this.fullCheckout);
  }
  async checkoutMonthly() {
    await this.findElementAndClick(this.monthlyCheckout);
  }
  async toBeDelieveredOne() {
    await this.findElementAndClick(this.delieveredPreferenceOne);
  }
  async toBeDelieveredTwo() {
    await this.findElementAndClick(this.delieveredPreferenceTwo);
  }
  async enterZipCode() {
    await this.fillInputField(this.zipInputField, testData.data.zipCode);
  }
  async applyZipCode() {
    await this.findElementAndClick(this.zipCodeApplyButton);
  }
  async continueShopping() {
    await this.findElementAndClick(this.continueShoppingButton);
  }
}
