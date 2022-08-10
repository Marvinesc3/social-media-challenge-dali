import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/User';

// currently only fetches a list
// of all users. 
//TODO: define POST request handler
export async function getAllUsers() {
    await dbConnect();
    const users = await User.find({}).sort({ name: -1})

    return users
}

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const users = await getAllUsers();

                res.status(200).json({success: true, data: users });
            } catch (error) {
                res.status(400).json({success: false });
            }
            break;
        default:
            res.status(400).json({success: false });
            break;
    }
}