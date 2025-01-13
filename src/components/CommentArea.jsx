/* eslint-disable no-unused-vars */
import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg1MGM5YzM2NmU0MzAwMTU1NGZhMGEiLCJpYXQiOjE3MzY3NzI4NTMsImV4cCI6MTczNzk4MjQ1M30.zfghVia2UNy3bX9ljYePbQ3MLx_N_vjFJy0ebz_Uht4",
          },
        }
      );
      
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }



  }

  componentDidMount () {
    if(this.props.asin !== null){
      this.fetchData()
    }else{
      this.setState({ isLoading: false, isError: false });
    }
    }

componentDidUpdate(prevProps,prevState){
if(prevProps.asin !== this.props.asin)
  this.fetchData()
}

  render() {
    return (
      <div className="text-center">
        <h3>CommentArea</h3>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {/* todo */}

        {this.props.asin !== null &&
        <AddComment asin={this.props.asin} />
        }
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
