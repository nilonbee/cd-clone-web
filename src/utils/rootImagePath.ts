// image path set with ImageKit URL
export function rootImagePath(imagePath: string) {
  return `${process.env["NEXT_PUBLIC_IMAGE_STORE"]}/${imagePath}`;
}

export const ImageKitEndpoint = process.env["NEXT_PUBLIC_IMAGE_STORE"];
