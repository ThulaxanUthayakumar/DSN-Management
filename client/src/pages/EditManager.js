import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditManager = ({ match }) => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [managerName, setManagerName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankGuranteeExpireDate, setBankGuranteeExpireDate] = useState("");
  const [company, setCompany] = useState("");
  const [bankGuranteeCode, setBankGuranteeCode] = useState("");
  const [bankGuranteeAmount, setBankGuranteeAmount] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4001/v1/api/manager/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [match.params.id]);

  const handleSubmit = async () => {
    try {
      const formData = {
        managerName: managerName ? managerName : data.managerName,
        bankName: bankName ? bankName: data.bankName,
        bankGuranteeExpireDate: bankGuranteeExpireDate ? bankGuranteeExpireDate : data.bankGuranteeExpireDate,
        company: company ? company : data.company,
        bankGuranteeCode: bankGuranteeCode ? bankGuranteeCode : data.bankGuranteeCode,
        bankGuranteeAmount: bankGuranteeAmount ? bankGuranteeAmount : data.bankGuranteeAmount,
        email: email ? email : data.email,
      };
      console.log("data : ", formData)

      axios
      .put(`http://localhost:4001/v1/api/manager/${match.params.id}`, formData)
      .then((res) => {
        console.log(res.data);
        history.replace("/");
      })
      .catch((err) => {
        console.lof(err);
      });
    } catch (error) {
      console.log(error);
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
          defaultValue={data.managerName}
          onChange={(e) => setManagerName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Bank Name"
          placeholder="Bank Name"
          defaultValue={data.bankName}
          onChange={(e) => setBankName(e.target.value )}
        />
      </div>
      <div className="mb-3">
      <input
          className="form-control"
          type="date"
          name="Bank Gurantee Expire Date"
          defaultValue={data.bankGuranteeExpireDate}
          onChange={(e) => setBankGuranteeExpireDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Select Company"
          value={data.company}
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
          defaultValue={data.bankGuranteeCode}
          onChange={(e) => setBankGuranteeCode(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Bank Gurantee Amount"
          placeholder="Bank Gurantee Amount"
          defaultValue={data.bankGuranteeAmount}
          onChange={(e) => setBankGuranteeAmount(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="Email"
          placeholder="Email"
          defaultValue={data.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditManager;
