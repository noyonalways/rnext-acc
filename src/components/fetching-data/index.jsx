import { fetchComments } from "@/utils/fetchComments";
import { useEffect, useState } from "react";

const FetchingData = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // fetchComments(1).then((comments) => {
    //   setComments(comments);
    // });
    let isMounted = false;
    const startFetching = async () => {
      const comments = await fetchComments(1);
      if (!isMounted) {
        setComments(comments);
      }
    };
    startFetching();
    return () => {
      isMounted = true;
    };
  }, []);

  return (
    <div>
      <h1>Components</h1>
      <div className="flex flex-col">
        {comments.map((comment) => (
          <div className="flex space-x-1" key={comment.id}>
            <p>{comment.name} - </p>
            <p>{comment.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingData;
