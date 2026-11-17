import React from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { ASSETS } from "@/data/assets";
import { cn } from "@/lib/utils";

export interface ValuePropositionProps {
  className?: string;
}

const [waving, group, hoodie, windowPair, studying, graduate, desk, video, yellow, hijab] =
  ASSETS.gallery;

const photos: Array<{ src: string; alt: string; className: string; position?: string }> = [
  {
    src: waving,
    alt: "Student waving during an online class",
    className: "left-[6.8%] top-[16.2%] h-[31.3%] w-[20%]",
    position: "object-[68%_center]",
  },
  {
    src: group,
    alt: "Group learning together around a laptop",
    className: "left-0 top-[49.7%] h-[41.8%] w-[26.8%]",
  },
  {
    src: hoodie,
    alt: "Student reading in a library",
    className: "left-[29.7%] top-0 h-[34.5%] w-[19.7%]",
  },
  {
    src: windowPair,
    alt: "Teacher and student by a window",
    className: "left-[29.7%] top-[36.7%] h-[34.9%] w-[19.7%]",
  },
  {
    src: studying,
    alt: "Student studying at a desk",
    className: "left-[29.7%] top-[73.7%] h-[26.3%] w-[19.7%]",
  },
  {
    src: graduate,
    alt: "Graduate holding a diploma",
    className: "left-[52.5%] top-[4.3%] h-[25.2%] w-[19.7%]",
  },
  {
    src: desk,
    alt: "Student working at a laptop",
    className: "left-[52.5%] top-[31.6%] h-[28.2%] w-[19.7%]",
  },
  {
    src: video,
    alt: "Student in a video lesson",
    className: "left-[52.5%] top-[61.9%] h-[31.4%] w-[19.7%]",
    position: "object-[58%_center]",
  },
  {
    src: yellow,
    alt: "Student holding notebooks outdoors",
    className: "left-[75.4%] top-[14.3%] h-[39.3%] w-[24.6%]",
    position: "object-[62%_center]",
  },
  {
    src: hijab,
    alt: "Student walking with books and coffee",
    className: "left-[75.4%] top-[55.6%] h-[27.1%] w-[24.6%]",
  },
];

export const ValueProposition: React.FC<ValuePropositionProps> = ({
  className,
}) => {
  return (
    <section
      id="about"
      aria-labelledby="value-prop-heading"
      className={cn("site-section overflow-hidden bg-brand-canvas", className)}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-start">
            <span className="eyebrow mb-4 block">The people</span>

            <h2 id="value-prop-heading" className="heading-section max-w-md text-brand-dark">
              Meet international students & teachers
            </h2>

            <p className="body-base mt-5 max-w-md text-brand-muted">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
            </p>

            <div className="mt-8">
              <Button
                variant="secondary"
                href="#community-network"
                className="bg-white [&>span]:font-bold"
              >
                Explore teachers and students
              </Button>
            </div>
          </div>

          <div className="relative aspect-[650/624]">
            <div
              className="absolute left-[3%] top-[-2.7%] h-full w-[95.4%] rounded-full bg-brand-blue-soft"
              aria-hidden="true"
            />
            <ul className="absolute inset-0 m-0 list-none p-0" role="list">
              {photos.map((photo) => (
                <li
                  key={photo.src}
                  className={cn(
                    "absolute overflow-hidden rounded-sm shadow-[0px_0px_3.21px_0px_#00000012,0px_3.21px_4.82px_-0.8px_#0000001A]",
                    photo.className
                  )}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 40vw, 240px"
                    className={cn("object-cover", photo.position)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
