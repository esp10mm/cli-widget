const superagent = require('superagent');
const cheerio = require('cheerio');
// const chalk = require('chalk');
const config = require('./config') || [];


const fetch = async (profile) => {
  let { message, selectors, url } = profile;
  const res = await superagent.get(url);
  const $ = cheerio.load(res.text);

  for (const key in selectors) {
    const regex = new RegExp(`\\\$\{${key}\}`);
    message = message.replace(regex, $(selectors[key]).text());
  }
  console.log(message);
};

const main = async () => {
  for (let i = 0; i < config.length; i += 1) {
    await fetch(config[i]);
  }
};

main();
