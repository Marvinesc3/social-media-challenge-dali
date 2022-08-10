import dbConnect  from "../../../lib/dbConnect";
import Post from '../../../models/Post';

// TODO: make endpoint to create a new post via POST request

export default async function handler (req, res) {
    const { method } = req;

    await dbConnect();
    
    switch(method) {
        case 'GET':
            try {
                const posts = await Post.find({})

                res.status(200).json({ success: true, data: posts });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const post = await Post.create(
                    req.body
                ); /* create a new model in the database */
                
                res.status(201).json({ success: true, data: post });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }   
}