import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddManager = () => {
  const [managerName, setManagerName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankGuranteeExpireDate, setBankGuranteeExpireDate] = useState("");
  const [company, setCompany] = useState("");
  const [bankGuranteeCode, setBankGuranteeCode] = useState("");
  const [bankGuranteeAmount, setBankGuranteeAmount] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    const formData = {
      managerName: managerName,
      bankName: bankName,
      bankGuranteeExpireDate: bankGuranteeExpireDate,
      company: company,
      bankGuranteeCode: bankGuranteeCode,
      bankGuranteeAmount: bankGuranteeAmount,
      email: email,
    };

    if (
      managerName === "" ||
      bankName === "" ||
      bankGuranteeExpireDate === "" ||
      company === "" ||
      company === "Select Subject" ||
      bankGuranteeCode === "" ||
      bankGuranteeAmount === "" ||
      email === ""
    ) {
      alert("Please fill out all required fields...!");
    } else {
      if ( bankGuranteeAmount.length !== 10) {
        alert("Please check you  Bank Gurantee Amount...!");
      } else if (bankGuranteeCode.length !== 10 && bankGuranteeCode.length !== 12) {
        alert("Please check you Bank Gurantee Code...!");
      } else {
        axios
          .post("http://localhost:4001/v1/api/manager", formData)
          .then((res) => {
            console.log(res.data);
            history.replace("/");
          })
          .catch((err) => {
            console.lof(err);
          });
      }
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Manager Name"
          placeholder="Manager Name"
          onChange={(e) => setManagerName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Bank Name"
          placeholder="Bank Name"
          onChange={(e) => setBankName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="date"
          name="Bank Gurantee Code"
          onChange={(e) => setBankGuranteeCode(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Select Company"
          onChange={(e) => setCompany(e.target.value)}
        >
          <option selected>Select Company</option>
          <option value="Abans Finance">Abans Finance</option>
          <option value="Sampath Bank PLC">Sampath Bank PLC</option>
          <option value="IFC">IFC</option>
          <option value="Lanka Business Loan">Lanka Business Loan</option>
          <option value="Asian Development Bank">Asian Development Bank</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Bank Gurantee Code"
          placeholder="Bank Gurantee Code"
          onChange={(e) => setBankGuranteeCode(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Bank Gurantee Amount"
          placeholder="Bank Gurantee Amount"
          onChange={(e) => setBankGuranteeAmount(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="Email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddManager;
