import { useState } from 'react';

function File() {
  const [files, setFiles] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.items)
      .filter((item) => item.kind === 'file')
      .map((item) => item.getAsFile());

    validateAndAddFiles(droppedFiles);
  };

  const validateAndAddFiles = (droppedFiles) => {
    const allowedFormats = ['.stl', '.obj', '.f3d', '.dwg'];
    const maxSize = 250 * 1024 * 1024; // 250MB

    const validFiles = [];

    for (const file of droppedFiles) {
      if (file.size <= maxSize) {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (allowedFormats.includes(`.${fileExtension}`)) {
          validFiles.push(file);
        }
      }
    }

    setFiles([...files, ...validFiles]);
  };

  const handleFileRemove = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const renderFilePreviews = () => {
    return files.map((file, index) => (
      <div key={index} className="file-item">
        <div className="file-preview">
          {file.type.startsWith('image/') ? (
            <img src={URL.createObjectURL(file)} alt={file.name} />
          ) : (
            <div className="non-image-preview">
              <i className="fa fa-file" />
              <span>{file.name}</span>
            </div>
          )}
        </div>
        <button onClick={() => handleFileRemove(index)}>Remove</button>
      </div>
    ));
  };

  return (
    <>
      <div className="file-upload">
        <div
          className="drop-area text-center"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>Drag & Drop files here</p>
          <p className="">Supported formats: .STL , .OBJ , .f3d , .dwg ,   l Size less than 250MB</p>
        </div>
        <div className="file-list">{renderFilePreviews()}</div>
      </div>
    </>
  );
}

export default File;