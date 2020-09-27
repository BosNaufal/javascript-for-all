const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromeDriver = require('chromedriver')

chrome.setDefaultService(
  new chrome.ServiceBuilder(chromeDriver.path).build()
)

const driver = new webdriver.Builder().forBrowser('chrome').build()

describe("E2E Testing", () => {
  jest.setTimeout(10000)
  
  it("Testing", async () => {
    await driver.get('https://google.com')
    const searchInput = await driver.findElement(webdriver.By.name('q'))
    await searchInput.sendKeys("BosNaufal")
    await searchInput.sendKeys(webdriver.Key.ENTER)

    driver.quit()

    expect(true).toBe(true)
  })
})