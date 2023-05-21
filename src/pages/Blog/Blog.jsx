const Blog = () => {
  return (
    <main className="blog my-12">
      <h1 className="title !text-left">
        What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>
      <p>Access token give data to the right person, Boost the authorization process And Refresh token give access to the right person, Boost the authentication process. In the client side Access token should be stored in the session storage and the refresh token should be stored in the cookies</p>
      <h1 className="title !text-left">
        Compare SQL and NoSQL databases?
      </h1>
      <p>SQL(Stractured Query Language) is manily used for storing and managing stractured data. In advance, SQL makes a stracture (table). Once table is flled by data the table stracture can't be changed. NoSQL(Not Only Stractured) is used to store and managing dynamic data, that changes in times. NoSQL Can manipulate the both stractured and semi stractured data</p>
      <h1 className="title !text-left">
        What is express js? What is Nest JS (google it)?
      </h1>
      <p>Expressjs and Nestjs are both popular web appliction framework for building server-side applications in javascipt. Expressjs is a minimal web framework that allow developers to build web applications. Expressjs provides a simple and intuitive API for handling HTTP requests and responses. Nestjs is a more stractured and organized architechure for building web applications. Nestjs includes build-in features for handling scalling issues </p>
      <h1 className="title !text-left">
        What is MongoDB aggregate and how does it work (google it)?
      </h1>
      <p>MongoDB aggregate Pipeline is a powerful tool for performing complex data manipulations on MongoDB collections. It allows developers to perform a series of operations on a collection in a single query, which can save time and improve performance compared to running multiple individual queries</p>
    </main>
  );
};

export default Blog;
