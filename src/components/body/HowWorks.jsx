import star from "../../assets/StarIcon.png";
import { PiPaperPlaneRightFill } from "react-icons/pi";
const HowWorks = () => {
  const cardItem = [
    {
      id: 1,
      img: star,
      title: "Lorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 2,
      img: star,
      title: "Lorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 3,
      img: star,
      title: "Lorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];
  return (
    <div className="my-10 mx-8">
      {/* heading */}
      <div className="text-center">
        <p className="text-2xl">How does it work?</p>
      </div>
      {/* card borderless */}
      <div className="flex flex-row gap-36 my-10 ">
        {cardItem.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <img src={item.img} className="w-[60px] h-[60px]" />
            <div className="text-center uppercase text-lg font-semibold">
              {item.title}
            </div>
            <div className="text-center">{item.description}</div>
          </div>
        ))}
      </div>
      {/* button */}
      <div className="flex items-center justify-center pt-6">
        <button className="flex items-center gap-2 bg-[#f9b741] py-3 px-4">
          <span className="font-medium items-center pb-1">
            JOIN FOR FREE TODAY
          </span>
          <PiPaperPlaneRightFill />
        </button>
      </div>
    </div>
  );
};

export default HowWorks;
