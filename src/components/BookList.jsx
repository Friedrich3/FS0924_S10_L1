import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    search: {
      searchQuery: "",
    },
    selected: {
      bookAsin: null,
    },
  };

  handleBookAsin = (asin) =>{
    this.setState({
      selected:{
        bookAsin : asin
      }
    })
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.search.searchQuery}
                onChange={(e) =>
                  this.setState({ search: { searchQuery: e.target.value } })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col className="col-10">
            <Row>
              <h2>BookList</h2>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.search.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={3} key={b.asin}>
                    <SingleBook book={b} handler={this.handleBookAsin} asin={this.state.selected.bookAsin}/>
                  </Col>
                ))}
            </Row>
          </Col>
          <Col className="col-2 text-center">
            <CommentArea asin={this.state.selected.bookAsin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
