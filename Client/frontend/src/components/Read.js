import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = useCallback(async () => {
    const response = await fetch("http://localhost:8080/api/v1/");
    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setError("");
      setData(result.users);
    }
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [getData]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
      }
      if (response.ok) {
        setError("Deleted successfully");
        setTimeout(() => {
          setError("");
          getData();
        }, 2000);
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
  };

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center">All data</h2>
      <div className="row">
        {data.length > 0 ? (
          data.map((ele) => (
            <div className="col-3" key={ele._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-secondary">
                    {ele.age}
                  </h6>
                  <Link
                    to="/all"
                    className="card-link"
                    onClick={() => {
                      handleDelete(ele._id);
                    }}
                  >
                    Delete
                  </Link>
                  <Link to={`/${ele._id}`} className="card-link">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Read;
