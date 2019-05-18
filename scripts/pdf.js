#! /usr/bin/env node

const puppeteer = require("puppeteer")

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto("http://cv.antn.se", { waitUntil: "networkidle0" })
  await page.pdf({ path: "static/anton.pdf", format: "A4" })

  await browser.close()
}

run()
