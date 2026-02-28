import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  videoUrl?: string;
  productName: string;
}

export default function ProductGallery({
  images,
  videoUrl,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const totalItems = images.length + (videoUrl ? 1 : 0);

  const goToPrevious = () => {
    setShowVideo(false);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (activeIndex === images.length - 1 && videoUrl) {
      setShowVideo(true);
    } else {
      setShowVideo(false);
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const selectImage = (index: number) => {
    setShowVideo(false);
    setActiveIndex(index);
  };

  const selectVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="space-y-4">
      {/* Main Image/Video */}
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
        {showVideo && videoUrl ? (
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover"
            poster={images[0]}
          />
        ) : (
          <img
            src={images[activeIndex]}
            alt={`${productName} - Imagem ${activeIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}

        {/* Navigation Arrows */}
        {totalItems > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {totalItems > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`flex-shrink-0 w-16 h-20 overflow-hidden border-2 transition-colors ${
                !showVideo && activeIndex === index
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground"
              }`}
            >
              <img
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}

          {videoUrl && (
            <button
              onClick={selectVideo}
              className={`flex-shrink-0 w-16 h-20 overflow-hidden border-2 transition-colors bg-foreground/10 flex items-center justify-center ${
                showVideo
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground"
              }`}
            >
              <Play className="w-6 h-6 text-foreground" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
