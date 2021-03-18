import React from "react";
import Card from "./Card";

export const CardList = (props) => {
  return (
    <div>
      {props.profile.map((profile, key) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};
