import { useEffect, useState } from "react";
import { useApiCall } from "./useApiCall";

export const Comments = () => {
  const comments = useApiCall("https://jsonplaceholder.typicode.com/comments");
  const [imageId, setImageId] = useState(0);
  const silder = () => {
    const length = comments.comments.length;
  };
  const increase = () => {
    return imageId < comments.length - 1
      ? setImageId(imageId + 1)
      : setImageId(0);
  };
  const decrease = () => {
    return imageId > comments.length - 1
      ? setImageId(imageId - 1)
      : setImageId(comments.length - 1);
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      console.log("image changing");
      setImageId(imageId + 1);
    }, 50000);
    return () => {
      clearInterval(interval);
    };
  }, [imageId]);

  return (
    <>
      <div className="comments">
        {true &&
          comments &&
          comments.map((e, index) => {
            return (
              <div
                className={imageId === index ? "comment" : "hidden"}
                key={`comment${index}`}
                id={`comment${index}`}
              >
                <div className="commentHeader">
                  <q>
                    <p>{e.body}</p>
                  </q>
                  {/* <p className="author">- {e.name}</p> */}
                </div>
                <div className="controls">
                  <button onClick={() => decrease()}> ⬅️</button>
                  <button onClick={() => increase()}> ➡️</button>
                </div>
              </div>
            );
          })}
        {!comments && (
          <div className="commentHeader">
            <q>
              <p>Loading ...</p>
            </q>
            {/* <p className="author">- {e.name}</p> */}
          </div>
        )}
      </div>
    </>
  );
};
