import axios from 'axios';

export const fetchImages = async (im, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${im}&page=${page}&key=38236497-e80cd9f896b908d0ed2815024&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
