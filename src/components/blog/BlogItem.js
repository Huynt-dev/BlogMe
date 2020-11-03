import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
const BlogItem = (props) => {
  const { title, content, index } = props;
  const titleSplit = title.split(" ");
  const titleJoin = titleSplit.join("-");
  const text = titleJoin.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h4>{title}</h4>
        </CardTitle>
        <CardText>{content}</CardText>
        <Link className="btn btn-success" to={`/${text}/${index}`}>
          Đọc thêm
        </Link>
      </CardBody>
    </Card>
  );
};

export default BlogItem;
