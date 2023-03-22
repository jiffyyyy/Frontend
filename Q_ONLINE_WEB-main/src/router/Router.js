import React, { Fragment } from "react";
import { connect } from "react-redux";
import { AUTHEN, USERINFO, AUTHORITIES } from "../actions/Authen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/public/PublicLayout";
import PrivateLayout from '../layout/private/PrivateLayout'
import Redirect from "../view/error/Redirect";
import AuthoritiesLayout from "../layout/authorities/AuthoritiesLayout";

//private
import MainTreatmentType from "../view/private/setting/treatmentType/MainTreatmentType";
import MainDoctor from "../view/private/setting/doctor/MainDoctor";
import FormDoctor from "../view/private/setting/doctor/form/FormDoctor";
import MainOpenSchedule from "../view/private/openSchedule/MainOpenSchedule";
import FormOpenSchedule from "../view/private/openSchedule/form/FormOpenSchedule";
import MainUser from "../../src/view/private/setting/user/MainUser";
import FormUser from "../view/private/setting/user/form/FormUser";
import Department from "../view/private/openSchedule/Department";

// public
import FormRegister from "../view/authentication/register/FormRegister";
import MainBook from "../view/public/book/MainBook";
import EditProfile from "../view/public/editProfile/EditProfile";
import EditPassword from "../view/public/editProfile/EditPassword";
import Queue from "../view/public/queue/Queue";
import MainHistory from "../view/public/history/MainHistory";
import Home from "../layout/public/Home";

//Authorities
import MainBookAuthor from "../view/authorities/book/MainBookAuthor";
import MainHistoryAuthor from "../view/authorities/history/MainHistoryAuthor";

function Router(props) {
  const role = props.auth.role ? parseInt(props.auth.role) :  1 ; // 1 = admin, 0 = user, 2= authorities

  return (
    <Fragment>
      <BrowserRouter>
        {role === 0 ? (
          <PublicLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/department" element={<Department />} />
              <Route path="/book-an-appointment" element={<MainBook />} />
              <Route
                path="/check-book-an-appointment"
                element={<MainHistory />}
              />
              <Route path="/register" element={<FormRegister />} />
              <Route
                path="/information"
                element={<h1>ข้อมูลทั่วไปโรงพยาบาล</h1>}
              />
              <Route path="/calendar" element={<h1>ปฏิทินการจอง</h1>} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/edit-password" element={<EditPassword />} />
              <Route path="/Q_user" element={<Queue />} />
              <Route path="*" element={<Redirect />} />
            </Routes>
          </PublicLayout>



        ) : role === 1 ? (
          <PrivateLayout>
            <Routes>
              <Route path="/" element={<h1>หลังบ้าน</h1>} />
              <Route path="/admin/book-an-appointment" element={<h1>จองคิว</h1>}/>
              <Route path="/department" element={<Department />} />
              <Route path="/admin/open-schedule"element={<MainOpenSchedule />}/>
              <Route path="/admin/open-schedule/form" element={<FormOpenSchedule />}/>
              <Route path="/admin/treatment-type"element={<MainTreatmentType />}/>
              <Route path="/admin/doctor" element={<MainDoctor />} />
              <Route path="/admin/doctor/form" element={<FormDoctor />} />
              <Route path="/admin/user" element={<MainUser />} />
              <Route path="/admin/user/form" element={<FormUser />} />
              <Route path="*" element={<Redirect />} />
            </Routes>
          </PrivateLayout>



        ) : (
          <AuthoritiesLayout>
            <Routes>
              <Route path="/" element={<h1>เจ้าหน้าที่</h1>} />
              <Route path="/author/book-an-appointment"element={<MainBookAuthor/>}/>
              <Route path="/author/history"element={<MainHistoryAuthor />}/>
            </Routes>
          </AuthoritiesLayout>



        )}
      </BrowserRouter>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.Authentication,
});

const mapDispatchToProps = (dispatch) => {
  return {
    AUTHEN: (id, idCard, fullname, role) =>
      dispatch(AUTHEN(id, idCard, fullname, role)),
    USERINFO: () => dispatch(USERINFO()),
    AUTHORITIES: (id, idCard, fullname, role) =>
      dispatch(AUTHORITIES(id, idCard, fullname, role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
