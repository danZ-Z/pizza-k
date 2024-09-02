import MaxWidthWrapper from "./MaxWidthWrapper";
import "../index.css";
import {
  DESSERTS,
  HOT_FOOD,
  PIZZA,
  PIZZA_TOPINGS,
  SPECIALS,
  TOPPINGS_SIDES,
} from "../constants/menu";
import MenuSection from "./MenuSection";
import SectionDivider from "./SectionDivider";
import { Slide } from "react-awesome-reveal";

const Menu = () => {
  return (
    <div className="bg-zinc-50">
      <MaxWidthWrapper>
        <div id="menu" className="flex flex-col items-center text-center pb-40">
          <Slide triggerOnce={true} direction="up" delay={100}>
            <MenuSection
              imageSrc="/arrow_for_menu.png"
              heading="Pizza"
              items={PIZZA}
              gridCols="md:grid-cols-2"
            />
          </Slide>

          <Slide triggerOnce={true} direction="up" delay={100}>
            <MenuSection
              imageSrc="/arrow_for_menu.png"
              heading="Dodatky na pizzu"
              items={PIZZA_TOPINGS}
              gridCols="md:grid-cols-2"
            />
          </Slide>

          <Slide triggerOnce={true} direction="up" delay={100}>
            <MenuSection
              imageSrc="/arrow_for_menu.png"
              heading="Špeciality podniku"
              items={SPECIALS}
              gridCols="md:grid-cols-2"
            />
          </Slide>
          <Slide triggerOnce={true} direction="up" delay={100}>
            <MenuSection
              imageSrc="/arrow_for_menu.png"
              heading="Teplé jedlá"
              items={HOT_FOOD}
              gridCols="md:grid-cols-2"
            />
          </Slide>

          <Slide triggerOnce={true} direction="left">
            <MenuSection
              imageSrc="/arrow_for_menu.png"
              heading="Dezerty"
              items={DESSERTS}
              gridCols="md:grid-cols-2"
            />
          </Slide>

          <Slide triggerOnce={true} direction="right">
            <MenuSection
              imageSrc="/arrow_for_menu.png"
              heading="Omáčky a prílohy"
              items={TOPPINGS_SIDES}
              gridCols="md:grid-cols-2 lg:grid-cols-3"
            />
          </Slide>
        </div>
      </MaxWidthWrapper>

      <SectionDivider />
    </div>
  );
};

export default Menu;
