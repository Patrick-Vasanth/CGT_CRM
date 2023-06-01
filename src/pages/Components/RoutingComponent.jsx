import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AdminReferral from "./AdminReferral";
import AdminStudent from "./AdminStudent";
import ReferralFullList from "./ReferralFullList";
import StudentFullList from "./StudentFullList";
import StudentProfile from "./StudentProfile";
import ReferralProfile from "./ReferralProfile";
import WithNavigation from "./WithNavigation";
import WithParam from "./WithParams";
import ReferralCreation from "./ReferralCreation";
import StudentCreation from "./StudentCreation";
import LoginPage from "./LoginPage";
import ReferralLogin from "./ReferralLogin";
import LoginCredentials from "./LoginCredentials";

export default function RoutingComponent() {
  const AdminLoginWithNavigation = WithNavigation(LoginPage);
  const StudentCreationWithNaviagtion = WithNavigation(StudentCreation);
  const ReferralCreationWithNaviagtion = WithNavigation(ReferralCreation);
  const AdminReferralWithNaviagtion = WithNavigation(AdminReferral);
  const AdminStudentWithNaviagtion = WithNavigation(AdminStudent);
  const ReferralFullListWithNaviagtion = WithNavigation(ReferralFullList);
  const StudentFullListWithNaviagtion = WithNavigation(StudentFullList);
  const HomePageWithNaviagtion = WithNavigation(HomePage);
  const StudentProfileWithNaviagtion = WithNavigation(StudentProfile);
  const ReferralProfileWithNaviagtion = WithNavigation(ReferralProfile);
  const ReferralLoginWithNavigation = WithNavigation(ReferralLogin);
  const LoginCredentialsWithNavigation = WithNavigation(LoginCredentials);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginCredentialsWithNavigation />}></Route>
          <Route
            path="/adminlogin"
            element={<AdminLoginWithNavigation />}
          ></Route>
          <Route
            path="/referrallogin"
            element={<ReferralLoginWithNavigation />}
          ></Route>
          <Route path="/home" element={<HomePageWithNaviagtion />}></Route>
          <Route
            path="/adminreferral"
            element={<AdminReferralWithNaviagtion />}
          ></Route>
          <Route
            path="/adminstudent"
            element={<AdminStudentWithNaviagtion />}
          ></Route>
          <Route
            path="/referralfulllist"
            element={<ReferralFullListWithNaviagtion />}
          ></Route>
          <Route
            path="/studentfulllist"
            element={<StudentFullListWithNaviagtion />}
          ></Route>
          <Route
            path="/referralcreation"
            element={<ReferralCreationWithNaviagtion />}
          ></Route>
          <Route
            path="/studentcreation"
            element={<StudentCreationWithNaviagtion />}
          ></Route>
          <Route
            path="/studentprofile"
            element={<StudentProfileWithNaviagtion />}
          ></Route>
          <Route
            path="/referralprofile"
            element={<ReferralProfileWithNaviagtion />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
