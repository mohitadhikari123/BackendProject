import { v2 as Cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "../utils/ApiError.js";


Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
  ``;
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await Cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //  file has been uploaded successfully
    console.log("File uploaded successfully on cloudinary");
    fs.unlinkSync(localFilePath); // remove the locally saved temerory file
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temerory file as the upload failed
  }
};
const deleteOnCloudinary = async (cloudFilePath) => {
  try {
    if (!cloudFilePath) return null;
    // delete the file on cloudinary
    const oldFileDeletedOnCloudinary = await Cloudinary.uploader.destroy(
      cloudFilePath
    );

    return oldFileDeletedOnCloudinary;
  } catch (error) {
    throw new ApiError(400, "Error while deleting file on cloudinary");
  }
};

export { uploadOnCloudinary, deleteOnCloudinary };
