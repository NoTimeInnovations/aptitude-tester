import { Classes } from "../../../util/mongodb/models";
import mongooseConnect from "../../../util/mongodb/mongooseConnect";


export async function GET(res) {
    mongooseConnect();
    try {

        const classes = await Classes.findOne({});

        if (classes == null || classes == undefined) {
            return new Response(JSON.stringify({ error: "Couldn't find any classes, maybe under maintenance" }), { status: 400 });
        }

        return new Response(JSON.stringify(classes), { status: 200 });
    } catch (err) {
        console.error(err); // Log the error for debugging

        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}