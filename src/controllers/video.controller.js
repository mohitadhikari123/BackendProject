import mongoose, { isValidObjectId } from "mongoose";
import { Video } from "../models/video.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;
  //TODO: get all videos based on query, sort, pagination
  // const video = await Video.findById(userId);

  // if (!video) {
  //   throw new ApiError(404, "No video found");
  // }
});

const publishAVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
// console.log('req.body', req.files)
// console.log('req.user', req.user)
  // TODO: get video, upload to cloudinary, create video

  //validate title and description fields are not empty

  //get local path of video file and thumbnail file
  //validate video and thumbnail file upload by multer middleware

  //upload video file and thumbnail file to cloudinary
  // validate video and thumbnail file upload by on clodinary

  //crate a Video document in the database
  // assign all the fields to the video document
  // check the video is created or not in the database
  // return the response


  if(!title || !description) {
    throw new ApiError(400, "Title and description are required");
  }

  const localVideoPath = req.files?.videoFile[0].path;
  const localThumbnailPath = req.files?.thumbnail[0].path;

  if(!localVideoPath || !localThumbnailPath) {
    throw new ApiError(400, "Video and thumbnail are required");
  }

res.status(201).json({message: "Video published successfully"});
});

const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: get video by id
});

const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: update video details like title, description, thumbnail
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: delete video
});

const togglePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
});

export {
  getAllVideos,
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
};
