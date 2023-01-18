
const axios = require("axios");
const puppeteer = require("puppeteer");

const link = "https://www.linkedin.com/jobs/search/?geoId=104305776&keywords=tnc&location=United%20Arab%20Emirates"

async function startScrap() {
    try{
    console.log("Started...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);
    const data = await page.$$eval('div',options => {
        return options.map((option)=>option.innerHTML);
    });
    console.log(data);
    await page.screenshot({path:'file.png',fullPage:true});
    await browser.close();
    }catch(e){
        console.log(e);
    }
}

startScrap();

