import React, { Fragment } from "react";
import "./Foods2.css";
import { Col, Row } from 'antd';
import { Image } from 'antd';
import { Space, Typography } from 'antd';
import Heart from "./Heart";

const { Text, Link } = Typography;

const FoodRender = (props) => {

    console.log('first');

  return (
    <Fragment>
      <Col key={props.food.id} className="food2-detail" span={20} offset={2}>
        <Row>
          <Col span={20} className="left2">
            <Image src={props.food.src} />
            <div className="left2-info">
              <Text> {props.food.name}</Text>
              <div>
                <Text delete>$ {props.food.discountPrice}</Text>
                <Text className="food-price">$ {props.food.price}</Text>
              </div>
            </div>
          </Col>
          <Heart />
        </Row>
      </Col>
    </Fragment>
  );
};

export default FoodRender;
