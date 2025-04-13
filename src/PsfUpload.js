import React, { useState } from "react";
import axios from "axios"; // 用来发送 HTTP 请求

const PdfUpload = () => {
  const [file, setFile] = useState(null);  // 用于存储上传的文件
  const [textPreview, setTextPreview] = useState("");  // 用于展示返回的文本

  // 处理文件上传
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // 上传文件到后端 API 并显示返回结果
  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);  // 将文件添加到 formData

    try {
      // 发送 POST 请求到 FastAPI 的 '/text/extract' 接口
      const response = await axios.post("http://127.0.0.1:8000/text/extract", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // 将返回的文本预览设置到状态
      setTextPreview(response.data.text_preview);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h2>Upload PDF to Extract Text</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      <h3>Text Preview:</h3>
      <p>{textPreview}</p>
    </div>
  );
};

export default PdfUpload;
