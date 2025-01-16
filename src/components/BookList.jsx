import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = function (props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookAsin, setBookAsin] = useState(null);

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col 9">
          <h2>BookList</h2>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={8} className="text-center">
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
            <Row className=" mt-3">
                
                  {props.books
                    .filter((b) => b.title.toLowerCase().includes(searchQuery))
                    .map((b) => (
                      <Col xs={12} md={3} key={b.asin}>
                        <SingleBook
                          book={b}
                          setBookAsin={setBookAsin}
                          asin={bookAsin}
                        />
                      </Col>
                    ))}
            </Row>
          </Col>
          <Col className="col-3 text-center">
            <CommentArea asin={bookAsin} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
