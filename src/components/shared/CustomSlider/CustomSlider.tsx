import { CSSProperties, MouseEventHandler } from 'react';
import Slider from 'react-slick';

type Props = {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

const CustomNextArrow = ({ className, style, onClick }: Props): JSX.Element => {
  return (
    <div
      className={`custom-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const CustomPrevArrow = ({ className, style, onClick }: Props): JSX.Element => {
  return (
    <div
      className={`custom-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

export default function CustomSlider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: 'custom-dots slick-dots slick-thumb',
  };
  return (
    <Slider {...settings} lazyLoad="progressive">
      {children}
    </Slider>
  );
}
