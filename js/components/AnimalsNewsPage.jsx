import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const AnimalNewsPage = () => {
  const [articles, setArticles] = useState([]);
  const url = `https://newsapi.org/v2/top-headlines?q=animal&category=science&apiKey=${process.env.API_KEY_NEWS}&language=en`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex justify-end space-x-4">
          <Link href="/">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Go to Main Page
            </button>
          </Link>
          <Link href="/insert">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Go to Insert Page
            </button>
          </Link>
        </div>
        <h1 className="w-[500px] mx-auto text-center text-5xl">Animal News</h1>
        <p className="w-[1000px] mx-auto text-center mt-4 text-3xl">
          Here are the most recent news about animals.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.url}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <a href={article.url} target="_blank" rel="noreferrer">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full mb-4 rounded-lg"
                />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {article.title}
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {article.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalNewsPage;
