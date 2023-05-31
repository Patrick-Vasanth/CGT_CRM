import "./Assest/Style.css";
import NavBar from "./NavBar";
import Form from "react-bootstrap/Form";
import { FiSearch } from "react-icons/fi";

export default function ReferralFullList() {
  return (
    <>
      <NavBar />
      <div className="admin-referral">
        <div className="bodyBar1">
          <h3 className="bodyBarTitle">Students List</h3>
          <Form className="search-input">
            <Form.Control
              type="search"
              placeholder="Referral Search"
              className=" search"
            />
            <FiSearch className="searchIcon" />
          </Form>
        </div>
        <div className="studentTableData">
          <table className="studentTable table-striped">
            <thead className="studentTableHeading">
              <tr className="studentHeading">
                <th className="studentHead">ID</th>
                <th className="studentHead">Student Name</th>
                <th className="studentHead">Course</th>
                <th className="studentHead">Referral Name</th>
                <th className="studentHead">Amount Pending</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr>
                <td className="student-body">001</td>
                <td className="student-body">Patrick</td>
                <td className="student-body"> Front ENd Development</td>
                <td className="student-body">Tamizh</td>
                <td className="student-body">10000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
