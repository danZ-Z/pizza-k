import MaxWidthWrapper from "./MaxWidthWrapper";
import { Facebook, Instagram } from "lucide-react";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="rajdhani-medium bg-white border-t">
      <MaxWidthWrapper>
        <Slide triggerOnce={true} direction="left">
          <div
            id="contact"
            className="flex flex-row justify-between lg:mx-40 rajdhani-medium text-md md:text-xl tracking-wide p-10 gap-3"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl md:text-3xl rajdhani-semibold mb-5">
                Kontakt
              </h2>

              <a
                href="https://www.google.com/maps/place/Pizz%C3%A9ria+a+Re%C5%A1taur%C3%A1cia+Koko%C5%A1ovce/@48.9456762,21.3370602,17z/data=!3m1!4b1!4m6!3m5!1s0x473eeb9c266e259f:0xbf67a00599380d61!8m2!3d48.9456727!4d21.3396405!16s%2Fg%2F11hzqd27ft?entry=ttu"
                className="hover:scale-105 transition duration-300"
                target="_blank"
              >
                Kokošovce 77, 082 52 Kokošovce
              </a>

              <a
                href="tel:0949271333"
                className="hover:scale-105 transition duration-300"
                target="_blank"
              >
                0949 271 333
              </a>

              <a
                href="mailto:pizzeriakokosovce@gmail.com"
                className="hover:scale-105 transition duration-300"
                target="_blank"
              >
                pizzeriakokosovce@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-2xl md:text-3xl rajdhani-semibold mb-5">
                Sledujte nás
              </h2>
              <div className="flex flex-row gap-2">
                <Facebook />
                <a
                  href="https://www.facebook.com/pizzeriaKokosovce"
                  className="hover:scale-105 transition duration-300"
                  target="_blank"
                >
                  Facebook
                </a>
              </div>

              <div className="flex flex-row gap-2">
                <Instagram />
                <a
                  href="https://www.instagram.com/restauracia_pizzeria_kokosovce/"
                  className="hover:scale-105 transition duration-300"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
