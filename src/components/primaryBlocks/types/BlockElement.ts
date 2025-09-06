import { BubblePosition } from "./Bubble";
import {
  ElementPosition,
  ElementType,
  FlexDirection,
  ResponsiveVisibility,
} from "./Html";

export interface BlockElement {
  sectionTitle?: string;
  id?: string;
  name?: string;
  text?: string;
  elementType?: ElementType;
  responsiveVisibility?: ResponsiveVisibility;
  isRichText?: boolean;
  href?: string;
  render?: boolean;
  background_color?: string;
  background_image?: string;
  background?: string;
  color?: string;
  border_color?: string;
  border_bottom_color?: string;
  border_radius?: string;
  placeholder_text?: string;
  placeholder_color?: string;
  img_src?: string;
  icon_src?: string;
  class?: string;
  icon_color?: string;
  box_shadow_color?: string;
  bubble?: boolean;
  bubblePosition?: BubblePosition;
  orderPlacement?: number;
  children?: Array<any>;
  flex_direction?: FlexDirection;
  order?: string;
  position?: ElementPosition;
  src?: string;
}
