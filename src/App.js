
import React from "react";
import "./styles.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Foxtail Millet",
    price: "£4.99",
    image: "/images/foxtail.jpg",
  },
  {
    id: 2,
    name: "Moringa Powder",
    price: "£6.49",
    image: "/images/moringa.jpg",
  },
  {
    id: 3,
    name: "Cinnamon Sticks",
    price: "£3.99",
    image: "/images/cinnamon.jpg",
  },
  {
    id: 4,
    name: "Pearl Millet",
    price: "£3.49",
    image: "/images/pearlmillet.jpg",
  },
  {
    id: 5,
    name: "Finger Millet",
    price: "£4.29",
    image: "/images/fingermillet.jpg",
  },
  {
    id: 6,
    name: "Little Millet",
    price: "£4.59",
    image: "/images/littlemillet.jpg",
  },
  {
    id: 7,
    name: "Barnyard Millet",
    price: "£3.79",
    image: "/images/barnyardmillet.jpg",
  },
  {
    id: 8,
    name: "Proso Millet",
    price: "£4.19",
    image: "/images/prosomillet.jpg",
  },
  {
    id: 9,
    name: "Brown Top Millet",
    price: "£4.89",
    image: "/images/browntopmillet.jpg",
  },
  {
    id: 10,
    name: "Dry Ginger Powder",
    price: "£5.99",
    image: "/images/dryginger.jpg",
  },
  {
    id: 11,
    name: "Turmeric Powder",
    price: "£3.29",
    image: "/images/turmeric.jpg",
  },
  {
    id: 12,
    name: "Black Pepper",
    price: "£4.59",
    image: "/images/blackpepper.jpg",
  },
  {
    id: 13,
    name: "Cardamom Pods",
    price: "£7.99",
    image: "/images/cardamom.jpg",
  }
];

export default function LaxmiramanHome() {
  return (
    <div className="container">
      <header className="header">
        <img src="/images/banner.jpg" alt="Laxmiraman Banner" className="banner-image" />
        <h1 className="title">Laxmiraman</h1>
        <p className="subtitle">
          Nature's Finest — Millets, Spices & Superfoods from Our Indian Farms to Your Table
        </p>
      </header>

      <section className="product-grid">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <CardContent className="product-content">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <Button className="add-to-cart">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
