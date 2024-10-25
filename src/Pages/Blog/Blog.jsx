import BannerSingleToy from "../../Shared/BannerSingleToy";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div>
      <BannerSingleToy>My Blogs</BannerSingleToy>
      <div className="mt-8 items-center text-black">
        <div className="border-4 p-3 rounded-md m-4 bg-white border-orange-300">
          <div className="pb-2">
            <strong>Qus-1: </strong> What is an access token and refresh token?
            How do they work and where should we store them on the client-side.
          </div>
          <div className="">
            <strong>Ans: </strong> Access tokens and refresh tokens are
            components of the OAuth 2.0 authentication and authorization
            protocol, it is commonly used to secure web applications and APIs.
            <br />
            <br />
            Workflow of Access Token: Firstly, The client application initiates
            the authorization process by redirecting the user to the
            authorization server. The client sends a token request to the
            authorization server, including the authorization grant. Secondly,
            The user authenticates and grants permission to the client. The
            authorization server verifies the grant and, if valid, issues an
            access token. Finally, the authorization server issues an
            authorization grant to the client.
            <br />
            <br />
            Workflow of Access Token: Access tokens have a limited lifetime.
            When the access token expires, the client sends a token refresh
            request to the authorization server. The authorization server
            validates the refresh token and issues a new access token
            <br />
            <br />
            Storage policy of access token and refresh token: In web
            applications, access tokens are often stored in browser storage
            (sessionStorage or localStorage) or HTTP cookies. It's important to
            consider the security implications of storing tokens in these
            locations, as they may be vulnerable to Cross-Site Scripting (XSS)
            attacks.
          </div>
        </div>

        <div className="border-4 p-3 rounded-md m-4 bg-white border-orange-300">
          <div className="pb-2">
            <strong>Qus-2: </strong>Compare SQL and NoSQL databases
          </div>
          <div>
            <strong>Ans: </strong> SQL database means Structured Query Language
            and NoSQL database means Not Only SQL.
            <br />
            SQL: Mainly relational database. It is organized in tables with
            predefined schemas. Follows the ACID (Atomicity, Consistency,
            Isolation, Durability) properties. Suitable for structured and
            tabular data.
            <br />
            <br />
            NoSQL: Can have various data models, including document-oriented
            (e.g., MongoDB), key-value pairs (e.g., Redis), column-family (e.g.,
            Cassandra), and graph-based (e.g., Neo4j). Schemas can be dynamic
            and flexible, allowing for easier adaptation to evolving data
            requirements.
          </div>
        </div>

        <div className="border-4 p-3 rounded-md m-4 bg-white border-orange-300">
          <div className="pb-2">
            <strong>Qus-3: </strong>What is express js? What is Nest JS?
          </div>
          <div>
            <strong>Ans: </strong> Express.js: Express.js is the most popular
            web framework for Node.js. It is a minimal and flexible Node.js web
            application framework that provides a robust set of features for web
            and mobile applications. It one of the most popular frameworks for
            building server-side applications with Node.js.
            <br />
            <br />
            Nest.js: Nest.js is a Node.js framework that helps build server-side
            applications. NestJS is a popular open-source, back-end framework
            for Node. js and TypeScript-based, server-side applications. It is
            inspired by Angular, the popular front-end framework, and adopts
            some of its design principles and concepts.
            <br />
          </div>
        </div>

        <div className="border-4 p-3 rounded-md m-4 bg-white border-orange-300">
          <div className="pb-2">
            <strong>Qus-4: </strong> What is MongoDB aggregate and how does it
            work?
          </div>
          <div>
            <strong>Ans: </strong>MongoDB's aggregate method is a powerful tool
            for performing data aggregation operations on the documents in a
            collection.
            <br />
            Some overviews of common aggregation of MongoDB
            <br /> $sort: Orders the documents based on specified criteria.
            <br /> $match: Filters the documents based on specified criteria.
            <br /> $group: Groups documents by a specified key and allows the
            computation of aggregate values for each group.
            <br /> $project: Reshapes the documents by including, excluding, or
            transforming fields.
            <br /> $unwind: Deconstructs an array field, creating a separate
            document for each element in the array.
            <br /> $limit: Limits the number of documents passed to the next
            stage in the pipeline.
            <br /> $skip: Skips a specified number of documents and passes the
            remaining documents to the next stage.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
