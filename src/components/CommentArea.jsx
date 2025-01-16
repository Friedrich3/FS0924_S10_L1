import {useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const  CommentArea = function(props) {

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)


  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg1MGM5YzM2NmU0MzAwMTU1NGZhMGEiLCJpYXQiOjE3MzY3NzI4NTMsImV4cCI6MTczNzk4MjQ1M30.zfghVia2UNy3bX9ljYePbQ3MLx_N_vjFJy0ebz_Uht4",
          },
        }
      );
      
      if (response.ok) {
        let comments = await response.json();
        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
      setIsError(true)
    }



  }
  useEffect(()=>{
    if(props.asin !== null){
      fetchData()
    }else{
      setIsLoading(false)
      setIsError(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [props.asin])

    return (
      <div className="text-center">
        <h3>Comment Area</h3>
        {isLoading && <Loading />}
        {isError && <Error />}
        {/* todo */}

        {props.asin !== null &&
        <>
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
        </>
        }
      </div>
    );
  }

export default CommentArea;
