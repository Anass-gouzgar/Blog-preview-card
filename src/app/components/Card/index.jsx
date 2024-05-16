import React from 'react'
import Image from 'next/image'
import fimg from "../../../../public/images/illustration-article.svg"
import simg from "../../../../public/images/image-avatar.webp"


const index = () => {
  return (
    <div className="w-[330px] h-[480px] bg-myWhite rounded-3xl p-4 font-Figtree flex flex-col justify-center gap-3 border border-myBlack shadow-2xlf shadow-myBlackf shadow-[8.0px_8.0px_0px_rgba(0,0,0)]">
      <div className="mx-auto">
        <Image
          src={fimg}
          alt="header image"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>
      <button className="text-myBlack bg-myYellow px-2 self-start text-sm py-1 rounded-md w-auto font-black">
        Learning
      </button>
      <p className="font-semibold text-sm"> Published 21 Dec 2023</p>
      <h1 className="text-xl font-black hover:text-myYellow cursor-pointer"> HTML & CSS foundations</h1>
      <p className="text-myGrey text-sm">
        {" "}
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex gap-3">
        <Image
          src={simg}
          alt="author image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="font-black self-center text-myBlack"> Greg Hooper</p>
      </div>
    </div>
  );
}

export default index