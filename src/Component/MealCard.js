import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const MealCard = (props) => {
  return (
      <Card
        hoverable
        className="mealCard"
        cover={<img alt="example" src={props.img} />}
      >
        <Meta title={props.name} description={props.mealCatogory} />
      </Card>
  );
};

export default MealCard;
