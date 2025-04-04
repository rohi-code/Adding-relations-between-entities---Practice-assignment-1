import React from "react";

export default function DestinationCard({ destination }) {
  const { name, location, image, description, price } = destination;

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>{location}</h4>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
}
