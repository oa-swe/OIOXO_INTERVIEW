import "@/../public/blocks/bootstrap/css/bootstrap.min.css";
import "@/../public/blocks/fontawesome/css/all.min.css";
import "@/../public/blocks/bootstrap-icons/font/bootstrap-icons.min.css";
import { AboutUs2 } from "@/components/primaryBlocks/AboutUs/AboutUs_2";
import { aboutus_2_config } from "@/components/primaryBlocks/AboutUs/AboutUs_2_config";
import { Header2 } from "@/components/primaryBlocks/Header/Header_2";
import { header_2_config } from "@/components/primaryBlocks/Header/Header_2_config";
import { HeroHeader1 } from "@/components/primaryBlocks/HeroHeader/HeroHeader_1";
import { heroheader_config } from "@/components/primaryBlocks/HeroHeader/HeroHeader_1_config";
import { Testimonial1 } from "@/components/primaryBlocks/Testimonials/Testimonial_1";
import { testimonial_config } from "@/components/primaryBlocks/Testimonials/testimonial_1_config";
import { WorkWithUs2 } from "@/components/primaryBlocks/WorkWithUs/WorkWithUs_2";
import { workwithus_2_config } from "@/components/primaryBlocks/WorkWithUs/WorkWithUs_2_config";
import { Footer1 } from "@/components/primaryBlocks/Footer/Footer1";
import { footer_config } from "@/components/primaryBlocks/Footer/footer_1_config";
import { MeetOurTeam2 } from "@/components/primaryBlocks/MeetOurTeam/MeetOurTeam_2";
import { meetourteam_2_config } from "@/components/primaryBlocks/MeetOurTeam/MeetOurTeam_2_config";
/**
 *
 * برای کانفیگ ها ، کانفیگ تستیمونیالز را به عنوان نمونه تمیز در نظر بگیرید
 * سایر کانفیگ ها تمیز نیستند
 */
export default function SignupPage() {
  return (
    <div style={{ backgroundColor: "#28293E" }}>
      {/* Load your blocks here */}
      <HeroHeader1 config={heroheader_config} />
      <Testimonial1 config={testimonial_config} />
      <WorkWithUs2 config={workwithus_2_config} />
      <AboutUs2 config={aboutus_2_config} />
      <MeetOurTeam2 config={meetourteam_2_config} />
      <Footer1 config={footer_config} />
    </div>
  );
}
