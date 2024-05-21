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
    test: [Schema.Types.Mixed],
    scheduled: Schema.Types.Mixed,
    plan: Number,
    role: String
}, { timestamps: true }));
