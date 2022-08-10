import { ObjectID } from "bson";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User"

export default async function (req, res) {
    const { userId } = req.query;
    await dbConnect();

    // specifies the fields we want to include 
    // _id always implicitly included
    const fieldsToInclude = {name: 1, quote: 1};

    const user = await User
        .findOne(
            { _id : ObjectID(userId),}, 
            { projection: fieldsToInclude});

    res.json(user);
}