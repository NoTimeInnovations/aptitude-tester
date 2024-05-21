import { Questions } from "../../../util/mongodb/models";
import mongooseConnect from "../../../util/mongodb/mongooseConnect";


export async function GET(res) {
    mongooseConnect();
    try {

        const questions = await Questions.findOne({});

        if (questions == null || questions == undefined) {
            return new Response(JSON.stringify({ error: "Couldn't find any questions, maybe under maintenance" }), { status: 400 });
        }

        return new Response(JSON.stringify(questions), { status: 200 });
    } catch (err) {
        console.error(err); // Log the error for debugging

        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}