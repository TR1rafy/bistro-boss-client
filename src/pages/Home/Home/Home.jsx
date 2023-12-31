import { Helmet } from "react-helmet-async";
import ServiceBannnar from "../../ServiceBannnar/ServiceBannnar";
import Bannar from "../Bannar/Bannar";
import CallSection from "../CallSection/CallSection";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import TestiMonials from "../TestiMonials/TestiMonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Bannar></Bannar>
      <Category></Category>
      <ServiceBannnar></ServiceBannnar>
      <PopularMenu></PopularMenu>
      <CallSection></CallSection>
      <Featured></Featured>
      <TestiMonials></TestiMonials>
    </div>
  );
};

export default Home;
