import sectionBanner from "../assets/menu/banner.jpg";
import dessertBanner from "../assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../assets/menu/pizza-bg.jpg";
import saladBanner from "../assets/menu/salad-bg.jpg";
import soupBanner from "../assets/menu/soup-bg.jpg";
import drinksBanner from "../assets/menu/drinks-bg.jpg";

import SectionCover from "../components/SectionCover";
import SectionTitle from "../components/sectionTitle";
import useMenu from "../hooks/useMenu";
import MenuItem from "../components/MenuItem";
import MenuGrid from "../components/MenuGrid";
import { Helmet } from "react-helmet-async";

export const Menu = () => {
  const [menu, loading] = useMenu();
  const desserts = menu.filter((item) => item?.category === "dessert");
  const pizzas = menu.filter((item) => item?.category === "pizza");
  const soups = menu.filter((item) => item?.category === "soup");
  const salads = menu.filter((item) => item?.category === "salad");
  const drinks = menu.filter((item) => item?.category === "drinks");

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
            menu.slice(0, 6).map((item) => <MenuItem data={item}></MenuItem>)}
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

        <MenuGrid menu={pizzas.slice(0, 4)}></MenuGrid>
      </section>

      <section>
        <SectionCover
          img={soupBanner}
          title="Soups"
          desc="Immerse yourself in the comforting embrace of our soulful soups at Bistro Boss—each spoonful a celebration of rich flavors and nourishing warmth, promising a cozy respite for your palate."
        ></SectionCover>

        <MenuGrid menu={soups.slice(0, 4)}></MenuGrid>
      </section>

      <section>
        <SectionCover
          img={saladBanner}
          title="Salads"
          desc="Elevate your dining experience with our vibrant salads at Bistro Boss, where freshness meets creativity. From crisp greens to exotic toppings, our salads are a refreshing symphony of colors and textures, ensuring a delightful and wholesome journey with every bite."
        ></SectionCover>

        <MenuGrid menu={salads.slice(0, 4)}></MenuGrid>
      </section>

      <section>
        <SectionCover
          img={drinksBanner}
          title="Drinks"
          desc="Pizza perfection unfolds at Bistro Boss, where artisanal crusts meet premium toppings in a symphony of flavors, creating an unforgettable slice of culinary bliss."
        ></SectionCover>

        <MenuGrid menu={drinks.slice(0, 4)}></MenuGrid>
      </section>
    </div>
  );
};
