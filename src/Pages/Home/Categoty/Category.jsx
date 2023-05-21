import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "./Card";
import useTitle from "../../../Hooks/useTitle";

const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [active, setActive] = useState("");
  const [toys, setToys] = useState([]);
  const [categoryToy, setCeategoryToy] = useState(toys);

  useEffect(() => {
    fetch("https://brain-server-two.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log("tabt", tabIndex);
  console.log(toys);

  useEffect(() => {
    setActive("tab-active border-0 text-black font-bold");

    if (tabIndex === 0) {
      setCeategoryToy(toys);
    }
    if (tabIndex === 1) {
      const scienceKit = toys?.filter(
        (toy) => toy.subCategory === "Scince Kit"
      );
      console.log(scienceKit);
      setCeategoryToy(scienceKit);
    } else if (tabIndex === 2) {
      const mathLearning = toys?.filter(
        (toy) => toy.subCategory === "Math Learning Toy"
      );
      console.log(mathLearning);
      setCeategoryToy(mathLearning);
    } else if (tabIndex === 3) {
      const mathLearning = toys?.filter(
        (toy) => toy.subCategory === "Engineering Kit"
      );
      console.log(mathLearning);
      setCeategoryToy(mathLearning);
    }
    console.log("cartegory", categoryToy);
  }, [tabIndex]);
  console.log(active);
  return (
    <div className=" w-11/12 mx-auto">
      <div className="mb-10 pl-4 border-l-4  border-green-600">
        <h1 className="font-bold text-2xl md:text-3xl text-green-600">
          Shop by Category
        </h1>
        <p className="lg:max-w-sm">
          Take a visual journey through the incredible moments and experiences
          we've captured.{" "}
        </p>
      </div>
      <Tabs
        className="text-center border-4 max-h-screen overflow-auto"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className="tabs  bg-green-500 sticky top-0 mb-5 z-10">
          <Tab
            className={`tab tab-lifted tab-lg  ${
              tabIndex == 0 && active ? active : "text-white"
            } text-lg focus:outline-nonenone`}>
            All Toy
          </Tab>
          <Tab
            className={`tab tab-lifted tab-lg   ${
              tabIndex == 1 && active ? active : "text-white"
            } text-lg focus:outline-nonenone`}>
            Science Kit
          </Tab>
          <Tab
            className={`tab tab-lifted tab-lg   ${
              tabIndex == 2 && active ? active : "text-white"
            } text-lg focus:outline-nonenone`}>
            Math Learning Kit
          </Tab>
          <Tab
            className={`tab tab-lifted tab-lg   ${
              tabIndex == 3 && active ? active : "text-white"
            } text-lg focus:outline-nonenone`}>
            Engineering Kit
          </Tab>
        </TabList>

        <div className="lg:px-8 ">
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {toys?.map((toy) => (
                <Card key={toy._id} toy={toy}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryToy?.map((toy) => (
                <Card key={toy._id} toy={toy}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryToy?.map((toy) => (
                <Card key={toy._id} toy={toy}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryToy?.map((toy) => (
                <Card key={toy._id} toy={toy}></Card>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Category;
