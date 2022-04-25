import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setArticles(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center mt-3 h-screen w-screen ">
      <div className="w-3/4  border rounded-lg p-2 overflow-auto">
        <div className=" flex justify-around mb-4">
          {" "}
          <span className="text-center text-4xl font-semibold">
            Article List
          </span>
          <button
            className="bg-blue-500 text-white font-semibold p-2 rounded-lg active:scale-90"
            onClick={() => router.push("/createArticle")}
          >
            ADD
          </button>
        </div>
        <div className="flex flex-col space-y-3 ">
          {articles.data?.map((article, key) => (
            <div
              className="border p-2 hover:shadow-md hover:shadow-gray-400 hover:transition-all cursor-pointer "
              key={key}
              onClick={() => router.push(`/articles/${article.id}`)}
            >
              <p>
                {" "}
                <span className="text-red-500">Title : </span> {article?.title}
              </p>
              <p>
                {" "}
                <span className="text-blue-500">Description : </span>{" "}
                {article?.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
