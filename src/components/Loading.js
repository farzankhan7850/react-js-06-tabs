import React, { useState } from "react";
export default function Loading() {
  const [dot, setDot] = useState(false);

  setTimeout(() => {
    setDot(!dot);
  }, 400);

  return (
    <section className="loading section">
      <h1>
        Loading.
        <span>
          {dot && "."}
          {dot && "."}
        </span>
      </h1>
    </section>
  );
}
