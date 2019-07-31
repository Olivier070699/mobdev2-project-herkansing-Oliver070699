import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const QuestionSchema = new Schema(
    {
        parentMuseumId: { type: Schema.Types.ObjectId, ref: 'Museums', required: true },
        room: { type: Number, required: true },
        question: { type: String, required: true },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        answer: { type: String, required: true },
        imageUrl: { type: String, required: true },
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

QuestionSchema.methods.slugify = function () {
    this.slug = slug(this.question);
};

QuestionSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

QuestionSchema.virtual('id').get(function () { return this._id; });

QuestionSchema.plugin(mongoosePaginate);
export default mongoose.model('Question', QuestionSchema);
