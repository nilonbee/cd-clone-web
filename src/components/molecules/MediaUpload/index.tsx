"use client";
import { fileUploader } from "@/utils/auth-api-requests";
import { rootImagePath } from "@/utils/rootImagePath";
import React, { useState } from "react";
import { PiUpload } from "react-icons/pi";
import Iframe from "react-iframe";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  type: string;
  title: string;
  accept?: string;
  location?: string;
  upFile: string;
  setUpFile: (file: string) => void;
  prefix: string;
};

export const MediaUpload = ({
  title,
  type = "file",
  accept = "image/*",
  location = "local",
  upFile,
  setUpFile,
  prefix,
}: Props) => {
  const [uploading, setUploading] = useState(false);

  const uploadFileChange = async (event: any) => {
    setUploading(true);
    await fileUploader(event.target.files[0], type, location, prefix)
      .then((res) => {
        setUploading(false);
        setUpFile(res.data.file_path);
        console.log("res", res.data.file_path);
      })
      .catch((error) => {
        console.error("Failed to upload file:", error);
      });
  };

  const deleteFile = () => {
    setUpFile("");
  };

  return (
    <div>
      <p className="text-xs text-gray font-semibold mb-1">{title}</p>
      {!upFile && (
        <label className="w-[180px] h-[180px] flex flex-col items-center px-4 py-6 bg-white text-grayMedium rounded-md tracking-wide uppercase border border-dashed border-grayMedium cursor-pointer hover:text-textColor justify-center hover:border-textColor">
          {uploading ? (
            <div className="border-whiteSmoke h-10 w-10 animate-spin rounded-full border-[5px] border-t-primary" />
          ) : (
            <div className="flex flex-col items-center">
              <PiUpload size={30} />
              <span className="mt-2 text-xs">Select a file</span>
              <input
                type="file"
                className="hidden"
                accept={accept}
                onChange={(e) => uploadFileChange(e)}
              />
            </div>
          )}
        </label>
      )}
      {upFile && (
        <div className="w-[180px] h-[180px] items-center bg-white text-grayMedium  uppercase border border-dashed border-grayMedium cursor-pointer justify-center rounded-md  relative">
          <div
            className="absolute right-0 bottom-0 bg-red w-8 h-8 text-white rounded-full text-base flex items-center justify-center shadow-md z-10"
            onClick={() => deleteFile()}
          >
            <AiOutlineDelete size={20} />
          </div>
          <Iframe
            url={rootImagePath("uploads/local/unknown_20240502213353.pdf")}
            className="w-full h-full rounded-md"
            display="initial"
            scrolling="no"
            position="relative"
            overflow="hidden"
          />
        </div>
      )}
    </div>
  );
};
