import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {

  cardSelection =() => {
    this.props.handler(this.props.book.asin)
  }

  render() {
    return (
      <>
        <Card
        // todo cambiare il setstate con una prop dal'padre che conterra id del libro cosi da matchare la cosa
          onClick={this.cardSelection}
          style={{ border: this.props.asin === this.props.book.asin ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
