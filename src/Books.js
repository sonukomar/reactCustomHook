import { useApiCall } from "./useApiCall";

export const Books = () => {
  const data = useApiCall(
    "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
  );
  return (
    <>
      <h2>Book:</h2>
      {data &&
        data?.map((obj) => {
          return (
            <div className="books">
              <strong>
                <span>Name: </span>
              </strong>{" "}
              <span>{obj.name}</span>
              &nbsp;&nbsp;
              <strong>
                <span>City:</span>
              </strong>{" "}
              <span>{obj.city}</span>
              <br />
              <br />
            </div>
          );
        })}
      {!data && "Loading ..."}
    </>
  );
};
