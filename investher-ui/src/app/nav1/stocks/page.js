// pages/nav1/Stocks.js
import Link from "next/link";

export default function Stocks() {
  return (
    <div>
      <h1>Eco-Friendly Stocks</h1>
      <p>Here are some eco-friendly stocks to consider...</p>
      {/* Add more content about stocks here */}
      <Link href="/">Back to Home</Link>
    </div>
  );
}
