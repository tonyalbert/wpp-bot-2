const { sendText, sendFileFromBase64 } = require('../services/Venom');

const sendT = async (req, res) => {

    if (!req.body.to, !req.body.text) {
        res.status(400).send({ error: 'to and text are required' })
        return
    }

    if (typeof req.body.to !== 'string' || typeof req.body.text !== 'string') {
        res.status(400).send({ error: 'to and text must be a string' })
        return
    }

    if (req.body.to.length < 1 || req.body.text.length < 1) {
        res.status(400).send({ error: 'to and text must not be empty' })
        return
    }

    if (req.body.to.length !== 10) {
        res.status(400).send({ error: 'to must be 9 characters' })
        return
    }

    const number = req.body.to + '@c.us'

    try {
        const result = await sendText(number, req.body.text);

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

const sendF = async (req, res) => {

    if (!req.body.to || !req.body.imgBase64 || !req.body.fileName || !req.body.caption) {
        res.status(400).send({ error: 'all fields are required' })
        return
    }

    if (typeof req.body.to !== 'string' || typeof req.body.imgBase64 !== 'string' || typeof req.body.fileName !== 'string' || typeof req.body.caption !== 'string') {
        res.status(400).send({ error: 'all fields must be a string' })
        return
    }

    if (req.body.to.length < 1 || req.body.imgBase64.length < 1 || req.body.fileName.length < 1 || req.body.caption.length < 1) {
        res.status(400).send({ error: 'all fields must not be empty' })
        return
    }

    if (req.body.to.length !== 10) {
        res.status(400).send({ error: 'to must be 9 characters' })
        return
    }

    const number = req.body.to + '@c.us'

    try {
        const response = await sendFileFromBase64(number, req.body.imgBase64, req.body.fileName, req.body.caption);

        if (!response) {
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