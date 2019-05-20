#! /usr/bin/env node

const puppeteer = require("puppeteer")

const run = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto("http://localhost:8000", { waitUntil: "networkidle2" })
  await page.pdf({ path: "static/anton.pdf", format: "A4" })

  await browser.close()
}

run()
