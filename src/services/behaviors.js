const puppeteer = require('puppeteer'); 

async function checkStatusFromStream(){
    const date = new Date();

    if(date.getHours()){
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://www.twitch.tv/vvfps', {timeout: 0, waitUntil: 'networkidle0'});

        const status = await page.evaluate(() => {
            return document.querySelector('.sc-AxirZ.hWxZyu').textContent;
        });

        //console.log(status);
        await page.close();
        await browser.close();

        return true;
    }
}

module.exports = {
    checkStatusFromStream
}