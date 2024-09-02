import { Slide } from "react-awesome-reveal";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionDivider from "./SectionDivider";

const About = () => {
  return (
    <div className="bg-zinc-50">
      <MaxWidthWrapper>
        <Slide triggerOnce={true} direction="left" duration={700}>
          <div className="flex flex-col w-full lg:w-[50rem] px-20 pt-36 pb-[16.6rem] gap-6 text-center mx-auto">
            <h2 className="text-5xl font-semibold lg:text-7xl rajdhani-bold">
              O nás
            </h2>

            <div className="flex flex-col gap-6 text-xl lg:text-2xl rajdhani-medium">
              <p>
                Hlavnou filozofiou našej reštaurácie je pripraviť pre Vás
                príjemnú atmosféru s dobrým jedlom. Aby sme to dosiahli, snažíme
                sa jedlo pripravovať z kvalitných surovín z kvalitných zdrojov.
              </p>

              <p>
                K dobrému jedlu patrí aj dobré pivo ktoré ponúkame spolu s
                príjemnou atmosférou ktorú dopĺňa ochotná a rýchla obsluha.
              </p>

              <p>
                Chceme, aby od nás zákazník ochádzal s čo najlepším pocitom a
                aby Pizzeria Kokošovce nebola iba miestom na jedlo, ale aj
                miestom na strávenie príjemných chvíľ s rodinou či priateľmi.
              </p>
            </div>
          </div>
        </Slide>
      </MaxWidthWrapper>
      <SectionDivider />
    </div>
  );
};

export default About;
