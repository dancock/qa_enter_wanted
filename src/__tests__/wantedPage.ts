import { By, until, WebDriver } from "selenium-webdriver";

export class WantedPage {
  driver: WebDriver;
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  resultz: By = By.name("hdrHeader");
  title: By = By.className("cake");
  //there was probably an easier way to add text to a field,
  //but this was all I could think of.
  //This is what goes in the text field.
  hdrHeadInput: By = By.name("hdrInput");
  mkeHeadInput: By = By.name("mkeInput");
  oriHeadInput: By = By.name("oriInput");
  namHeadInput: By = By.name("namInput");
  sexHeadInput: By = By.name("sexInput");
  racHeadInput: By = By.name("racInput");
  hgtHeadInput: By = By.name("hgtInput");
  wgtHeadInput: By = By.name("wgtInput");
  haiHeadInput: By = By.name("haiInput");
  offHeadInput: By = By.name("offInput");
  dowHeadInput: By = By.name("dowInput");
  dlHeadInput: By = By.name("olnInput");
  dlsHeadInput: By = By.name("olsInput");
  dlyHeadInput: By = By.name("olyInput");
  liHeadInput: By = By.name("licInput");
  lisHeadInput: By = By.name("lisInput");
  liyHeadInput: By = By.name("liyInput");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  //navigates to a url
  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.title));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.title))
    );
  }

  //sends text to an element
  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  //click the Submit button.
  async clickSaveButton(
    driver: WebDriver,
    button: string
  ): Promise<void> {
    return (
      await driver.findElement(By.id("saveBtn"))
    ).click();
  }

  //click the Clear button.
  async clickClearButton(
    driver: WebDriver,
    button: string
  ): Promise<void> {
    return (
      await driver.findElement(By.id("clearBtn"))
    ).click();
  }

  //gets the text from an element
  async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  //gets the results
  async getResults() {
    //let result = await this.getDisplay(this.driver);
    return this.getText(this.resultz);
  }

  //There was probably an easier way to do this, but this was all I could think of.
  //These are the methods adding specific text to a specific field.
  async enterHeader(text: string) {
    return this.sendKeys(this.hdrHeadInput, `${text}\n`);
  }

  async enterMKE(text: string) {
    return this.sendKeys(this.mkeHeadInput, `${text}\n`);
  }

  async enterOrigin(text: string) {
    return this.sendKeys(this.oriHeadInput, `${text}\n`);
  }

  async enterName(text: string) {
    return this.sendKeys(this.namHeadInput, `${text}\n`);
  }

  async enterSex(text: string) {
    return this.sendKeys(this.sexHeadInput, `${text}\n`);
  }

  async enterRace(text: string) {
    return this.sendKeys(this.racHeadInput, `${text}\n`);
  }

  async enterHeight(text: string) {
    return this.sendKeys(this.hgtHeadInput, `${text}\n`);
  }

  async enterWeight(text: string) {
    return this.sendKeys(this.wgtHeadInput, `${text}\n`);
  }

  async enterHair(text: string) {
    return this.sendKeys(this.haiHeadInput, `${text}\n`);
  }

  async enterOffense(text: string) {
    return this.sendKeys(this.offHeadInput, `${text}\n`);
  }

  async enterWarrantDate(text: string) {
    return this.sendKeys(this.dowHeadInput, `${text}\n`);
  }

  async enterDL(text: string) {
    return this.sendKeys(this.dlHeadInput, `${text}\n`);
  }

  async enterDLState(text: string) {
    return this.sendKeys(this.dlsHeadInput, `${text}\n`);
  }

  async enterDLDate(text: string) {
    return this.sendKeys(this.dlyHeadInput, `${text}\n`);
  }

  async enterPlate(text: string) {
    return this.sendKeys(this.liHeadInput, `${text}\n`);
  }

  async enterLState(text: string) {
    return this.sendKeys(this.lisHeadInput, `${text}\n`);
  }
  async enterLYear(text: string) {
    return this.sendKeys(this.liyHeadInput, `${text}\n`);
  }
}
