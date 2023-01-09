import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";

const Home = () => {
  const [manager, setManager] = useState();

  useEffect(() => {
    getApiDate();
  }, []);

  const getApiDate = () => {
    axios
      .get(`http://localhost:4001/v1/api/manager`)
      .then((res) => {
        setManager(res.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const handleDelete = (id) => {
    console.log("id : ", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log("Done");
        axios
          .delete(`http://localhost:4001/v1/api/manager/${id}`)
          .then((res) => {
            console.log(res.data);
            getApiDate();
          })
          .catch((error) => {
            console.log(error.data);
          });
      } else {
        console.log("Closed");
      }
    });
  };
  return (
    <div className="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Manager Name</th>
            <th scope="col">Bank Name</th>
            <th scope="col">Bank Gurantee ExpireDate</th>
            <th scope="col">Company</th>
            <th scope="col">Bank Gurantee Code</th>
            <th scope="col">Bank bankGuranteeAmount</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {manager ? (
            manager.map((item) => (
              <tr>
                <td>{item.managerName}</td>
                <td>{item.bankName}</td>
                <td>{item.bankGuranteeExpireDate}</td>
                <td>{item.company}</td>
                <td>{item.bankGuranteeCode}</td>
                <td>{item.bankGuranteeAmount}</td>
                <td>{item.email}</td>
                <td>
                  <Link
                    to={`/edit/${item._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h1>Loading...!</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
