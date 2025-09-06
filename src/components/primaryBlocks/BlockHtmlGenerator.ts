import { BlockConfig } from "@/components/primaryBlocks/types/Config";
import { BlockType } from "./types/Blocks";
import { Signup1 } from "./Signup/Signup_1";
import { Footer1 } from "./Footer/Footer1";
import { GetInTouch1 } from "./GetInTouch/GetInTouch_1";
import { Hero1 } from "./Hero/Hero_1";
import { Mayoralven1 } from "./Mayoralven/Mayoralven_1";
import { Ourteam1 } from "./OurTeam/Ourteam_1";
import { PricingPlan1 } from "./PricingPlan/PricingPlan_1";
import { Testimonial1 } from "./Testimonials/Testimonial_1";
import { Faq1 } from "./FAQ/Faq_1";
import { Header2 } from "./Header/Header_2";
import AddBlock from "./EditorModules/AddBlock/AddBlock";
import { ReactNode } from "react";
import { AboutUs2 } from "./AboutUs/AboutUs_2";
import { Counter2 } from "./Counter/Counter_2";
import { Video2 } from "./Video/Video_2";
import { MeetOurTeam2 } from "./MeetOurTeam/MeetOurTeam_2";
import { IconClients2 } from "./IconClients/IconClients_2";
import { WorkWithUs2 } from "./WorkWithUs/WorkWithUs_2";
import { HeroHeader1 } from "./HeroHeader/HeroHeader_1";
import { MayoralvenHeader1 } from "./MayoralvenHeader/MayoralvenHeader_1";
export class BlockHtmlGenerator {
  jsonConfig: BlockConfig;
  blockType: BlockType;

  constructor(jsonConfig: BlockConfig, blockType: BlockType) {
    this.jsonConfig = jsonConfig;
    this.blockType = blockType;
  }

  async Generate() {
    let html: ReactNode | undefined = "";
    switch (this.blockType) {
      case BlockType.ADD_BLOCK:
        html = await AddBlock({ onAddClick: () => {} });
        break;
      case BlockType.SIGNUP1:
        html = Signup1({ config: this.jsonConfig });
        break;
      case BlockType.FAQ1:
        html = Faq1({ config: this.jsonConfig });
        break;
      case BlockType.FOOTER1:
        html = Footer1({ config: this.jsonConfig });
        break;
      case BlockType.GET_IN_TOUCH1:
        html = GetInTouch1({ config: this.jsonConfig });
        break;
      case BlockType.HERO1:
        html = Hero1({ config: this.jsonConfig });
        break;
      case BlockType.MARYORALVEN1:
        html = Mayoralven1({ config: this.jsonConfig });
        break;
      case BlockType.OUR_TEAM1:
        html = Ourteam1({ config: this.jsonConfig });
        break;
      case BlockType.PRICING1:
        html = PricingPlan1({ config: this.jsonConfig });
        break;
      case BlockType.TESTIMONIAL1:
        html = Testimonial1({ config: this.jsonConfig });
        break;
      case BlockType.HEADER2:
        html = Header2({ config: this.jsonConfig });
        break;
      case BlockType.ABOUT_US2:
        html = AboutUs2({ config: this.jsonConfig });
        break;
      case BlockType.COUNTER2:
        html = Counter2({ config: this.jsonConfig });
        break;
      case BlockType.VIDEO2:
        html = Video2({ config: this.jsonConfig });
        break;
      case BlockType.MEETOURTEAM2:
        html = MeetOurTeam2({ config: this.jsonConfig });
        break;
      case BlockType.ICONCLINETS2:
        html = IconClients2({ config: this.jsonConfig });
        break;
      case BlockType.WORKWITHUS2:
        html = WorkWithUs2({ config: this.jsonConfig });
        break;
      case BlockType.HEROHEADER1:
        html = HeroHeader1({ config: this.jsonConfig });
        break;
      case BlockType.MAYORALVENHEADER1:
        html = MayoralvenHeader1({ config: this.jsonConfig });
        break;

      default:
        break;
    }

    return html;
  }
}
