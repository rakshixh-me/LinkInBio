export const resolveProfileImagePath = (imagePath) => {
  const imagesContext = require.context(
    "../assets/profileImage",
    false,
    /\.(png|jpe?g|svg|gif)$/i
  );

  const images = imagesContext.keys().map(imagesContext);

  if (imagePath && imagePath.startsWith("http")) {
    return imagePath;
  }

  if (!imagePath) {
    return images.length > 0 ? images[0] : "Please Provide Profile Image";
  }

  const matchingImages = images.filter((image) => {
    const fileName = image.split("/").pop().split(".")[0];
    return fileName === imagePath;
  });

  if (matchingImages.length > 0) {
    return matchingImages[0];
  }

  const specificImage = images.find((image) => image.includes(imagePath));
  if (specificImage) {
    return specificImage;
  }

  return "Please Provide Profile Image";
};
