import React, { useState } from "react";
import { CloudUpload, Delete } from "lucide-react";
import Image from "next/image";

const ImageUploader = ({
  images,
  setImages,
  setImagePreviews,
  imagePreviews,
}) => {
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="w-full">
      <div className="flex-1 bg-white relative border-dashed border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7]">
        <CloudUpload size={50} className="text-hero" />
        <h1 className="text-xl mt-3 font-semibold">
          Drop Your Images Here or,{" "}
          <span className="text-hero">Click to browse</span>
        </h1>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap gap-4 mt-6">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative">
            <Image
              width={400}
              height={400}
              src={preview}
              alt="Preview"
              className="w-10 rounded h-10"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 text-red-500"
            >
              <Delete size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
