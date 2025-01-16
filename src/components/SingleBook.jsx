
import { Card } from 'react-bootstrap'

const SingleBook = function (props) {

  const cardSelection =() => {
    if(props.asin !== props.book.asin){
      props.setBookAsin(props.book.asin)
    }
    else{
      props.setBookAsin(null)
  }}


    return (
      <>
        <Card
        // todo cambiare il setstate con una prop dal'padre che conterra id del libro cosi da matchare la cosa
          onClick={cardSelection}
          style={{ border: props.asin === props.book.asin ? '3px solid green' : 'none' }}
          data-testid='singleBook'
        >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }


export default SingleBook

