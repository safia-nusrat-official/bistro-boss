import React from "react";
import SectionTitle from "../components/sectionTitle";
import useMenu from "../hooks/useMenu";
import MenuCard from "../components/MenuCard";

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
          menu.slice(3, 6).map((item) => <MenuCard data={item}></MenuCard>)}
      </div>
    </section>
  );
};

export default Recommended;
