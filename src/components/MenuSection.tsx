import React from "react";

interface MenuSectionProps {
  imageSrc: string;
  heading: string;
  items: readonly {
    heading: string;
    postHeading: string;
    description: string;
  }[];
  gridCols?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  imageSrc,
  heading,
  items,
  gridCols = "md:grid-cols-2",
}) => {
  return (
      <div className="flex flex-col items-center text-center w-full">
        <img src={imageSrc} alt={heading} className="w-[35rem] py-5 h-auto" />
        <h2 className="font-semibold uppercase text-7xl rajdhani-bold pb-5">
          {heading}
        </h2>

        <div className={`grid grid-cols-1 gap-4 ${gridCols} w-[90%] md:w-full`}>
          {items.map((item) => (
            <div
              key={item.heading}
              className="p-4 border border-gray-300 bg-white rounded-lg"
            >
              <h3 className="text-2xl rajdhani-bold">{item.heading}</h3>
              <p className="text-lg text-gray-600 rajdhani-medium">
                {item.postHeading}
              </p>
              <p className="text-sm text-gray-500 rajdhani-regular">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default MenuSection;
