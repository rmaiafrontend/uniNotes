import React, { useRef } from 'react';
import './FileUpload.css';

function FileUpload({ onFileSelect }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onFileSelect({
          name: file.name,
          type: file.type,
          size: file.size,
          data: event.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="file-input"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="upload-button"
      >
        Anexar Arquivo
      </button>
    </div>
  );
}

export default FileUpload;