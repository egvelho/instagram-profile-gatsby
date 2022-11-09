import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export type AvatarProps = {
  size?: number | string;
} & ({ src: string } | { image: IGatsbyImageData });

export function Avatar({ size = "24px", ...data }: AvatarProps) {
  return (
    <div className="avatar">
      {"src" in data && <img src={data.src} />}
      {"image" in data && (
        <GatsbyImage
          image={{ ...data.image, layout: "fullWidth" }}
          alt=""
          style={{
            borderRadius: `calc(${size} / 2)`,
          }}
        />
      )}
      <style jsx>{`
        .avatar {
          width: ${size};
          height: ${size};
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: calc(${size} / 2);
        }
      `}</style>
    </div>
  );
}
