import { useState } from "react";

function PDFUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [resultText, setResultText] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload and API call
  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setResultText("Uploading...");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/upload_pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setResultText(data.text || "No text found.");
    } catch (error) {
      setResultText("Error: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">PDF Uploader</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload PDF"}
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Extracted Text:</h3>
        <pre className="bg-gray-100 p-4 rounded max-h-80 overflow-auto text-sm">
          {resultText}
        </pre>
      </div>
    </div>
  );
}

export default PDFUploader;
