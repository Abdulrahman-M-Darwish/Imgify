import { Document, Schema, model, models } from "mongoose";

export interface Image extends Document {
	title: string;
	transformationType: string;
	transformationUrl: string;
	secureUrl: string;
	publicId: string;
	width?: number;
	height?: number;
	config?: object;
	aspectRatio?: string;
	color?: string;
	prompt?: string;
	author: { _id: string; firstName: string; lastName: string };
	createdAt: Date;
	updatedAt: Date;
};

const imageSchema = new Schema(
	{
		title: { type: String, required: true },
		transformationType: { type: String, required: true },
		transformationUrl: { type: URL },
		secureUrl: { type: URL, required: true },
		publicId: { type: String, required: true },
		width: { type: Number },
		height: { type: Number },
		config: { type: Object },
		aspectRatio: { type: String },
		color: { type: String },
		prompt: { type: String },
		author: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true }
);

export const Image = models?.Image || model("Image", imageSchema);
