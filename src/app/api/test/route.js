
import mongooseConnect from "../../../util/mongodb/mongooseConnect";

export async function GET() {
    mongooseConnect().then(() => { console.log("Hello") });
    return Response.json({
        name: "connect"
    });
}