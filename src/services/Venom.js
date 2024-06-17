const venom = require('venom-bot');

let client = null;

const init = async () => {
  try {
    client = await venom.create({
      session: 'Whats_Sr',
      multidevice: true
    });
  
    console.log('Client Created');
  } catch (error) {
    console.log(error);
  }
}

const sendText = async (to, text) => {
  try {
    const res = await client.sendText(to, text);
    console.log(res);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

const sendFileFromBase64 = async (to, imgBase64, fileName, caption) => {
  try {
    const res = await client.sendFileFromBase64(to, imgBase64, fileName, caption);
    console.log(res);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

module.exports = { init, sendText, client, sendFileFromBase64 };  ;