export enum ImageUrlType {
  PNG = "image/png",
  SVG = "image/svg+xml",
}

export interface ImageUrl {
  alt?: string;
  url: string;
  type: ImageUrlType;
}

//NOTE: some string types, such as brand, must be an enum in the future
export interface Phone {
  image: ImageUrl;
  name: string;
  description: string;
  brand: string;
  price: number;
  color: string;
  colorDescription: string;
}
