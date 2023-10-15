import React, { useRef } from 'react';

interface DragAndDropProps {
  onDrop: (files: FileList) => void;
  children: React.ReactNode;
}

function DragAndDrop({ onDrop, children }: DragAndDropProps) {
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.add('active');
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove('active');
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove('active');
    }

    const files = e.dataTransfer.files;
    onDrop(files);
  };

  return (
    <div
      ref={dropAreaRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="drop-area"
    >
      {children}
    </div>
  );
}

export default DragAndDrop;
