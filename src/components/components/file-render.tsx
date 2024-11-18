"use client";
import { useEffect, useState } from "react";

const FileRenderer = () => {
  const [data, setData] = useState<string | null>(null);

  //Function to JSON data to arranged text
  const parseJsonToText = (data: object, depth: number): string => {
    let result = "",
      padding = "",
      name = "",
      i: number;

    for (i = 0; i < depth; i++) {
      padding += "--";
    }

    for (name in data) {
      if (typeof data[name as keyof typeof data] === "object") {
        result += `${padding} ${name}<br>${parseJsonToText(
          data[name as keyof typeof data],
          depth + 1
        )}`;
      } else
        result += `${padding} ${name}: ${data[name as keyof typeof data]}<br>`;
    }

    return result;
  };

  useEffect(() => {
    // This ensures that sessionStorage is accessed only on the client
    let stream = JSON.parse(sessionStorage.getItem("file-stream") as string);
    setData(parseJsonToText(stream, 0));
  }, []);

  return (
    <div className="white">
      {data
        ? data
            .split("<br>")
            .map((item, index) => <div key={`line-${index}`}>{item}</div>)
        : ""}
    </div>
  );
};

export default FileRenderer;
