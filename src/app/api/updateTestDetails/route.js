import { User } from "../../../util/mongodb/models"
import mongooseConnect from "../../../util/mongodb/mongooseConnect";
import jwt from "jsonwebtoken"

export async function POST(req, res) {
    await mongooseConnect();
    try {

        const { token, index, id, topic, correct, wrong, duration, isTried } = await req.json();

        const response = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET, (err, data) => {
            if (err) return { auth: false, message: "Invalid Login" }
            if (data.exp - data.iat < 0) {
                return { auth: false, message: "Session Epired" }
            }
            return { auth: true, data };
        });

        if (!response.auth) {
            return new Response(JSON.stringify({ error: response.message }), { status: 200 });
        }


        if (isTried) {
            const result = await User.findOneAndUpdate(
                { username: response.data.username, 'test.id': id, 'test.index': index, 'test.topic': topic },
                {
                    $set: {
                        'test': {
                            'correct': correct,
                            'wrong': wrong,
                            'duration': duration,
                            'date': new Date(),
                            'pass': correct - wrong >= 20,
                            'topic': topic,
                            'id': id,
                            'index': index,
                        }

                    },
                },
                { new: true }
            );

            return new Response(JSON.stringify(result), { status: 200 });
        } else {
            const result = await User.findOneAndUpdate(
                { username: response.data.username },
                {
                    $push: {
                        'test': {
                            'correct': correct,
                            'wrong': wrong,
                            'duration': duration,
                            'date': new Date(),
                            'pass': correct - wrong >= 20,
                            'topic': topic,
                            'id': id,
                            'index': index,
                        }

                    },
                },
                { new: true }
            );
            return new Response(JSON.stringify(result), { status: 200 });
        }


    } catch (err) {
        console.error(err); // Log the error for debugging

        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}