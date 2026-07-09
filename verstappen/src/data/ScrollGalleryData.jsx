/*All the photos and details for the photos in the reusable scroll section
contains the logic for the images for the 1st, 2nd and 3rd scroll sections*/

/*SC 1*/
import img1 from "../assets/images/WDCSCrollGallery/img1.jpg";
import img2 from "../assets/images/WDCSCrollGallery/img2.jpg";
import img3 from "../assets/images/WDCSCrollGallery/img3.jpg";

/*SC 2*/

/*SC 3*/

export const scrollGallery1 = {
    images: [
        { id: 1, src: img1, alt: "Bahrain 2021", size: "md" },
        { id: 2, src: img2, alt: "Bahrain 2021", size: "lg" },
        { id: 3, src: img3, alt: "Bahrain 2021", size: "sm" },
    ],
};

export const scrollGallery2 = {
    title: "Winning streak",
    images: [img1, img2, img3]
}

export const scrollGallery3 = {
    title: "Podium moments",
    images: [img1, img2, img3]
}
