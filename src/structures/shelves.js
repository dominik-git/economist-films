export type ThumbnailStructure = {
  url: string,
};

export type ItemsStructure = {
  title: string,
  thumbnail:ThumbnailStructure[],
};

export type ShelvesStructure = {
  id: number,
  title: string,
  items: ItemsStructure[],
};

export type DataStructure = {
  shelves: ShelvesStructure[],
};
