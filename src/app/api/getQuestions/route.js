import { Questions, User } from "../../../util/mongodb/models";
import mongooseConnect from "../../../util/mongodb/mongooseConnect";


export async function POST(req, res) {
    mongooseConnect();
    try {
        const { token, topic, id } = await req.json();

        var resp = await (await fetch("http:localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({
                token,
            }),
        })).json();

        if (!resp.auth) {
            return new Response(JSON.stringify({ error: resp.message }), { status: 400 });
        }

        const questions = await Questions.findOne({ topic, id }, "questions -_id");

        if (questions == null || questions == undefined) {
            return new Response(JSON.stringify({ error: "Couldn't find any questions, maybe under maintenance" }), { status: 400 });
        }

        const user = await User.findOne({ username: resp.data.username }, "username -_id");

        if (user == null || user == undefined) {
            return new Response(JSON.stringify({ error: "User does not Exist" }), { status: 400 });
        }

        return new Response(JSON.stringify({ questions: questions, user }), { status: 200 });
    } catch (err) {
        console.error(err); // Log the error for debugging

        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}