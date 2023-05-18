import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("tab-active");
  }, [tabIndex]);
  console.log(tabIndex);
  return (
    <div className="py-15 w-5/12 mx-auto">
      <div className="mb-10 ">
        <h1 className="font-bold text-3xl text-green-600">Shop By Category</h1>
      </div>
      <Tabs
        className="text-center "
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className="tabs-boxed p-4">
          <Tab className={`${tabIndex == 0 && active} text-lg tab`}>
            Title 1
          </Tab>
          <Tab className={`${tabIndex == 1 && active} text-lg tab`}>
            Title 2
          </Tab>
          <Tab className={`${tabIndex == 2 && active} text-lg tab`}>
            Title 2
          </Tab>
          <Tab className={`${tabIndex == 3 && active} text-lg tab`}>
            Title 2
          </Tab>
        </TabList>

        <div className="block">
          <TabPanel>
            <h2>Any conjdsgkfgabnsdkgnkasdng,kasdtent 1</h2>
            <Tabs>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h2>Any cont;dlfgklasdngksdbngksdbngk,ent 2</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Category;
