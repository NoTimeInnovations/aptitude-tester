import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const User = mongoose.models.user || mongoose.model('user', new Schema({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true },
    mobile: Number,
    date: String,
    password: { type: String, required: true },
    classes: [Schema.Types.Mixed],
    test: [Schema.Types.Mixed],
    plan: Number,
    role: String
}, { timestamps: true }));
