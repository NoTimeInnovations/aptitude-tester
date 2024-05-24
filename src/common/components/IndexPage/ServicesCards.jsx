import Image from "next/image";
import React from "react";

var count = 0;

const services = [
  " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
];
function getSrc() {
  count++;
  return `/media/img/IndexPage/ServiceOffers${count}.svg`;
}
export default function ServicesCards() {
  count = 0;
  return (
    <div className="grid md:grid-cols-2 gap-y-12 gap-x-28 px-[10%] text-white">
      {services.map((service) => (
        <div
          key={service}
          className=" items-center bg-[#040269E5] rounded-2xl pt-8 p-6 md:p-12"
        >
          <Image className="w-full" src={getSrc()} width={100} height={100} />
          <br />

          {service}
          <br />
          <br />
          <button type="button" className="w-full bg-[#FFFFFF1A] p-3 mt-3">
            Get it now
          </button>
        </div>
      ))}
    </div>
  );
}
