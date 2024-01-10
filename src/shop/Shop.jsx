import sectionBanner from "../assets/shop/banner.jpg";
import SectionCover from "../components/section components/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import MenuCard from "../components/menu components/MenuCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./shop.css";
import { Helmet } from "react-helmet-async";
import SearchProvider, { useSearchContext } from "../providers/SearchProvider";
import SearchBar from "../components/search components/SearchBar";
import SearchGrid from "../components/search components/SearchGrid";

const Shop = () => {
  const { category } = useParams();
  const { menu: desserts } = useMenu({ selectedCategory: "dessert" });
  const { menu: pizzas } = useMenu({ selectedCategory: "pizza" });
  const { menu: soups } = useMenu({ selectedCategory: "soup" });
  const { menu: salads } = useMenu({ selectedCategory: "salad" });
  const { menu: drinks } = useMenu({ selectedCategory: "drinks" });
  const { menu: popular } = useMenu({ selectedCategory: "popular" });
  const { menu: offered } = useMenu({ selectedCategory: "offered" });
  const { searchQuery } = useSearchContext();
  const items = ["salad", "soup", "pizza", "dessert", "drinks", "offered", "popular"];
  const [tabIndex, setTabIndex] = useState(items.indexOf(category));

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>

      <SectionCover
        img={sectionBanner}
        banner={true}
        title="Our Shop"
        desc="Savor the Symphony: Bistro Boss, where culinary craftsmanship meets diverse delights, inviting you to experience an exquisite symphony of flavors at every turn on Our Shop."
      ></SectionCover>
      <section className="md:m-20 m-8">
        <div className="flex flex-col mb-6">
          <SearchBar></SearchBar>
          <SearchGrid></SearchGrid>
        </div>
        {!searchQuery && (
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salads</Tab>
              <Tab>Soups</Tab>
              <Tab>Pizzas</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
              <Tab>Offered</Tab>
              <Tab>Popular</Tab>
            </TabList>

            <TabPanel>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {salads &&
                  salads.map((item) => (
                    <MenuCard data={item} key={item?._id}></MenuCard>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-4">
                {soups &&
                  soups.map((item) => (
                    <MenuCard data={item} key={item?._id}></MenuCard>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-4">
                {pizzas &&
                  pizzas.map((item) => (
                    <MenuCard data={item} key={item?._id}></MenuCard>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-4">
                {desserts &&
                  desserts.map((item) => (
                    <MenuCard data={item} key={item?._id}></MenuCard>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-4">
                {drinks &&
                  drinks.map((item) => (
                    <MenuCard data={item} key={item?._id}></MenuCard>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-4">
                {offered &&
                  offered.map((item) => (
                    <MenuCard data={item} key={item?._id}></MenuCard>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-4">
                {popular &&
                  popular.map((item) => (
                    <MenuCard data={item} key={item?._id}></MenuCard>
                  ))}
              </div>
            </TabPanel>
          </Tabs>
        )}
      </section>
    </div>
  );
};

export default Shop;
