"use client";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function Video() {
  return (
    <>
      <HeroVideoDialog
        className="w-full"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://res.cloudinary.com/dogyg2j0h/image/upload/v1738313583/maxresdefault_z6hblu.jpg"
        thumbnailAlt="Hero Video"
      />
    </>
  );
}
