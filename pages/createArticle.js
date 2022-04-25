import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateArticle = () => {
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");

  const submitReq = async () => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        title: Title,
        body: Body,
      })
      .then(function (response) {
        console.log(response);
        toast(
          `Article added, response : ID: ${response.data.id} , title: ${response.data.title}   `
        );
      })
      .catch(function (error) {
        console.log(error);
        toast(`Oops error , response : ${error}`);
      });
  };

  return (
    <div className="h-screen w-screen flex  justify-center items-center">
      <div className="h-1/3 w-1/2 flex flex-col border rounded-lg p-2 space-y-5">
        <input
          type="text"
          placeholder="Enter title"
          className="w-full p-2 h-1/2 outline-none border "
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="w-full p-2 h-1/2 outline-none border "
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
          onClick={submitReq}
        >
          Submit
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateArticle;
