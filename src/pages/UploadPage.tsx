import { useState, DragEvent } from 'react';
import { UploadCloud } from 'lucide-react';

const UploadPage = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop logic here
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Upload Your Music</h1>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 md:p-16 text-center cursor-pointer transition-colors ${isDragOver ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/20'}`}
        >
          <input type="file" id="file-input" multiple accept=".mp3,.wav,.flac,.m4a" className="hidden" />
          <div className="flex flex-col items-center text-neutral-400">
            <UploadCloud className="mb-4" size={48} strokeWidth={1.5} />
            <p className="text-lg font-semibold">Drag & drop files here</p>
            <p className="text-neutral-500">or</p>
            <button className="mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-5 rounded-lg transition-transform hover:scale-105">Browse Files</button>
            <p className="text-xs text-neutral-600 mt-4">Supported formats: MP3, WAV, FLAC, M4A</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadPage;