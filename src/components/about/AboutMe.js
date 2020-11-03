import React from "react";
import { Row, Col } from "reactstrap";

const AboutMe = () => {
  return (
    <Row>
      <Col className="mt-4">
        <h1 className="border-bottom border-dark">HELLO WORLD</h1>
        <h3 className="mt-4">THÔNG TIN CÁ NHÂN:</h3>
        <p>
          <strong>FULL NAME:</strong> Nguyễn Tuấn Huy
        </p>
        <p>
          <strong>EMAIL:</strong> huynt.me@gmail.com
        </p>
        <h3 className="mt-4">MỤC TIÊU NGHỀ NGHIỆP:</h3>
        <p>
          Trở thành một developer ReactJS đang là mục tiêu đầu tiên của tôi ngay
          lúc này
        </p>
        <h3 className="mt-4">KINH NGHIỆM LÀM VIỆC:</h3>
        update...
      </Col>
    </Row>
  );
};

export default AboutMe;
