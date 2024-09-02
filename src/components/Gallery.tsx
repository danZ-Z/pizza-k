import { GALLERY } from "constants/gallery";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SectionDivider from "./SectionDivider";
import { Slide } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div className="bg-zinc-50">
      <MaxWidthWrapper>
        <Slide triggerOnce={true} direction="left">
          <div id="gallery" className="pb-20">
            <h2 className="font-semibold uppercase text-7xl rajdhani-bold text-center py-10">
              Galéria
            </h2>
            <div className="flex justify-center">
              <Carousel>
                <CarouselContent className="text-center">
                  <CarouselItem>
                    <img
                      src={GALLERY[0]}
                      alt={GALLERY[0]}
                      className="border border-red-400"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={GALLERY[1]}
                      alt={GALLERY[1]}
                      className="border border-red-400"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={GALLERY[2]}
                      alt={GALLERY[2]}
                      className="border border-red-400"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </Slide>
      </MaxWidthWrapper>
      <SectionDivider />
    </div>
  );
};

export default Gallery;
