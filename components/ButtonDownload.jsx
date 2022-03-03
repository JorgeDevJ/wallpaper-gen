import { ImageDownloader } from "@samvera/image-downloader";
const ButtonDownload = ({ url_image, user, id_image }) => {
  return (
    <ImageDownloader
      imageUrl={url_image}
      imageTitle={`${user}_${id_image}_unsplash`}
      iconColor={"#fff"}
      className="button"
    >
      Download image in full HD
    </ImageDownloader>
  );
};

export default ButtonDownload;
