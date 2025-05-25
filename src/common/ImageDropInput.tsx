import { FC, useEffect, useRef, useState } from "react";
import { ImageDropInputProps } from "../interface/category";
export const ImageDropInput: FC<ImageDropInputProps> = ({
  isEdit,
  imageUrl,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleSetImageUrl = () => {
    if (isEdit && imageUrl) {
      setImage(imageUrl);
    }
  };

  const handleFile = (file: File | undefined) => {
    const maxFileSize = 30 * 1024 * 1024; // 30MB

    if (!file) {
      setErrorMessage("Incorrect file format.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Only image files are allowed.");
      return;
    }

    if (file.size > maxFileSize) {
      setErrorMessage("File is too large. Please upload a file under 30MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setErrorMessage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setErrorMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    handleSetImageUrl();
  }, [isEdit, imageUrl]);

  return (
    <div>
      <div
        className={`w-full h-[10.5rem] border-dashed border border-gray-400 rounded flex flex-col items-center justify-center transition-colors ${
          dragOver ? "border-primary-200 bg-gray-50" : "border-gray-400"
        }`}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {image ? (
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            <img
              src={image}
              alt="Uploaded preview"
              className="object-cover size-full"
            />
            <div className="absolute flex gap-2 top-2 right-2">
              <button
                type="button"
                className="px-3 py-1 text-xs font-normal bg-white border rounded text-primary-200 border-primary-150"
                onClick={handleButtonClick}
              >
                Change
              </button>
              <button
                type="button"
                className="px-3 py-1 text-xs font-normal text-red-100 bg-white border border-red-100 rounded"
                onClick={handleRemoveImage}
              >
                Remove
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              className="px-6 py-2 text-base font-normal leading-6 border text-primary-200 border-primary-150"
              onClick={handleButtonClick}
            >
              Add File
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <p className="text-sm leading-5 text-gray-100 font-base">
              Or drag and drop files
            </p>
          </div>
        )}
      </div>

      {errorMessage && (
        <p className="pt-2 text-sm font-normal leading-5 text-red-100">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
