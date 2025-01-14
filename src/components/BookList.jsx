import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = function (props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookAsin, setBookAsin] = useState(null);

  return (
    <>
      <Container>
        <Row>
          <Col className="col 10">
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={6} className="text-center">
                <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="Cerca un libro"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              <Col className="col-10">
                <Row>
                  <h2>BookList</h2>
                  {props.books
                    .filter((b) => b.title.toLowerCase().includes(searchQuery))
                    .map((b) => (
                      <Col xs={12} md={4} key={b.asin}>
                        <SingleBook
                          book={b}
                          setBookAsin={setBookAsin}
                          asin={bookAsin}
                        />
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="col-2 text-center">
            <CommentArea asin={bookAsin} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
