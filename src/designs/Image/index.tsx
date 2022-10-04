import { useEffect, useRef, useState } from "react";
import { ImageContainer, ImageStyled } from "./styles";

const IMAGE_PLACEHOLDER = "/ingredient/images/product-placeholder.png";

interface IImageProps {
  className?: string;
  src: string;
  alt: string;
}

const ImageElement: React.FC<IImageProps> = ({ className, src, alt }) => {
  return (
    <ImageContainer className={className}>
      <LazyImage src={src} placeHolderImage={IMAGE_PLACEHOLDER} alt={alt} />
    </ImageContainer>
  );
};

interface ILazyImage extends IImageProps {
  src: string;
  placeHolderImage: string;
}

const LazyImage: React.FC<ILazyImage> = ({ src, alt, placeHolderImage }) => {
  const ref = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState(placeHolderImage);

  useEffect(() => {
    if (!ref.current) return;

    const image = new Image();
    image.src = src;

    image.onload = () => {
      setImage(src);
    };

    image.onerror = () => {
      setImage(placeHolderImage);
    };
  }, [ref]);

  return <ImageStyled src={image} alt={alt} ref={ref} />;
};

export default ImageElement;
