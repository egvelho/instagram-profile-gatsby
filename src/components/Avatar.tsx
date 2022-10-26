import React from "react";

export type AvatarProps = {
  size?: number | string;
  src: string;
};

export function Avatar({ size = "24px", src }: AvatarProps) {
  return (
    <div className="avatar">
      <img src={src} />
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
