import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";

function PostDetails() {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold md:mb-2 mb-1 md:text-2xl">
            First Internship on CODSOFT!!! For web development
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@jnhgjjnn</p>
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>17/5/2024</p>
            <p>16:45</p>
          </div>
        </div>
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
          className="w-full mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
          autem nulla suscipit quaerat iure labore cumque quae nihil dolores,
          asperiores dicta quo nemo consequuntur eligendi nisi ipsum. Suscipit,
          at?
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categroes</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">comments</h3>
          {/* commments */}
          <Comment />
          <Comment />

          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@jnnnnn</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/9/2024</p>
                <p className="text-gray-500 text-sm">16:27</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice information</p>
          </div>
        </div>

        {/* write comment */}
        <div className=" w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="write comment"
            className="md:w-[90%] outline-none  py-2 px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
      ujtrjtj
    </div>
  );
}

export default PostDetails;
