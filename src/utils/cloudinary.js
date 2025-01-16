import { v2 as Cloudinary  } from "cloudinary";
import fs from "fs";

Cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
try {
    if(!localFilePath) return null
    // upload the file on cloudinary
    const response = Cloudinary.uploader.upload(localFilePath, 
         { 
            resource_type: "auto"
         });
        //  file has been uploaded successfully
        console.log('File uploaded successfully on cloudinary', response.url);
        return response;
} catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temerory file as the upload failed
}
};
Cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", 
    { public_id: "shoes" },
    function (error, result) {console.log(result); });

export  {uploadOnCloudinary};