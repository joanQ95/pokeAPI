import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now, SchemaTypes, Types } from 'mongoose';


@Schema()
export class Player extends Document {

    @Prop({
        maxlength: 128,
    })
    name: string;

    @Prop()
    order: number;

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

export const PlayerSchema = SchemaFactory.createForClass(Player);