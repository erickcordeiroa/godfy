'use client'
import Image from "next/image";
import feedImg from '@/assets/images/feed.jpeg';
import avatarImg from '@/assets/images/avatar.jpeg';
import { AiOutlineEllipsis } from "react-icons/ai";
import LikedBy from "../likeBy";
import { useState } from "react";
import { GoComment, GoHeart, GoHeartFill, GoShareAndroid } from "react-icons/go";

export default function FeedItem() {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const likes = [
    { name: 'User 1', avatar: avatarImg },
    { name: 'User 2', avatar: avatarImg },
    { name: 'User 3', avatar: avatarImg },
    { name: 'User 4', avatar: avatarImg },
    { name: 'User 5', avatar: avatarImg },
    { name: 'User 6', avatar: avatarImg },
    { name: 'User 7', avatar: avatarImg },
    { name: 'User 8', avatar: avatarImg },
    { name: 'User 9', avatar: avatarImg },
  ];

  return (
    <div className="bg-white p-4 shadow-sm rounded-lg">
      <div className="header-feed flex justify-between items-center">
        <div className="header-feed__userInfo flex justify-start items-center gap-2">
          <Image src={avatarImg} alt="GodFy" width={57} className="p-1 rounded-lg" />
          <div>
            <p className="text-gray-950 text-lg -my-2">John Foe</p>
            <span className="text-blue-600 text-xs">@johnfoe</span>
          </div>
        </div>
        <div className="header-feed__iconConfig">
          <AiOutlineEllipsis className="text-black text-4xl cursor-pointer" />
        </div>
      </div>
      <div className="context-feed mt-4">
        <p className="text-gray-900 mb-4">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
        <Image src={feedImg} alt="GodFy" className="min-w-[596px] max-w-[596px] max-h-[350px]" />
      </div>
      <div className="count-liked-shared-feed flex justify-between items-center gap-2 mt-4">
        <div className="flex">
          {likes && <LikedBy likes={likes} />}
        </div>
        <div className="flex justify-end items-center text-gray-900 gap-4">
          <p>4 Comentário(s)</p>
          <p>1 Compartilhamento(s)</p>
        </div>
      </div>
      <div className="py-4 icons-shared-like justify-between flex items-center gap-4 my-6 border-y border-gray-300">
        {!liked ?
          <div onClick={handleLikeClick} className="flex items-center gap-1 cursor-pointer">
            <GoHeart className="text-gray-800 text-xl" />
            <p className="text-gray-600">Curtir</p>
          </div>
          :
          <div onClick={handleLikeClick} className="flex items-center gap-1 cursor-pointer">
            <GoHeartFill className="text-red-600 text-xl" />
            <p className="text-red-600">Curtir</p>
          </div>
        }

        <div className="flex items-center gap-1 cursor-pointer">
          <GoComment className="text-gray-800 text-xl" />
          <p className="text-gray-600">Comentar</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <GoShareAndroid className="text-gray-800 text-xl" />
          <p className="text-gray-600">Compartilhar</p>
        </div>
      </div>
    </div>
  )
}