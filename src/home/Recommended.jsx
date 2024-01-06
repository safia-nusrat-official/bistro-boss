import React from "react";
import SectionTitle from "../components/section components/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuCard from "../components/menu components/MenuCard";
import { Link } from "react-router-dom";

const Recommended = () => {
  const [menu] = useMenu();
  return (
    <section className="md:mx-28 md:my-12 m-8">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        sub_heading="You must try"
      ></SectionTitle>

      <div className="flex md:flex-nowrap flex-wrap gap-4">
        {menu.length > 3 &&
          menu.slice(3, 6).map((item) => (
            <Link key={item?._id} to={`/shop/${item?.category}`}>
              <MenuCard data={item}></MenuCard>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Recommended;
