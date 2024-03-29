import sectionBanner from "../assets/menu/banner.jpg";
import dessertBanner from "../assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../assets/menu/pizza-bg.jpg";
import saladBanner from "../assets/menu/salad-bg.jpg";
import soupBanner from "../assets/menu/soup-bg.jpg";
import drinksBanner from "../assets/menu/drinks-bg.jpg";

import SectionCover from "../components/section components/SectionCover";
import SectionTitle from "../components/section components/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuItem from "../components/menu components/MenuItem";
import MenuGrid from "../components/menu components/MenuGrid";
import { Helmet } from "react-helmet-async";
import SearchProvider from "../providers/SearchProvider";
import SearchBar from "../components/search components/SearchBar";
import SearchGrid from "../components/search components/SearchGrid";

export const Menu = () => {
  const {menu, loading} = useMenu({selectedCategory:""});
  const { menu: desserts } = useMenu({ selectedCategory: "dessert" });
  const { menu: pizzas } = useMenu({ selectedCategory: "pizza" });
  const { menu: soups } = useMenu({ selectedCategory: "soup" });
  const { menu: salads } = useMenu({ selectedCategory: "salad" });
  const { menu: drinks } = useMenu({ selectedCategory: "drinks" });

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <SectionCover
        img={sectionBanner}
        banner={true}
        title="Our Menu"
        desc="Savor the Symphony: Bistro Boss, where culinary craftsmanship meets diverse delights, inviting you to experience an exquisite symphony of flavors at every turn on Our Menu."
      ></SectionCover>

      <section className="md:px-28 pt-16 pb-0 ">
        <SearchProvider>
          <SearchBar></SearchBar>
          <SearchGrid></SearchGrid>
        </SearchProvider>
      </section>

      <section className="md:mx-28 md:my-12 my-8">
        <SectionTitle
          heading="Today's Offers"
          sub_heading="Don't Miss!"
        ></SectionTitle>

        <div className="grid md:grid-cols-2 gap-4">
          {loading && (
            <span className="loading loading-spinner loading-lg"></span>
          )}
          {menu &&
            menu.slice(0, 6).map((item) => <MenuItem key={item?._id} data={item}></MenuItem>)}
        </div>
      </section>
      <section>
        <SectionCover
          img={dessertBanner}
          title="Desserts"
          desc="Experience sweet perfection at Bistro Boss—where every dessert is a masterpiece, and every bite is a journey into indulgence."
        ></SectionCover>

        <MenuGrid menu={desserts.slice(0, 8)}></MenuGrid>
      </section>
      <section>
        <SectionCover
          img={pizzaBanner}
          title="Pizzas"
          desc="Pizza perfection unfolds at Bistro Boss, where artisanal crusts meet premium toppings in a symphony of flavors, creating an unforgettable slice of culinary bliss."
        ></SectionCover>

        <MenuGrid menu={pizzas.slice(1, 7)}></MenuGrid>
      </section>
      <section>
        <SectionCover
          img={soupBanner}
          title="Soups"
          desc="Immerse yourself in the comforting embrace of our soulful soups at Bistro Boss—each spoonful a celebration of rich flavors and nourishing warmth, promising a cozy respite for your palate."
        ></SectionCover>

        <MenuGrid menu={soups.slice(0, 6)}></MenuGrid>
      </section>
      <section>
        <SectionCover
          img={saladBanner}
          title="Salads"
          desc="Elevate your dining experience with our vibrant salads at Bistro Boss, where freshness meets creativity. From crisp greens to exotic toppings, our salads are a refreshing symphony of colors and textures, ensuring a delightful and wholesome journey with every bite."
        ></SectionCover>

        <MenuGrid menu={salads.slice(0, 6)}></MenuGrid>
      </section>
      <section>
        <SectionCover
          img={drinksBanner}
          title="Drinks"
          desc="Pizza perfection unfolds at Bistro Boss, where artisanal crusts meet premium toppings in a symphony of flavors, creating an unforgettable slice of culinary bliss."
        ></SectionCover>

        <MenuGrid menu={drinks.slice(0, 6)}></MenuGrid>
      </section>
    </div>
  );
};
