import { useState } from "react";
import UseTitle from "../Hooks/UseTitle";
import { useEffect } from "react";
import Banner from "../Shared/Banner";

const Blogs = () => {
  UseTitle("Blogs");
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  });
  return (
    // <div className="p-24">
    //    <h1 data-aos="fade-down" className="font-bold text-center mb-16 text-3xl">Blog <span className="text-error">Page</span></h1>
    //   <div
    //     tabIndex={0}
    //     data-aos="fade-up"
    //     className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
    //     <div className="collapse-title text-xl font-medium">
    //       What is an access token and refresh token? How do they work and where
    //       should we store them on the client-side?
    //     </div>
    //     <div className="collapse-content">
    //       <p>
    //         An access token is a credential that represents the authorization
    //         granted to a client application to access specific resources on a
    //         server. It is typically short-lived and used to authenticate API
    //         requests. <br />
    //         <br /> A refresh token is a credential used to obtain a new access
    //         token when the current one expires. It is usually long-lived and
    //         securely stored. <br />
    //         <br /> On the client-side, access tokens should be stored in a
    //         secure manner, such as in memory or in a secure storage mechanism.
    //         Refresh tokens should be stored in a highly secure location, such as
    //         a secure backend server or encrypted storage, to prevent
    //         unauthorized access.
    //       </p>
    //     </div>
    //   </div>
    //   <div
    //     tabIndex={0}
    //     data-aos="fade-up"
    //     className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
    //     <div className="collapse-title text-xl font-medium">
    //       Compare SQL and NoSQL databases?
    //     </div>
    //     <div className="collapse-content">
    //       <p>
    //         SQL databases are best for structured data with complex
    //         relationships and a need for strict data integrity, while NoSQL
    //         databases are suitable for unstructured or semi-structured data,
    //         large-scale applications, and high scalability requirements.
    //       </p>
    //     </div>
    //   </div>
    //   <div
    //     tabIndex={0}
    //     data-aos="fade-up"
    //     className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
    //     <div className="collapse-title text-xl font-medium">
    //       What is express js? What is Nest JS ?
    //     </div>
    //     <div className="collapse-content">
    //       <p>
    //         Express.js is a popular and lightweight web application framework
    //         for Node.js. It provides a minimalistic and flexible set of features
    //         for building web applications and APIs. Express.js allows developers
    //         to handle routing, middleware, and HTTP request/response handling
    //         easily, making it a versatile choice for creating server-side
    //         applications. <br />
    //         <br />
    //         Nest.js is a progressive and opinionated Node.js framework built on
    //         top of Express.js. It follows a modular and scalable architecture
    //         inspired by Angular, making it suitable for building complex and
    //         scalable applications. Nest.js provides features like dependency
    //         injection, decorators, modules, and a powerful CLI (Command Line
    //         Interface) that simplifies development and enhances code
    //         organization. It aims to improve developer productivity and
    //         maintainability by promoting best practices and structure in Node.js
    //         applications.
    //       </p>
    //     </div>
    //   </div>
    //   <div
    //     tabIndex={0}
    //     data-aos="fade-up"
    //     className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
    //     <div className="collapse-title text-xl font-medium">
    //       What is an access token and refresh token? How do they work and where
    //       should we store them on the client-side?
    //     </div>
    //     <div className="collapse-content">
    //       <p>
    //         The aggregate function is used to perform advanced data processing
    //         and analysis on the data stored in the database. It allows you to
    //         perform complex operations, such as grouping, filtering, sorting,
    //         joining, and transforming data in a flexible and efficient manner.
    //         <br />
    //         <br />
    //         The aggregate function works by creating a pipeline of stages that
    //         define the sequence of operations to be performed on the data. Each
    //         stage in the pipeline processes the input documents and passes the
    //         results to the next stage. The stages can include operations like
    //         $match (filtering documents), $group (grouping documents based on a
    //         common key), $sort (sorting documents), $project (reshaping
    //         documents), and many more. <br />
    //         <br />
    //         By chaining together multiple stages, the aggregate function enables
    //         you to perform powerful data manipulations and aggregations to
    //         derive meaningful insights from your MongoDB data. It provides a
    //         versatile tool for data analysis and reporting within the database
    //         itself.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      <Banner
        title={"Popular Blogs"}
        imageUrl={"https://images8.alphacoders.com/100/1003220.png"}
      />
      <img
        className="justify-center items-center mx-auto mt-48"
        src="https://www.freepnglogos.com/uploads/avengers-png/marvel-avengers-alliance-clint-barton-thor-captain-10.png"
        alt=""
      />
      <h1 className="text-8xl text-center text-base-content font-extrabold my-16">Popular Blogs</h1>
      <div className="px-24 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blog.map((blog) => (
            <div
              key={blog.id}
              className="bg-base-300 p-6 rounded-xl shadow-xl shadow-red-500 text-base-content">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <br />
              <p>
                <span className="font-bold text-xl">Author: </span>
                {blog.author}
              </p>
              <br />
              <p>{blog.content}</p>
              <br />
              <p>
                <span className="font-bold">Published Date: </span>
                {blog.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
