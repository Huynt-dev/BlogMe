import React from "react";
import BlogItem from "./BlogItem.js";
import { Row, Col } from "reactstrap";
import Pagination from "react-js-pagination";
const dataBlog = [
  {
    title: "React router",
    content: "Hướng dẫn sử dụng React router để xây dựng website có nhiều trang"
  },
  {
    title: "Hướng dẫn sử dụng Storybook",
    content:
      "Hướng dẫn sử dụng Storybook để viết document cho các Component trong project."
  },
  {
    title: "propTypes",
    content: "Hướng dẫn sử dụng propTypes để validate các props của Component"
  }
];

const Blog = () => {
  return (
    <Row>
      {dataBlog.map((data, index) => {
        return (
          <Col className={"mt-4"} xl={4} lg={4} md={6} sm={12}>
            <BlogItem index={index} title={data.title} content={data.content} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Blog;
