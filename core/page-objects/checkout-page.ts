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
  private firstName = By.id(
    "checkout.shipping.addressSelector.newAddress.address.firstName"
  );
  private lastName = By.id(
    "checkout.shipping.addressSelector.newAddress.address.lastName"
  );
  private address = By.id(
    "checkout.shipping.addressSelector.newAddress.address.street"
  );
  private street = By.id(
    "checkout.shipping.addressSelector.newAddress.address.street2"
  );
  private city = By.id(
    "checkout.shipping.addressSelector.newAddress.address.zipLookup.city"
  );
  private state = By.id(
    "checkout.shipping.addressSelector.newAddress.address.zipLookup.state"
  );
  private email = By.id(
    "checkout.shipping.addressContactEmail.address.emailAddress"
  );
  private phone = By.id(
    "checkout.shipping.addressContactPhone.address.fullDaytimePhone"
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
  async fillAllInputFields() {
    await this.fillInputField(this.firstName, testData.data.firstName);
    await this.fillInputField(this.lastName, testData.data.lastName);
    await this.fillInputField(this.address, testData.data.address);
    await this.fillInputField(this.street, testData.data.street);
    await this.fillInputField(this.city, testData.data.city);
    await this.fillInputField(this.state, testData.data.state);
    await this.fillInputField(this.email, testData.data.email);
    await this.fillInputField(this.phone, testData.data.phoneNumber);
  }
}
