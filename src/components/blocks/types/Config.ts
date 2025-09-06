import { BlockElement } from "./BlockElement";
import { PossiblePages } from "./Pages";

export interface BlockSection {
  [key: string]: BlockElement;
}
export interface BlockConfig {
  possiblePages: Array<PossiblePages>;
  contents: {
    [key: string]: BlockSection;
  };
}
