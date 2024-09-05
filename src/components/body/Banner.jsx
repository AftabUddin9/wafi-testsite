import background from "../../assets/background.jpg";
import vector from "../../assets/vector.png";
const Banner = () => {
  return (
    <div
      className="h-[800px] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col justify-center items-center text-white w-[760px] px-8">
        <img src={vector} className="h-[228px] w-[202px]" />
        <div className="text-5xl text-center mb-6">
          Helping you do more of what you love at sea
        </div>
        <div className="text-xl text-center">
          Lorem Ipsum DolarLorem Ipsum DolarLorem Ipsum DolarLorem Ipsum
          DolarLorem Ipsum Dolar
        </div>
      </div>
    </div>
  );
};

export default Banner;
