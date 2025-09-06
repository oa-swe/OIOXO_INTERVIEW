import { BlockConfig } from "../types/Config";
import { SectionHeader } from "../common/Section/SectionHeader";
import { TeamGrid } from "../common/Grid/TeamGridCards";

export function Ourteam1({ config }: { config: BlockConfig }) {
  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.rightSection?.ourteamMainContainer?.background_color ??
      "white",
  };

  // Prepare team members data
  const teamMembers = [0, 1, 2, 3, 4, 5, 6, 7].map((personIndex) => {
    const fullName =
      config?.contents?.rightSection?.[`ourteamPerson_${personIndex}_Fullname`];
    const image =
      config?.contents?.rightSection?.[`ourteamPerson_${personIndex}_Image`];

    const socialIcons = [0, 1, 2].map((iconIndex) => ({
      ...config?.contents?.rightSection?.[
        `ourteamPerson_${personIndex}_Icon_${iconIndex}`
      ],
      render:
        config?.contents?.rightSection?.[
          `ourteamPerson_${personIndex}_Icon_${iconIndex}`
        ]?.render,
    }));

    return {
      id: `person-${personIndex}`,
      image: {
        id: image?.id,
        img_src: image?.img_src,
        color: image?.color,
        alt: fullName?.text,
        render: image?.render,
      },
      fullName: {
        id: fullName?.id,
        text: fullName?.text,
        color: fullName?.color,
        render: fullName?.render,
      },
      jobTitle: {
        id: config?.contents?.rightSection?.[
          `ourteamPerson_${personIndex}_JobTitle`
        ]?.id,
        text: config?.contents?.rightSection?.[
          `ourteamPerson_${personIndex}_JobTitle`
        ]?.text,
        color:
          config?.contents?.rightSection?.[
            `ourteamPerson_${personIndex}_JobTitle`
          ]?.color,
        render:
          config?.contents?.rightSection?.[
            `ourteamPerson_${personIndex}_JobTitle`
          ]?.render,
      },
      description: {
        id: config?.contents?.rightSection?.[
          `ourteamPerson_${personIndex}_Desc`
        ]?.id,
        text: config?.contents?.rightSection?.[
          `ourteamPerson_${personIndex}_Desc`
        ]?.text,
        color:
          config?.contents?.rightSection?.[`ourteamPerson_${personIndex}_Desc`]
            ?.color,
        render:
          config?.contents?.rightSection?.[`ourteamPerson_${personIndex}_Desc`]
            ?.render,
      },
      socialIcons,
      render:
        image?.render ||
        fullName?.render ||
        config?.contents?.rightSection?.[
          `ourteamPerson_${personIndex}_JobTitle`
        ]?.render ||
        config?.contents?.rightSection?.[`ourteamPerson_${personIndex}_Desc`]
          ?.render ||
        socialIcons.some((icon) => icon.render),
    };
  });

  return (
    <>
      <div className="ourteam-main-container py-5" style={mainContainerStyle}>
        <div className="container px-4">
          <SectionHeader
            upTitle={{
              id: config?.contents?.rightSection?.ourteamUpTitle?.id,
              text: config?.contents?.rightSection?.ourteamUpTitle?.text,
              color: config?.contents?.rightSection?.ourteamUpTitle?.color,
              render: config?.contents?.rightSection?.ourteamUpTitle?.render,
            }}
            mainTitle={{
              id: config?.contents?.rightSection?.ourteamMainTitle?.id,
              text: config?.contents?.rightSection?.ourteamMainTitle?.text,
              color: config?.contents?.rightSection?.ourteamMainTitle?.color,
              render: config?.contents?.rightSection?.ourteamMainTitle?.render,
            }}
            description={{
              id: config?.contents?.rightSection?.ourteamDesc?.id,
              text: config?.contents?.rightSection?.ourteamDesc?.text,
              color: config?.contents?.rightSection?.ourteamDesc?.color,
              render: config?.contents?.rightSection?.ourteamDesc?.render,
            }}
            maxWidth="700px"
          />

          <TeamGrid members={teamMembers} />
        </div>

        <style>{`
          .transition-all {
            transition: transform 0.3s ease;
          }
          .transition-all:hover {
            transform: translateY(-5px);
          }
          .text-purple {
            color: purple !important;
          }
          .object-fit-cover {
            object-fit: cover;
            object-position: top;
          }
        `}</style>
      </div>
    </>
  );
}
