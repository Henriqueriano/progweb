const Message = require('../models/message');
const router = require('express').Router();
router.post('/saveMessage', async (req, res, next) => 
    {
        const messageObject = new Message({content: req.body.content, username: req.body.username});
        try 
        {
            await messageObject.save();
            res.status(201).json(
                {
                    message: "Sucess: Mensagem salva com sucesso!",
                    objectSaver: messageObject
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    message: "Failed: Server Failed when saves your message!",
                    objectSaver: error
                }
            );
        }
    }
);

router.delete('/deleteMessage/:messageId', async (req,res) => 
    {
        const messageId = req.params.messageId;
        console.log(messageId);
        try {
            const message = await Message.find({_id: messageId});
            if (message == null) 
                throw new Error('Mensagem não encontrada!');
            await Message.deleteOne({_id: messageId});
            res.status(200).json({'message':'Mesnsagem deletada com sucesso!'}); 
        } catch (error) {
            res.status(500).json({'message':'Erro no servidor', 'erro': error});
        }
    })

router.get('/getMessages', async (req, res) => 
    {
        try {
            const allMessages = await Message.find({});
            res.status(200).json(
                {
                    myMsgSucesso: 'Mensagens recuperadas com sucesso',
                    objsMessageRecuperadas: allMessages
                });
        } catch (error) {
            return res.status(500).json(
                {
                    myErrorTitle: 'Server-side: Erro',
                    myError: error
                }
            );
        }
    })
module.exports = router;