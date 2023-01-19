import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1 className="home-order-link">
        <Link to="/orders">go to orders</Link>
      </h1>
    </div>
  );
}
