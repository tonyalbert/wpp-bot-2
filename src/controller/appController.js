const { client, sendText, sendFile } = require('../services/Venom');

const sendT = async (req, res) => {

    if (!req.body.to, !req.body.text) {
        res.status(400).send({ error: 'to and text are required' })
        return
    }

    try {
        const result = await sendText(req.body.to, req.body.text);

        if (!result) {
            res.status(500).send({ error: 'message not sent' })
            return
        }

        res.status(200).send({ success: 'message sent' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'message not sent' })
    }

}

const sendF = (req, res) => {

    if (!req.body.to, !req.body.filePath) {
        res.status(400).send({ error: 'to and filePath are required' })
        return
    }

    try {
        const result = sendFile(req.body.to, req.body.filePath);

        if (!result) {
            res.status(500).send({ error: 'message not sent' })
            return
        }

        res.status(200).send({ success: 'message sent' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'message not sent' })
    }
}


module.exports = { sendT, sendF }