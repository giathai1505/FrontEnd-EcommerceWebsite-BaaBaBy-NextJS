import * as Fabric from "fabric";
import { IDemoPosition, IEmbroideryColor, IRectCanvas } from "@typings";

type _ITypeObject =
  | "UPPER_BACKGROUND"
  | "HEATHER_BACKGROUND"
  | "IMAGE"
  | "VECTOR"
  | "TEXT"
  | "TEXT_EMBROIDERY"
  | "EDIT_AREA_BORDER";

type _IOriginObject =
  | "BASIC_CLIPART"
  | "PRO_CLIPART"
  | "VECTOR_GRAPHIC"
  | "PREMIUM_IMAGE"
  | "TEXT"
  | "TEXT_EMBROIDERY";

export type _IBaseOptionObject = {
  zIndex: number;
  id: string;
  name: string;
  previewImage: string | undefined;
  price?: number;
  isStaticColor?: boolean;
  typeObject: _ITypeObject;
  originObject?: _IOriginObject;
  originHeight?: number;
  originWidth?: number;

  // To know that what color is using
  objectColor?: string;

  // For text-embroidery
  textEmbroideryProps?: {
    text: string;
    fontFamily: string;
    colorEmbroidery: IEmbroideryColor;
  };

  // TEXT
  objectFontFamily: {
    name: string;
    url: string;
  };

  // Width and height in real life (by inch)
  widthByInch?: number;
  heightByInch?: number;
};

declare module "fabric" {
  export namespace fabric {
    export type ITypeObject = _ITypeObject;
    export type IOriginObject = _IOriginObject;
    export type IBaseOptionObject = _IBaseOptionObject;
    export interface Object extends IBaseOptionObject {}

    export interface Canvas {
      INFINITY: number;
      maxZIndex: number;
      editArea: fabric.Object;

      // EditAreas
      setEditArea: (rect: Required<IRectCanvas>) => void;
      setShowBorderEditArea: (isShow: boolean, useRenderAll?: boolean) => void;

      // Backgrounds
      setUpperBackgroundURL: (src: string) => void;
      setUpperBackgroundImage: (image: fabric.Image) => void;
      setHeatherBackgroundURL: (imageURL: string) => void;

      // Images
      addImageURL: (
        imageURL: string,
        option?: Partial<IBaseOptionObject>,
      ) => void;

      addImageObject: (
        image: fabric.Object,
        option?: Partial<IBaseOptionObject>,
      ) => void;
      // addGroupObject: (object: fabric.Object) => void;
      addText: (
        textObject: fabric.Object,
        option?: Partial<IBaseOptionObject>,
      ) => void;
      addTextEmbroidery: (
        textImage: fabric.Image,
        option?: Partial<IBaseOptionObject>,
      ) => void;

      // Handle objects
      addObject: (
        object: fabric.Object,
        option?: Partial<IBaseOptionObject>,
      ) => void;
      sortObjects: () => void;
      findIndexOfObjectHasId: (id: string) => number | null;
      removeAllObjectsHasType: (typeObject: ITypeObject) => void;
      duplicateObject: (object: fabric.Object) => void;
      setActiveObjectHasId: (id: string) => void;
      lockObjectHasId: (id: string) => void;
      removeObjectHasId: (id: string) => void;
      unlockObjectHasId: (id: string) => void;
      hideObjectHasId: (id: string) => void;
      unhideObjectHasId: (id: string) => void;
      overwriteAllObjectZIndex: (listZIndex: number[]) => void;
      resetAll: () => void;

      // Exports
      exportBase64PNG: (scaleToWidth?: number | undefined) => Promise<string>;
      exportWholeCanvas: (scaleToWidth?: number | undefined) => Promise<string>;
      exportMainObjects: () => fabric.Object[];
      exportJSONObjects: () => object[];

      // Imports
      importObjects: (objects: fabric.Object[]) => void;

      // Other functions
      generateRandomPositionForObject: (object: fabric.Object) => void;
      update: () => void;

      // Renderer
      createUpperBackgroundImage: (
        src: string,
      ) => Promise<fabric.Image | undefined>;
      createHeatherBackgroundImage: (
        src: string,
      ) => Promise<fabric.Image | undefined>;
      createSideLayerImage: (
        src: string,
        position: IDemoPosition,
      ) => Promise<fabric.Image | undefined>;
    }
  }
}
