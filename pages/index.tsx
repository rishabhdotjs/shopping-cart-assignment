import Image from 'next/image';
import type { GetStaticProps } from 'next';
import db from '../database/db';
import CustomSlider from '../src/components/shared/CustomSlider/CustomSlider';
import { T_Banner } from '../utils/types/banner';
import { T_Category } from '../utils/types/categories';
import HeroBanner from '../src/components/shared/Hero/Hero';

type HomeProps = {
  banners: T_Banner[];
  categories: T_Category[];
};

const Home = ({ banners, categories }: HomeProps): JSX.Element => {
  return (
    <div className="home">
      <article className="home__carousel">
        {banners && (
          <CustomSlider>
            {banners.map((banner) => (
              <div key={banner.id} className="custom-slide">
                <Image
                  src={banner.bannerImageUrl}
                  alt={banner.bannerImageAlt}
                  width={1200}
                  height={300}
                />
              </div>
            ))}
          </CustomSlider>
        )}
      </article>
      <article className="home__categories">
        {categories &&
          categories.map((category) => (
            <div key={category.id}>
              <HeroBanner itemKey={category.key} {...category} />
            </div>
          ))}
      </article>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const banners = await db.getBanners();
  const categories = await db.getCategories();
  return {
    props: {
      banners,
      categories,
    },
  };
};

export default Home;
