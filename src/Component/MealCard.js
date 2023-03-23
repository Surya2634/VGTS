import React from "react";
import {useNavigate} from "react-router-dom"
import { Card } from "antd";
const { Meta } = Card;

const MealCard = (props) => {

  const navigate = useNavigate();

  const getDetail = () => {
    navigate('/details', {state: {id : props.id}})
  }

  return (
    <div onClick={getDetail}>
      <Card
        hoverable
        className="mealCard"
        cover={<img
          alt="example"
          src={props.img}
          style={{width: 200, height:200}}
        />}
      >
        <Meta title={props.name} description={props.mealCatogory} />
      </Card>
    </div>
  );
};

export default MealCard;
