import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryList, ImageItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageItem key={id}>
          <ImageGalleryItem url={webformatURL} name={tags} />
        </ImageItem>
      ))}
    </ImageGalleryList>
  );
};
