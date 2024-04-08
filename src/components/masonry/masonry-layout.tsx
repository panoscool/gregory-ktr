"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import Masonry from "./masonry";
import "./masonry-layout.css";

type MasonryLayoutProps = {
  hasLink: boolean;
  data: { id: string; src: string; alt: string }[];
};

type LinkOrFragmentProps = { children: React.ReactNode; href: string; hasLink: boolean };

function LinkOrFragment({ children, href, hasLink }: LinkOrFragmentProps) {
  return hasLink ? <Link href={href}>{children}</Link> : <Fragment>{children}</Fragment>;
}

export function MasonryLayout({ data, hasLink }: MasonryLayoutProps) {
  const breakpointCols = {
    default: 2,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((item, index) => (
        <div key={`${item.src}-photo-${index}`}>
          <LinkOrFragment hasLink={hasLink} href={`/work/${item.id}`}>
            <Image
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
              className={cn({
                "hover:opacity-70 transition-opacity duration-300 ease-in-out": hasLink,
              })}
            />
          </LinkOrFragment>
        </div>
      ))}
    </Masonry>
  );
}
