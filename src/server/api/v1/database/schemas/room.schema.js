import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const RoomSchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
        museums_id: { type: Number, required: true },
        room_number: { type: Number, required: true },
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

RoomSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

RoomSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

RoomSchema.virtual('id').get(function () { return this._id; });

RoomSchema.plugin(mongoosePaginate);
export default mongoose.model('Room', RoomSchema);
