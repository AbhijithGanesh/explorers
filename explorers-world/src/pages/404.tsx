import * as React from "react";
import { Link } from "gatsby";

// styles

// markup
const NotFoundPage = () => {
  return (
    <main className="text-white font-2xl font-semibold">
      <title>Not Found🚀</title>
      <h1>
        This page is not found! please return home.
        <br />
        <Link to="/">Go home</Link>.
      </h1>
      Sorry{" "}
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>{" "}
      we couldn&39;t find what you were looking for.
      <br />
      {process.env.NODE_ENV === "development" ? (
        <>
          <br />
          Try creating a page in <code>src/pages/</code>.
          <br />
        </>
      ) : null}
    </main>
  );
};

export default NotFoundPage;
