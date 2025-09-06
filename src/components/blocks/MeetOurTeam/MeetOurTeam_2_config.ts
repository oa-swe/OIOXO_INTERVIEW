import { BlockConfig } from "../types/Config";
import { ElementType } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const meetourteam_2_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.ABOUT_US],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "MeetOurTeam Container",
      },
      meetourteamMainContainer: {
        background_color: "white",
      },
    },

    meetourteamTitleSection: {
      sectionInfo: {
        sectionTitle: "MeetOurTeam player",
        orderPlacement: 0,
      },
      meetourteamTitle: {
        id: "meetourteam_title",
        name: "Title",
        text: "Meet Our Team",
        elementType: ElementType.HEADING,
        render: true,
        color: "#252B42",
      },
      meetourteamDescription: {
        id: "meetourteam_description",
        name: "Description",
        isRichText: true,
        elementType: ElementType.PARAGRAPH,
        render: true,
        text: `Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics`,
        color: "#737373",
      },
    },
    meetourteamMemberInfoSection: {
      sectionInfo: {
        sectionTitle: "Member info",
      },
      meetourteamMemberList: {
        id: "meetourteam_member_list",
        name: "Members List Info",
        render: true,
        elementType: ElementType.ITEMS_ARRAY,
        children: [
          {
            image: {
              name: "Member Image",
              img_src: "/blocks/images/team-1-user-1.jpg",
            },
            username: {
              name: "Member fullname",
              text: "Username",
              color: "#252b42",
              class: "username",
            },
            job_title: {
              name: "Member job title",
              text: "Profession",
              color: "#737373",
              class: "job-title",
            },
            meetourteamMemberSocialLinks: {
              id: "meetourteam_member_social_links_id",
              name: "Member Social Links",
              elementType: ElementType.ICONS_ARRAY,
              render: true,
              children: [
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-facebook",
                  icon_src: "/blocks/images/facebook_icon.png",
                  background_color: "white",
                },
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-linkedin-in",
                  icon_src: "/blocks/images/linkedin_icon.png",
                  background_color: "white",
                },
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-twitter",
                  icon_src: "/blocks/images/twitter_icon.png",
                  background_color: "white",
                },
              ],
            },
          },
          {
            image: {
              name: "Member Image",
              img_src: "/blocks/images/team-1-user-2.jpg",
            },
            username: {
              name: "Member fullname",
              text: "Username",
              color: "#252b42",
              class: "username",
            },
            job_title: {
              name: "Member job title",
              text: "Profession",
              color: "#737373",
              class: "job-title",
            },
            meetourteamMemberSocialLinks: {
              id: "meetourteam_member_social_links_id",
              name: "Member Social Links",
              elementType: ElementType.ICONS_ARRAY,
              render: true,
              children: [
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-facebook",
                  icon_src: "/blocks/images/facebook_icon.png",
                  background_color: "white",
                },
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-linkedin-in",
                  icon_src: "/blocks/images/linkedin_icon.png",
                  background_color: "white",
                },
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-twitter",
                  icon_src: "/blocks/images/twitter_icon.png",
                  background_color: "white",
                },
              ],
            },
          },
          {
            image: {
              name: "Member Image",
              img_src: "/blocks/images/team-1-user-3.jpg",
            },
            username: {
              name: "Member fullname",
              text: "Username",
              color: "#252b42",
              class: "username",
            },
            job_title: {
              name: "Member job title",
              text: "Profession",
              color: "#737373",
              class: "job-title",
            },
            meetourteamMemberSocialLinks: {
              id: "meetourteam_member_social_links_id",
              name: "Member Social Links",
              render: true,
              elementType: ElementType.ICONS_ARRAY,
              children: [
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-facebook",
                  background_color: "white",
                },
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-linkedin-in",
                  background_color: "white",
                },
                {
                  color: "#23A6F0",
                  class: "fa-brands fa-twitter",
                  background_color: "white",
                },
              ],
            },
          },
        ],
      },
    },
  },
};
