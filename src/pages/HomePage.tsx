import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <Link to="/orders">go to orders</Link>
    </div>
  );
}
