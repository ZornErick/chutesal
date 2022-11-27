import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import QuadraCard from "../QuadraCard/QuadraCard";
import { LeftArrow } from "../../assets/Icons/LeftArrow/LeftArrow";
import { RightArrow } from "../../assets/Icons/RightArrow/RightArrow";

export interface IQuadra {
  id: number;
  nome: string;
}
interface IQuadraSliderProps {
  quadras: IQuadra[];
  unidade?: number;
}

export default ({ quadras, unidade }: IQuadraSliderProps) => {
  return (
    <div className="w-full">
      <Slider
        prevArrow={<LeftArrow />}
        nextArrow={<RightArrow />}
        className="px-20 w-full h-full rounded-2xl"
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {quadras.map((quadra) => (
          <QuadraCard key={`quadra-slide-${quadra.id}`} quadra={quadra} />
        ))}
      </Slider>
    </div>
  );
};
