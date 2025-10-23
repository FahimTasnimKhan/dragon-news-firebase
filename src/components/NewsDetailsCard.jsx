import React from "react";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  const title = news?.title;
  return (
    <div className="space-y-5">
      <img src={news.image_url} alt="" />
      <h2>{title}</h2>
      <p>{news.details}</p>
    </div>
  );
};

export default NewsDetailsCard;
