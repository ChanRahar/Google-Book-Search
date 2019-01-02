import React from "react";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

const block = {
  display:"block",
  margin: "0 auto"
}

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function Booklist({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the Book api call
export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  ingredients,
  href,
  button,
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="md-3">
            <img style ={block} className="rounded" src={thumbnail} />
          </Col>
          <Col size="md-9">
            <Button
              type="primary"
              size="btn-sm"
              onClick={onClick}>
              {button}
            </Button>
            <a rel="noreferrer noopener" target="_blank" href={href} >
            <Button
              type="secondaryy"
              size="btn-sm">
              View
            </Button>
            </a>
            <h3>{title}</h3>
            <p>Ingredients: {ingredients}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}