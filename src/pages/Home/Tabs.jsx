import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../../shared/ToyCard";

export default () => {
  const toys = useLoaderData();

  const scienceToys = toys.filter((
    toy,
  ) => (new RegExp("science", "ig").test(toy["sub-category"])));

  const mathToys = toys.filter((
    toy,
  ) => (new RegExp("math", "i").test(toy["sub-category"])));
  const languageToys = toys.filter((
    toy,
  ) => (new RegExp("language", "i").test(toy["sub-category"])));
  const enginearingToys = toys.filter((
    toy,
  ) => (new RegExp("engine", "i").test(toy["sub-category"])));

  console.log(toys, mathToys);
  return (
    <section className="">
      <h1 className="title">
        Shop By Category
      </h1>
      <Tabs>
        <TabList>
          <Tab>Math</Tab>
          <Tab>Science</Tab>
          <Tab>Enginearing</Tab>
          <Tab>Languages</Tab>
        </TabList>

        <TabPanel>
          <div className="auto-grid">
            {mathToys.map((toy) => <ToyCard key={toy._id} toy={toy} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="auto-grid">
            {scienceToys.map((toy) => <ToyCard key={toy._id} toy={toy} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="auto-grid">
            {enginearingToys.map((toy) => <ToyCard key={toy._id} toy={toy} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="auto-grid">
            {languageToys.map((toy) => <ToyCard key={toy._id} toy={toy} />)}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};
