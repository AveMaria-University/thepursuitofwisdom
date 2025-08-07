'use client';

import { useState } from 'react';

interface DropboxVideoProps {
  dropboxUrl: string;
  title?: string;
  className?: string;
  thumbnailUrl?: string;
}

const DropboxVideo: React.FC<DropboxVideoProps> = ({ 
  dropboxUrl, 
  title = "Video", 
  className = "",
  thumbnailUrl
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convert Dropbox URL to direct link
  const getDirectUrl = (url: string) => {
    return url
      .replace('dl=0', 'dl=1')
      .concat(url.includes('?') ? '&raw=1' : '?raw=1');
  };

  const directUrl = getDirectUrl(dropboxUrl);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Video Thumbnail/Placeholder - Clickable */}
      <div 
        className={`relative cursor-pointer group ${className}`}
        onClick={openModal}
      >
        {thumbnailUrl ? (
          // Custom thumbnail
          <div className="relative w-full h-full">
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all rounded-2xl">
              <div className="w-24 h-24 bg-pursuit-gold bg-opacity-90 group-hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all">
                <div className="w-0 h-0 border-l-12 border-l-white border-y-10 border-y-transparent ml-1"></div>
              </div>
            </div>
          </div>
        ) : (
          // Default placeholder with play button
          <div className="w-full h-full bg-pursuit-navy rounded-2xl relative flex items-center justify-center group-hover:bg-opacity-90 transition-all">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-pursuit-gold group-hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all shadow-lg">
                <div className="w-0 h-0 border-l-12 border-l-white border-y-10 border-y-transparent ml-1"></div>
              </div>
              <span className="font-semibold text-xl">{title}</span>
              <div className="text-sm text-gray-300 mt-2">Click to Play</div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          {/* Modal Background - Click to close */}
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl max-w-4xl max-h-[90vh] w-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <video 
              controls 
              autoPlay
              preload="metadata"
              className="w-full h-auto max-h-[80vh]"
            >
              <source src={directUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Title */}
            {title && (
              <div className="bg-black text-white p-4 text-center">
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DropboxVideo;
