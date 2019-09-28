const puppeteer = require("puppeteer");

beforeAll(async () => {
  browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    dumpio: true
  });
}, 10000);

afterAll(async () => {
  browser.close();
});

const newPage = () => browser.newPage();

module.exports = {
  newPage
};
