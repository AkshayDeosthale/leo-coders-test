import React from "react";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );

  const articleData = await res.json();

  return {
    props: { articleData }, // will be passed to the page component as props
  };
}

const ArticleDetails = ({ articleData }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/2 h-1/3 border rounded-lg p-2 flex flex-col space-y-3">
        <div className="h-1/3 w-full border rounded-lg p-2">
          <span className="font-semibold text-red-500">Title :</span>
          <span>{articleData.title}</span>
        </div>
        <div className="h-1/3 w-full border rounded-lg p-2 flex-wrap">
          <span className="font-semibold text-blue-500">Description :</span>
          <span>{articleData.body}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
