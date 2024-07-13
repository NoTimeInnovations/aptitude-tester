import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const Questions = mongoose.models.questions || mongoose.model('questions', new Schema({
    reasoning: [Schema.Types.Mixed],
    numerical: [Schema.Types.Mixed],
    english: [Schema.Types.Mixed]
}));
export const Classes = mongoose.models.classes || mongoose.model('classes', new Schema({
    reasoning: [Schema.Types.Mixed],
    numerical: [Schema.Types.Mixed],
    english: [Schema.Types.Mixed]
}));

export const Task = mongoose.models.remainders || mongoose.model('remainders', new mongoose.Schema({
    email: { type: String, required: true },
    scheduledTime: { type: Date, required: true }
}));


export const User = mongoose.models.user || mongoose.model('user', new Schema({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true },
    mobile: Number,
    date: String,
    password: { type: String, required: true },
    classes: {
        reasoning: [Schema.Types.Number],
        numerical: [Schema.Types.Number],
        english: [Schema.Types.Number],
    },
    test: { type: Array, "default": [] },
    scheduled: {
        topic: String,
        id: Number,
        date: Date
    },
    plan: Number,
    role: String
}, { timestamps: true }));
