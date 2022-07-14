// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('heroes', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('heroes', async function() {
    await driver.get("http://localhost:4200/heroes")
    await driver.findElement(By.id("heroName")).click()
    await driver.findElement(By.id("heroName")).sendKeys("Thor")
    await driver.findElement(By.id("heroDescription")).click()
    await driver.findElement(By.id("heroDescription")).sendKeys("God of Thunder")
    await driver.findElement(By.id("addHeroBtn")).click()
    await driver.findElement(By.id("hero_name_3")).click()
    await driver.findElement(By.id("hero_description_3")).click()
    assert.equal(await driver.findElement(By.id("hero_name_3")).getText(), "Thor")
    assert.equal(await driver.findElement(By.id("hero_description_3")).getText(), "God of Thunder")
  })
})