import express from 'express';
import ChatMessage from '../models/ChatMessage.js';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const query = ChatMessage.find({}); // empty object - gets all the data
        const chatMessages = await query.exec();
        res.json(chatMessages);
    } catch (err) {
        res.json({ error: true, message: err });
    }
});

router.post('/', async(req, res) => {
    const newChatMessageData = {
        username: req.body.username,
        message: req.body.message,
    }
    const chatMessage = new ChatMessage(newChatMessageData);
    try {
        const chatEntity = await chatMessage.save();
        res.json(chatEntity);
    } catch (err) {
        res.json({ error: true, message: err });
    }
});

// router.delete('/:id', async(req, res) => {
//     const { id } = req.params;
//     try {
//         const query = Task.deleteOne({
//             _id: id
//         });
//         await query.exec();
//         res.json({ success: true });

//     } catch (err) {
//         res.json({ error: true, message: err });
//     }
// });

export default router;