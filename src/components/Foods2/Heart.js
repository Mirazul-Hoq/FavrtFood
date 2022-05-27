import React, { Fragment, useState } from "react";
import { Col, Row } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { HeartFilled } from '@ant-design/icons';

const Heart = (props) => {

    const [fav, setFav] = useState(false);
    const handleFav = () => {
		setFav((prev) => !prev);
	};

  return (
    <Fragment>
      <Col span={4} justify="center" align="middle">
        {/* <div onClick={() => setFav((prev) => !prev)}>
										{!fav && <HeartOutlined />}
									</div>
									<div
										onClick={() => setFav((prev) => !prev)}
										style={{ color: 'red' }}
									>
										{fav && <HeartFilled />}
									</div> */}

        {!fav ? (
          <div onClick={handleFav}>
            <HeartOutlined />
          </div>
        ) : (
          <div onClick={handleFav} style={{ color: "red" }}>
            <HeartFilled />
          </div>
        )}
      </Col>
    </Fragment>
  );
};

export default Heart;
