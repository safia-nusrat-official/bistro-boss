import SectionTitle from "../components/section components/SectionTitle";
import featuredImg from "../assets/home/featured.jpg";
import Btn from "../components/Btn";
import moment from "moment";

const Featured = () => {
  return (
    <section className="md:my-12 p-8 bg-fixed relative md:p-20 parallax-bg">
      <div className="absolute left-0 top-0 w-full h-full bg-black/25 backdrop-blur-sm"></div>
      <div className="section-contents relative z-10">
        <SectionTitle
          dark={false}
          heading="Friday Special"
          sub_heading="Special Offer"
        ></SectionTitle>
        <div className="flex md:flex-nowrap flex-wrap gap-6">
          <img src={featuredImg} className="md:w-1/2 w-full" alt="" />
          <div className="text-white">
            <span>{moment().format("MMM DD, yyyy")}</span>
            <h1 className="text-2xl font-clash-display">How to get?</h1>
            <p className="my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis facilis dolorem, enim ducimus laboriosam ad quasi
              maiores eum esse, omnis voluptatibus labore error. Provident,
              accusantium quos non tempora commodi exercitationem.
            </p>
            <Btn dark={false}>Read More</Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
