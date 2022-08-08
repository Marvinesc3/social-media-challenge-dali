import { ObjectID } from "bson";
import { connectToDatabase } from "../../../lib/connect";

export default async function (req, res) {
    const { userId } = req.query;
    const { db } = await connectToDatabase();

    // specifies the fields we want to include 
    // _id always implicitly included
    const fieldsToInclude = {name: 1, quote: 1};

    const user = await db
        .collection("public")
        .findOne(
            { _id : ObjectID(userId),}, 
            { projection: fieldsToInclude});

    res.json(user);
}