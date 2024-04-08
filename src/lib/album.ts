import data from "@/data/albums.json";

export type TPhoto = {
  id: string;
  src: string;
  alt: string;
};

export type TAlbum = {
  id: string;
  name: string;
  description: string;
  cover: TPhoto;
};

export const getAlbumById = (id: string) => {
  return data.find((album) => album.id === id);
};

export const getAlbumCoverById = (id: string) => {
  return data.find((album) => album.id === id)?.cover;
};

export const getAlbums = () => {
  return data.map(({ id, name, description, cover }) => ({ id, name, description, ...cover }));
};
