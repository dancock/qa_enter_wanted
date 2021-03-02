import { WantedPage } from "./wantedPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new WantedPage(driver);

test("input is correct, click save", async () => {
  await page.navigate();
  await page.enterHeader("hdrInput");
  await page.enterMKE("mkeI");
  await page.enterOrigin("oriInput");
  await page.enterName("namInput");
  await page.enterSex("M"); //sexInput
  await page.enterRace("W"); //racInput
  await page.enterHeight("601"); //hgtInput
  await page.enterWeight("200"); //wgtInput
  await page.enterHair("haiInput");
  await page.enterOffense("offInput");
  await page.enterWarrantDate("03271979"); //wodInput
  await page.enterDL("olnInput");
  await page.enterDLState("UT"); //olsInput
  await page.enterDLDate("121579"); //olyInput
  await page.enterPlate("licInput");
  await page.enterLState("WI"); //lisInput
  await page.enterLYear("02282021"); //liyInput

  //if I had more time, I would have written a test using the clear button
  //await page.clickClearButton(driver, "clearBtn");
  //await page.enterHeader("hdrInput");
  await page.clickSaveButton(driver, "saveBtn");

  let result = await page.getResults();

  //I wasn't sure what to put as the expect because I had all the entries above.
  expect(result).toContain("Header");
})

afterAll(async () => {
  await driver.quit();
});
