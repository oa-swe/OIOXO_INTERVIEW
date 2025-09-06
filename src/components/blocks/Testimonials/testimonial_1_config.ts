import { BlockConfig } from "../types/Config";
import { PossiblePages } from "../types/Pages";

const imageUrls = [
  `/blocks/images/testimonial_profile_1.jpeg`,
  `/blocks/images/testimonial_profile_3.jfif`,
  `/blocks/images/testimonial_profile_2.jfif`,
];

const clientNames = [`Jane Doe`, `Bessie Cooper`, `Robert Fox`];

const jobTitles = [
  `CEO, Example Company`,
  `Creative Director`,
  `UI/UX Designer`,
];

const getCardStar = (cardIndex: number, starIndex: number) => {
  return {
    id: `testimonial_card_${cardIndex}_client_star_${starIndex}_id`,
    name: `Star ${starIndex + 1} of Card ${cardIndex + 1}`,
    render: true,
    color: "orange",
    class: "bi-star-fill",
  };
};

const getTestimonialCard = (index: number) => {
  return {
    id: "testimonial_card_1_Clientid",
    render: true,
    background_color: "white",
    box_shadow_color: "rgba(0, 0, 0, 0.075)",
    stars: [
      getCardStar(index, 0),
      getCardStar(index, 1),
      getCardStar(index, 2),
      getCardStar(index, 3),
      getCardStar(index, 4),
    ],
    description: {
      id: `testimonial_card_${index}_client_desc_id`,
      render: true,
      text: `"Some quick example text to build on the card title and make up the bulk of the card's content."`,
      color: "#000000",
    },
    image: {
      id: `testimonial_card_${index}_client_image_id`,
      render: true,
      img_src: imageUrls[index],
    },
    name: {
      id: "testimonial_card_0_client_fullname_id",
      render: true,
      text: clientNames[index],
      color: "var(--bs-card-title-color)",
    },
    jobTitle: {
      id: `testimonial_card_${index}_client_job_title_id`,
      render: true,
      text: jobTitles[index],
      color: "rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))",
    },
    quote: {
      id: "testimonial_card_0_client_quote_id",
      render: true,
      color: "#dcd7d7",
      class: "bi bi-quote",
    },
  };
};

const getArrow = (direction: "left" | "right") => {
  return {
    id: `testimonial_${direction}_arrow_id`,
    render: true,
    class: `fa fa-arrow-${direction}`,
    color: "#8080c4",
    background_color: "white",
  };
};
export const testimonial_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.FAQ],
  contents: {
    rightSection: {
      sectionInfo: {
        sectionTitle: "All",
      },
      testimonialMainContainer: {
        background_color: "#f8fbfd",
      },
      testimonialMainTitle: {
        id: "testimonial_main_title_id",
        render: true,
        text: "Clients Testimonial",
        color: "#000000",
        background_color: "#00000000",
      },
      testimonialCards: {
        children: [
          getTestimonialCard(0),
          getTestimonialCard(1),
          getTestimonialCard(2),
        ],
      },
      testimonialLeftArrowButton: getArrow("left"),
      testimonialRightArrowButton: getArrow("right"),
      pricingplanLoadMoreButton: {
        id: "pricingplan_load_morebutton_id",
        render: true,
        text: "Load More",
        color: "rgb(13, 110, 253)",
        border_color: "rgb(13, 110, 253)",
        background_color: "transparent",
        border_radius: "0.375rem",
      },
    },
  },
};
