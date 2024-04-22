// image path set with ImageKit URL
export function rootImagePath(imagePath: string) {
  return `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${imagePath}`;
}
