import { ItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, name }) => {
  return <ItemImage src={url} alt={name} loading="lazy" />;
};
