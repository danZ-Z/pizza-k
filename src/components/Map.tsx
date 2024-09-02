import MaxWidthWrapper from "./MaxWidthWrapper";
import { Slide } from "react-awesome-reveal";

const Map = () => {
  return (
    <div className="bg-zinc-50 rajdhani-medium">
      <MaxWidthWrapper>
        <Slide triggerOnce={true} direction="right">
          <div id="order" className="flex flex-col items-center pt-10">
            <img
              src="/Logo.png"
              alt="logo"
              className="h-72 w-h-72 sm:h-[25rem] sm:w-[25rem] md:h-[30rem] md:w-[30rem] lg:h-[35rem] lg:w-[35rem]"
            />
            <h2 className="rajdhani-bold text-3xl lg:text-4xl pt-4 text-center">
              Pizzeriu Kokošovce nájdete na adrese Kokošovce 77
            </h2>
            <h2 className="bg-red-600 text-center text-white rounded-lg text-md sm:text-lg md:text-xl lg:text-3xl tracking-wider rajdhani-semibold upp p-2 sm:p-3 md:p-4 lg:p-5 mt-5">
              Objednaj si na čísle 0949 271 333 alebo priamo v prevádzke
            </h2>
            <p className="text-lg text-gray-500 mt-5 text-center tracking-wide">
              Posledné objednávky na donášku 30 min pred zatvorením prevádzky
            </p>
          </div>
        </Slide>
      </MaxWidthWrapper>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.4112904793596!2d21.337206476850326!3d48.945653894561126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eebf2ad11420f%3A0xf2fe07e563d5232c!2sKoko%C5%A1ovce%2077%2C%20082%2052%20Koko%C5%A1ovce!5e0!3m2!1ssk!2ssk!4v1724316185523!5m2!1ssk!2ssk"
        width="100%"
        height="400"
        loading="lazy"
        className="mt-20"
      ></iframe>
    </div>
  );
};

export default Map;
