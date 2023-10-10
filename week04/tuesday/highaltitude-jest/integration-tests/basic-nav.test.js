//Danny Radosevich
// UWYO COSC4210
// Integration Testing 

const portfinder = require('portfinder')
const puppeteer = require('puppeteer')

const app = require('../highaltitude')

let server = null 
let port = null

//set up the server
beforeEach(async() =>
{
    port = await portfinder.getPortPromise()
    server = app.listen(port)
})
//close the server when done
afterEach(() =>
{
    server.close() 
}) 

test('home page links to about', async () =>
{
    const browser = await puppeteer.launch()
    const page = browser.newPage()
    await page.goto('http://localhost:${port}')
    await Promise.all([
        page.waiteForNavigation(),
        (await page).click('[data-test-id="about"]')
    ])
    expect((await page).url()).toBe('http://localhost:${port}/about') 
})