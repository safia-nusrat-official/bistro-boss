import sectionBanner from "../assets/shop/banner.jpg";
import SectionCover from "../components/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import MenuCard from "../components/MenuCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./shop.css"

const Shop = () => {
  const {category} = useParams()
  const [menu, loading] = useMenu();
  const desserts = menu.filter((item) => item?.category === "dessert");
  const pizzas = menu.filter((item) => item?.category === "pizza");
  const soups = menu.filter((item) => item?.category === "soup");
  const salads = menu.filter((item) => item?.category === "salad");
  const drinks = menu.filter((item) => item?.category === "drinks");

  
  const items = ['salad', 'soup', 'pizza', 'dessert', 'drinks']
  const [tabIndex, setTabIndex] = useState(items.indexOf(category));

  return (
    <div>
      <SectionCover
        img={sectionBanner}
        banner={true}
        title="Our Shop"
        desc="Savor the Symphony: Bistro Boss, where culinary craftsmanship meets diverse delights, inviting you to experience an exquisite symphony of flavors at every turn on Our Shop."
      ></SectionCover>
      <section className="md:m-20 m-8">
        <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Soups</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 gap-4">
            { salads &&
                salads.map(item=><MenuCard data={item} key={item?._id}></MenuCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              { soups &&
                soups.map(item=><MenuCard data={item} key={item?._id}></MenuCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              { pizzas &&
                pizzas.map(item=><MenuCard data={item} key={item?._id}></MenuCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              { desserts &&
                desserts.map(item=><MenuCard data={item} key={item?._id}></MenuCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              { drinks &&
                drinks.map(item=><MenuCard data={item} key={item?._id}></MenuCard>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Shop;
