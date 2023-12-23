import BasePage from "./base-page";
import { WebDriver, By, until } from "selenium-webdriver";
import { Key } from "selenium-webdriver";

import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage extends BasePage {
  private product = By.css("a[href='https://www.apple.com/mac/']");
  private searchBar = By.id("globalnav-menubutton-link-search");
  private openedSearchbar = By.className("globalnav-searchfield-input");
  constructor(driver: WebDriver) {
    super(driver);
  }
  //test 1 - "Regression Test 1: Product Details
  //Once we are on the product page that we selected, all information regarding that product should be displayed properly
  async showProductPage() {
    await this.findElementAndClick(this.product);
  }
  //Regression Test 2: Product Search
  //All products under the selection should be displayed
  async searchProduct() {
    await this.findElementAndClick(this.searchBar);
    await this.fillInputField(this.openedSearchbar, testData.data.info);
    await this.driver.findElement(this.openedSearchbar).sendKeys(Key.ENTER);
  }
}
