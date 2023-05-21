import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h1 className="font-bold text-xl">
          What is an access token and refresh token? <br /> How do they work and
          where should we store them on the client-side? <br />
        </h1>
        <p className="mt-4">
          <span className="font-bold">Acces Token: </span>An access token is a
          credential that is issued to a client such as a web or mobile
          application after successful authentication. It is used to authorize
          and grant access to protected resources on a server. The access token
          typically has a limited lifespan and expires after a certain period.
        </p>
        <p>
          When a client makes a request to access a protected resource, it
          includes the access token in the request headers. The server validates
          the access token to determine if the client has the necessary
          permissions to access the requested resource. If the access token is
          valid and not expired, the server fulfills the request.
        </p>
        <p className="mt-2">
          <span className="font-bold">Refresh Token: </span>A refresh token is a
          long-lived credential that is also issued to a client after successful
          authentication. Its purpose is to obtain a new access token when the
          current one expires. Unlike access tokens, refresh tokens are
          typically long-lived and can be used multiple times.
        </p>
        <p>
          When an access token expires, the client can use the refresh token to
          request a new access token from the server. This process is known as
          token refreshing or token renewal. The server verifies the refresh
          token's validity and, if successful, issues a new access token to the
          client. This helps maintain seamless user sessions without requiring
          the user to reauthenticate each time the access token expires.
        </p>
        <p className="mt-2">
          <span className="font-bold">Storage on the client-side:</span>Access
          tokens: Store access tokens in short-term storage, such as browser
          memory using JavaScript variables or HTTP-only cookies. This prevents
          cross-site scripting XSS attacks and minimizes the exposure of the
          access token. Refresh tokens: Store refresh tokens in more secure and
          long-term storage, such as an HTTP-only cookie or secure local
          storage. These tokens are used less frequently and have a longer
          lifespan, so they require stronger protection.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="font-bold font-xl">Compare SQL and NoSQL databases?</h1>
        <p className="mt-4">
          <span className="font-bold mt-2">Sql Database</span>
        </p>
        <ul className="list-disc ">
          <li>
            Databases are categorized as Relational Database Management System
            RDBMS.
          </li>
          <li>SQL databases have fixed or static or predefined schema.</li>
          <li>
            SQL databases display data in form of tables so it is known as
            table-based database.
          </li>
          <li>
            SQL databases use a powerful language "Structured Query Language" to
            define and manipulate the data.
          </li>
        </ul>
        <p className="mt-4">
          <span className="font-bold mt-2">NOSql Database</span>
        </p>
        <ul className="list-disc ">
          <li>
            NoSQL databases are categorized as Non-relational or distributed
            database system.
          </li>
          <li>NoSQL databases have dynamic schema.</li>
          <li>
            NoSQL databases display data as collection of key-value pair,
            documents, graph databases or wide-column stores.
          </li>
          <li>
            In NoSQL databases, collection of documents are used to query the
            data. It is also called unstructured query language. It varies from
            database to database.
          </li>
        </ul>

        <p className="mt-4">
          <span className="font-bold mt-2"></span>
        </p>
      </div>
      <div className="mt-6">
        <h1 className="font-bold font-xl"></h1>
        <p className="mt-4">
          <span className="font-bold mt-2"></span>
        </p>
      </div>
      <div className="mt-6">
        <h1 className="font-bold font-xl"></h1>
        <p className="mt-4">
          <span className="font-bold mt-2"></span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
