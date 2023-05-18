const Blogs = () => {
  return (
    <div className="p-24">
      <div
        tabIndex={0}
        className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a credential that represents the authorization
            granted to a client application to access specific resources on a
            server. It is typically short-lived and used to authenticate API
            requests. <br />
            <br /> A refresh token is a credential used to obtain a new access
            token when the current one expires. It is usually long-lived and
            securely stored. <br />
            <br /> On the client-side, access tokens should be stored in a
            secure manner, such as in memory or in a secure storage mechanism.
            Refresh tokens should be stored in a highly secure location, such as
            a secure backend server or encrypted storage, to prevent
            unauthorized access.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are best for structured data with complex
            relationships and a need for strict data integrity, while NoSQL
            databases are suitable for unstructured or semi-structured data,
            large-scale applications, and high scalability requirements.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS ?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a popular and lightweight web application framework
            for Node.js. It provides a minimalistic and flexible set of features
            for building web applications and APIs. Express.js allows developers
            to handle routing, middleware, and HTTP request/response handling
            easily, making it a versatile choice for creating server-side
            applications. <br />
            <br />
            Nest.js is a progressive and opinionated Node.js framework built on
            top of Express.js. It follows a modular and scalable architecture
            inspired by Angular, making it suitable for building complex and
            scalable applications. Nest.js provides features like dependency
            injection, decorators, modules, and a powerful CLI (Command Line
            Interface) that simplifies development and enhances code
            organization. It aims to improve developer productivity and
            maintainability by promoting best practices and structure in Node.js
            applications.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-5 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            The aggregate function is used to perform advanced data processing
            and analysis on the data stored in the database. It allows you to
            perform complex operations, such as grouping, filtering, sorting,
            joining, and transforming data in a flexible and efficient manner.
            <br />
            <br />
            The aggregate function works by creating a pipeline of stages that
            define the sequence of operations to be performed on the data. Each
            stage in the pipeline processes the input documents and passes the
            results to the next stage. The stages can include operations like
            $match (filtering documents), $group (grouping documents based on a
            common key), $sort (sorting documents), $project (reshaping
            documents), and many more. <br />
            <br />
            By chaining together multiple stages, the aggregate function enables
            you to perform powerful data manipulations and aggregations to
            derive meaningful insights from your MongoDB data. It provides a
            versatile tool for data analysis and reporting within the database
            itself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
