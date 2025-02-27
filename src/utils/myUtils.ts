import type { ImageMetadata } from 'astro';

export const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpeg,jpg,png,gif}');

export function getImageObject(url) {
  try {
    return images[url]();
  } catch (error) {
    //throw new Error(`"${url}" does not exist in glob: "src/assets/images/*.{jpeg,jpg,png,gif}"`);
    console.log(`"${url}" does not exist in glob: "src/assets/images/*.{jpeg,jpg,png,gif}"`);
    return images["/src/assets/images/64.jpg"]();
  }
}

export function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export function getImageSrc(url) {
  return isValidURL(url) ? url : getImageObject(url);
}

export function getDateString(date) {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("ja-JP", options)
}

export function isNewPost(postDate, days) {
  const today = new Date();
  const daysAgoDate = new Date();
  daysAgoDate.setDate(today.getDate() - days);
  return (postDate >  daysAgoDate);
}
