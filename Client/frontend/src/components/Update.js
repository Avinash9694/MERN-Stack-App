import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();
  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:8080/api/v1/${id}`, {
      method: "GET",
    });
    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setError("");

      setName(result.users.name);
      setEmail(result.users.email);
      setAge(result.users.age);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };

    const response = await fetch(`http://localhost:8080/api/v1/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setError("");
      setName("");
      setEmail("");
      setAge("");
      navigate("/all");
    }
  };

  useEffect(() => {
    getSingleUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container my-2">
        {error && <div className="alert alert-danger">{error}</div>}
        <h2 className="text-center">Edit the data</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </>
  );
};
export default Update;
