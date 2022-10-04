export interface IImageSizeInput {
  width?: number;
  height?: number | null;
}
export interface ICustomSizeImages {
  default?: string;
  small?: string;
  medium?: string;
  base64Image?: string;
}

export interface ICustomSizeImagesInput {
  small: IImageSizeInput;
  medium: IImageSizeInput;
}
