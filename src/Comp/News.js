import React, { useState, useEffect } from "react";
import NewsItesms from "./NewsItesms";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
const apikey = process.env.REACT_APP_NEWS_API_KEY;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}`;
    updateNews();
  }, [props.category, page]);
  

  const handlePrvClick = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container my-3">
      <h2 className="my-2 ">{capitalizeFirstLetter(props.category)}</h2>

      <div className="row">
        {!loading &&
          articles.map((element, index) => {
            return (
              <div key={index} className="col-md-4">
                <NewsItesms
                  key={element.urlToImage}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  title={element.title ? element.title.slice(0, 50) : ""}
                  desc={element.description ? element.description.slice(0, 80) : ""}
                />
              </div>
            );
          })}
      </div>
      {loading && <Spinner />}
      <div className="container d-flex justify-content-around my-2">
        <button
          disabled={page <= 1}
          onClick={handlePrvClick}
          type="button"
          className="btn btn-light"
        >
          &larr; previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          onClick={handleNextClick}
          type="button"
          className="btn btn-light"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

News.defaultProps = {
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
