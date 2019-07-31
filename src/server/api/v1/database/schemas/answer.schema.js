import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const AnswerSchema = new Schema(
    {
        parentQuestionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
        answer: { type: Number, required: true, max: 128 },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

AnswerSchema.methods.slugify = function () {
    this.slug = slug(this.answer);
};

AnswerSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

AnswerSchema.virtual('id').get(function () { return this._id; });

AnswerSchema.plugin(mongoosePaginate);
export default mongoose.model('Answer', AnswerSchema);
