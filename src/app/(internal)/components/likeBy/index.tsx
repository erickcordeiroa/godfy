import Image from 'next/image';

const LikedBy = ({ likes } : any) => {
  const displayedLikes = likes.slice(0, 3);
  const remainingLikes = likes.length - displayedLikes.length;

  return (
    <div className="flex items-center -space-x-2">
      {displayedLikes.map((like: any, index: number) => (
        <div key={index} className="w-8 h-8 rounded-full overflow-hidden">
          <Image src={like.avatar} alt={like.name}/>
        </div>
      ))}
      {remainingLikes > 0 && (
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm">
          +{remainingLikes}
        </div>
      )}
    </div>
  );
};

export default LikedBy;
