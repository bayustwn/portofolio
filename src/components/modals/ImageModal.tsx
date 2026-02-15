import { useCallback, useEffect, useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const ImageModal = ({ isOpen, imageSrc, onClose }: ImageModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ease-in-out ${isAnimating
        ? 'bg-black/80 backdrop-blur-sm opacity-100'
        : 'bg-black/0 backdrop-blur-none opacity-0'
        }`}
      onClick={handleClose}
    >
      <div className={`relative w-full h-full flex items-center justify-center transition-all duration-200 ease-out ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
        <button
          onClick={handleClose}
          className={`absolute top-4 cursor-pointer right-4 text-white hover:text-gray-300 transition-all duration-200 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 hover:scale-110 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
        >
          ✕
        </button>
        <div className="w-full h-full overflow-auto flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Preview"
            className={`max-w-full max-h-full object-contain rounded-lg transition-all duration-300 ease-out ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 