"use client";
import { useEffect, useState } from "react";

const FileRenderer = () => {
  const [data, setData] = useState<string | null>(null);

  //Function to JSON data to arranged text
  const parseJsonToText = (data: object) => {
    let result = "";
    let name = "";

    for (name in data) {
      result += `${name}:${data[name as keyof typeof data]}<br><br>`;
    }

    return result;
  };

  useEffect(() => {
    // This ensures that sessionStorage is accessed only on the client
    let stream = JSON.parse(sessionStorage.getItem("file-stream") as string);
    setData(parseJsonToText(stream));
  }, []);

  return <div className="white">{data ? data : ""}</div>;
};

export default FileRenderer;
