"use client";

// components/FileUpload.tsx
import { useDropzone } from "react-dropzone";
import { setFile } from "@/store/file";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

const FileUpload = () => {
  //const dispatch = useDispatch<AppDispatch>(); //Define dispatch

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        handleFileRead(file);
      }
    },
  });

  const handleFileRead = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      try {
        const parsedData = reader.result as string;
        //dispatch(setFile(parsedData));
        sessionStorage.setItem("file-stream", parsedData);
      } catch (error) {
        console.error("Invalid JSON file", error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
        }}
        className="file-input"
      >
        <input {...getInputProps()} />
        <p>Drag & drop a JSON file here, or click to select a file</p>
      </div>
    </div>
  );
};

export default FileUpload;
