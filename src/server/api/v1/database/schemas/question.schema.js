import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const QuestionSchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        museums_id: { type: Number, required: true },
        room_id: { type: Number, required: true },
        question: { type: String, required: true },
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
    this.slug = slug(this.title);
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
