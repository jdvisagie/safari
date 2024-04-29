import Button from "../ui/Button";
import { useEffect, useState } from "react";
import styles from "./popularsafarilight.module.scss";

type PopularSafariProps = {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: string;
  classes?: string;
  pricing_pp?: string;
  currency?: string;
};

interface IImages {
  src: string;
  alt_description?: string;
}

const PopularSafariLight = ({
  category,
  title,
  full_description,
  short_description,
  pricing_pp,
  classes,
  currency,
}: PopularSafariProps) => {
  const [photos, setPhotos] = useState<IImages[]>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchPhotos = async (category: string) => {
      const result = await fetch(
        `${process.env.REACT_APP_API_URL}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&per_page=1&query=${category}&orientation=landscape`,
        {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      );

      result
        .json()
        .then((photos) => {
          let photosArray = photos.results;

          var pics = [];
          for (let i = 0; i < photosArray.length; i++) {
            pics.push(photosArray[i].urls.regular);
          }

          var images = pics.map(function (value) {
            return { alt_description: value, src: value };
          });
          setPhotos(images);
          setLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPhotos(category);
  }, [category]);

  return (
    <>
      {loaded ? (
        <div className={`${classes} mb-2`}>
          <div className={`${styles.card} flex-grow-1 m-1 rounded-4 border`}>
            {photos?.map((photo, index) => (
              <img srcSet={photo.src} key={index} alt="" />
            ))}
            <div className={`${styles.overlay} col-12 text-white`}>
              <div className={`${styles.carddetails} container`}>
                <div className={`${styles.cardrow}`}>
                  <div className="px-0">
                    <h3>{title}</h3>
                  </div>
                </div>

                <div className={`${styles.cardrow}`}>
                  <div className="col-lg-12 px-0">
                    <p>{short_description}</p>
                  </div>
                </div>

                <div className={`${styles.cardrow}`}>
                  <div className="col-lg-12 px-0">
                    <p>
                      From {currency}
                      {pricing_pp} per person sharing
                    </p>
                  </div>
                </div>

                <Button onClick={() => {}} className={`${styles.cardBtn} btn`}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PopularSafariLight;
