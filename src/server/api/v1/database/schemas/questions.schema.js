import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const QuestionsSchema = new Schema(
    {
        question: { type: String, required: true, max: 128 },
        trueAnswer: { type: String, required: true, max: 128 },
        falseAnswerOne: { type: String, required: true, max: 128 },
        falseAnswerTwo: { type: String, required: true, max: 128 },
        falseAnswerThree: { type: String, required: true, max: 128 },
        room: { type: String, required: true, max: 128 },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
        museumsId: { type: Schema.Types.ObjectId, ref: 'Museums', required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

QuestionsSchema.methods.slugify = function () {
    this.slug = slug(this.question);
};

QuestionsSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

QuestionsSchema.virtual('id').get(function () { return this._id; });
QuestionsSchema.virtual('museums', {
    ref: 'museums',
    localField: 'museumsId',
    foreignField: '_id',
    justOne: true,
});

QuestionsSchema.plugin(mongoosePaginate);
export default mongoose.model('Questions', QuestionsSchema);
