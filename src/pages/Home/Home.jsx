import Slider from "./Slider";
import Tabs from "./Tabs";


const Home = () => {
  return (
    <main>
      <div className="banner">
        <h1 className="text-6xl max-w-2xl px-8 md:pl-16 text-white bg-black bg-opacity-50 p-8">
          Our Mission is to Take care your child education?
        </h1>
      </div>
      <Slider />
      <Tabs />
    </main>
  );
};

export default Home;
