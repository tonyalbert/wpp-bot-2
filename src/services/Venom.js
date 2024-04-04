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
    await client.sendText(to, text);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

const sendFile = async (to, filePath) => {
  try {
    await client.sendFile(to, filePath);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

module.exports = { init, sendText, client };  ;