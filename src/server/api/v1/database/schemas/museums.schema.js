import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const MuseumsSchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
        synopsis: { type: String, required: true, max: 1024 },
        body: { type: String, required: false },
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

MuseumsSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

MuseumsSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

MuseumsSchema.virtual('id').get(function () { return this._id; });

MuseumsSchema.plugin(mongoosePaginate);
export default mongoose.model('Museums', MuseumsSchema);
