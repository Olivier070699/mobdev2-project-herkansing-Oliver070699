import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const ColorSchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
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

ColorSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

ColorSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

ColorSchema.virtual('id').get(function () { return this._id; });

ColorSchema.plugin(mongoosePaginate);
export default mongoose.model('Color', ColorSchema);
