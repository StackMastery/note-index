import mongoose from "mongoose";

const newDocumentSchema = new mongoose.Schema(
  {
    docTitle: {
      type: String,
      required: true,
      maxlength: [50, "Title maximum 50 characters"],
    },
    docDes: {
      type: String,
      maxlength: [160, "Description maximum 160 characters"],
    },
    fileExt: {
      type: String,
      enum: [
        "html",
        "css",
        "javascript",
        "python",
        "java",
        "go",
        "ruby",
        "php",
        "json",
        "markdown",
        "sql",
      ],
      required: true,
    },
    publicity: {
      type: String,
      enum: ["public", "private"],
      required: true,
    },
    documentContent: {
      type: String,
    },
    authorEmail: {
      type: String,
      required: true,
      maxlength: [255, "Email maximum 255 characters"],
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
  },
  { timestamps: true }
);

const NewDocumentModel =
  mongoose.models.Docs || mongoose.model("Docs", newDocumentSchema);

export default NewDocumentModel;
