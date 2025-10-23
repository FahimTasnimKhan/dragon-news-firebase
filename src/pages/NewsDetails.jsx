import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RighAside";
import { useLoaderData, useParams } from "react-router";

import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  console.log(id);
  const [news, setNews] = useState({});
  
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="max-w-11/12 mx-auto grid grid-cols-12">
        <section className=" col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className=" col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};
export default NewsDetails;
