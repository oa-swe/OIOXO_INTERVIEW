import { BubblePosition } from "../types/Bubble";
import { BlockConfig } from "../types/Config";
import { PossiblePages } from "../types/Pages";

export const faq_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.FAQ],
  contents: {
    // Main Container Section
    containerSection: {
      sectionInfo: {
        sectionTitle: "FAQ Container",
      },
      faqMainContainer: {
        background_color: "white",
      },
    },

    // Image Section
    imageSection: {
      sectionInfo: {
        sectionTitle: "FAQ Image",
      },
      faqMainImage: {
        id: "faq_main_image_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        img_src: "/blocks/images/FAQ_Image.png",
      },
    },

    // Header Section
    headerSection: {
      sectionInfo: {
        sectionTitle: "FAQ Header",
      },
      faqTitle: {
        id: "faq_title_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "سوالات متداول",
        color: "#000000",
      },
    },

    // Accordion Settings Section
    accordionSettingsSection: {
      sectionInfo: {
        sectionTitle: "FAQ Accordion Settings",
      },
      faqQuestionMinusPluseColor: {
        color: "0c63e4",
      },
    },

    // Questions Section (maintaining original structure)
    questionsSection: {
      sectionInfo: {
        sectionTitle: "FAQ Questions",
      },
      faqQuestion_0: {
        id: "faq_question_0_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "چطور یک اکانت بسازیم?",
        color: "#000000",
        border_color: "#dee2e6",
      },
      faqAnswer_0: {
        id: "faq_answer_0_id",
        bubble: true,
        isRichText: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: `To create an account, click on the "Sign Up" button at the top right corner of the page. Fill in your details including name, email address, and create a password. Once submitted, you'll receive a confirmation email to verify your account.`,
        color: "grey",
      },
      faqQuestion_1: {
        id: "faq_question_1_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "What payment methods do you accept?",
        color: "#000000",
        border_color: "#dee2e6",
      },
      faqAnswer_1: {
        id: "faq_answer_1_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: `We accept all major credit cards including Visa, MasterCard, and American Express. We also support PayPal and bank transfers for certain services. All transactions are securely processed through our payment gateway.`,
        color: "grey",
      },
      faqQuestion_2: {
        id: "faq_question_2_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "How can I reset my password?",
        color: "#000000",
        border_color: "#dee2e6",
      },
      faqAnswer_2: {
        id: "faq_answer_2_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: `If you've forgotten your password, click on the "Forgot Password" link on the login page. Enter your registered email address and we'll send you a link to reset your password. The link will expire in 24 hours for security reasons.`,
        color: "grey",
      },
      faqQuestion_3: {
        id: "faq_question_3_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "What is your refund policy?",
        color: "#000000",
        border_color: "#dee2e6",
      },
      faqAnswer_3: {
        id: "faq_answer_3_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: `We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase, you can request a refund within 30 days of your purchase date. Please contact our support team with your order details to initiate the refund process.`,
        color: "grey",
      },
    },
  },
};
