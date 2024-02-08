import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now, SchemaTypes, Types } from 'mongoose';


@Schema()
export class Ability extends Document {

    @Prop({
        maxlength: 128,
    })
    name: string;

    @Prop({
        required: false
    })
    is_hidden: boolean;

    @Prop({
        maxlength: 128,
    })
    slot: number;

    @Prop({
        maxlength: 128,
    })
    _id_: number;

    @Prop({
        type: SchemaTypes.ObjectId,
        //ref: Subline.name,
        index: true,
        required: true,
    })
    abilityAsoc: Types.ObjectId;

    @Prop()
    expiresAt: Date;

    @Prop({ default: now() })
    updatedAt: Date;

}

export const AbilitySchema = SchemaFactory.createForClass(Ability);