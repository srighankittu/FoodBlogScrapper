const express = require("express");
const PORT = 3000;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// const cheerio = require("cheerio");
// const request = require("request");
const puppeteer = require("puppeteer");

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/url", async (req, res) => {
  const url = req.body.url;
  const data = await fetchData(req.body.url);
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// const puppeteer = require("puppeteer");

async function fetchData(url) {
  const browser = await puppeteer.launch();
  console.log(url);
  const page = await browser.newPage();
  await page.goto(url);

  // Extract data from the script tag
  const data = await page.evaluate(() => {
    const scriptTags = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    );
    const targetScriptTag = scriptTags.find((s) =>
      s.innerText.includes("@context")
    );
    return targetScriptTag ? targetScriptTag.innerText : null;
  });

  //   console.log(data);

  await browser.close();
  return data;
}

// fetchData();
