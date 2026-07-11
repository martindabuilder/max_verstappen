/*All the photos and details for the photos in the reusable scroll section
contains the logic for the images for the 1st, 2nd and 3rd scroll sections*/

/*SC 1*/
import img1 from "../assets/images/WDCScrollGallery/img1.jpg";
import img2 from "../assets/images/WDCScrollGallery/img2.jpg";
import img3 from "../assets/images/WDCScrollGallery/img3.jpg";
import img4 from "../assets/images/WDCScrollGallery/img4.jpg";

/*SC 2*/
import img5 from "../assets/images/WinsScrollGallery/img1.jpg";
import img6 from "../assets/images/WinsScrollGallery/img2.jpg";
import img7 from "../assets/images/WinsScrollGallery/img3.jpg";
import img8 from "../assets/images/WinsScrollGallery/img4.jpg";
import img9 from "../assets/images/WinsScrollGallery/img5.jpg";

/*SC 3*/



export const scrollGallery1 = {
    images: [
        { id: 1, src: img1, label: "text 1", size: "md", column: "left", labelPosition: "bottom"},
        { id: 2, src: img2, label: "text 2", size: "sm", column: "center", labelPosition: "top"},
        { id: 3, src: img3, label: "text 3", size: "md", column: "right", labelPosition: "bottom"},
        { id: 4, src: img4, label: "text 4", size: "md", column: "left", labelPosition: "top"},
    ],
};

export const scrollGallery2 = {
    images: [
        { id: 1, src: img5, label: "text 1", size: "md", column: "left", labelPosition: "bottom"},
        { id: 2, src: img6, label: "text 2", size: "sm", column: "center", labelPosition: "top"},
        { id: 3, src: img7, label: "text 3", size: "md", column: "right", labelPosition: "bottom"},
        { id: 4, src: img8, label: "text 4", size: "md", column: "left", labelPosition: "top"},
        { id: 5, src: img9, label: "text 5", size: "md", column: "left", labelPosition: "top"},

    ],
};

export const scrollGallery3 = {};