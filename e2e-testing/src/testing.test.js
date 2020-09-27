const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromeDriver = require('chromedriver')

chrome.setDefaultService(
  new chrome.ServiceBuilder(chromeDriver.path).build()
)

const driver = new webdriver.Builder().forBrowser('chrome').build()

const WEBSITE_URL = "http://localhost:3000/"

describe("Checkout Page", () => {
  jest.setTimeout(10000)
  const { By } = webdriver 

  it("Bisa menambahkan jumlah pembelian barang", async () => {
    await driver.get(WEBSITE_URL)
    const addButton_Item1 = await driver.findElement(By.xpath('//div[@data-testid="item-1"]//div[@data-testid="add-button"]'))
    await addButton_Item1.click()
    await driver.sleep(500)
    await addButton_Item1.click()
    await driver.sleep(500)
    await addButton_Item1.click()
    await driver.sleep(500)
    await addButton_Item1.click()
    await driver.sleep(500)
    await addButton_Item1.click()
    await driver.sleep(500)
    await addButton_Item1.click()

    const qtyElement = await driver.findElement(By.xpath('//div[@data-testid="item-1"]//div[@data-testid="qty"]'))
    const qtyText = await qtyElement.getText()
    expect(qtyText).toBe("x 7")
    
  })

  it("Bisa mengurangi jumlah pembelian barang", async () => {
    await driver.sleep(1000)

    const decreaseButton_Item1 = await driver.findElement(By.xpath('//div[@data-testid="item-1"]//div[@data-testid="decrease-button"]'))
    await decreaseButton_Item1.click()
    await driver.sleep(500)
    await decreaseButton_Item1.click()
    await driver.sleep(500)
    await decreaseButton_Item1.click()
    await driver.sleep(500)
    await decreaseButton_Item1.click()
    await driver.sleep(500)
    await decreaseButton_Item1.click()
    await driver.sleep(500)
    await decreaseButton_Item1.click()

    const qtyElement = await driver.findElement(By.xpath('//div[@data-testid="item-1"]//div[@data-testid="qty"]'))
    const qtyText = await qtyElement.getText()
    expect(qtyText).toBe("x 1")
  })

  it("Jumlah pembelian barang tidak boleh kurang dari 1", async () => {
    await driver.sleep(1000)

    const qtyElement = await driver.findElement(By.xpath('//div[@data-testid="item-1"]//div[@data-testid="qty"]'))
    const qtyText = await qtyElement.getText()
    expect(qtyText).toBe("x 1")

    const decreaseButton_Item1 = await driver.findElement(By.xpath('//div[@data-testid="item-1"]//div[@data-testid="decrease-button"]'))
    await decreaseButton_Item1.click()
    await decreaseButton_Item1.click()
    await decreaseButton_Item1.click()
    expect(qtyText).toBe("x 1")
  })

  it("Bisa hapus barang", async () => {
    await driver.sleep(1000)

    const deleteButton_Item2 = await driver.findElement(By.xpath('//div[@data-testid="item-2"]//div[@data-testid="delete-button"]'))
    await deleteButton_Item2.click()

    await driver.sleep(1000)
    await deleteButton_Item2.click()
    
    const jumlahBarangElement = await driver.findElement(By.xpath('//div[@data-testid="jumlah-barang"]'))
    const jumlahBarangText = await jumlahBarangElement.getText()

    expect(jumlahBarangText).toBe("1 Items")

    await driver.sleep(3000)
    driver.quit()
  })
})