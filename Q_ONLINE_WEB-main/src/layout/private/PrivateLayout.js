import React, { Fragment } from 'react';
import SideBar from '../../components/Private/SideBar';
import NavBar from '../../components/Private/NarBar';
import Footer from '../../components/Private/Footer';
import '../../style/private.css';

function PrivateLayout(props) {
  return (
    <Fragment>
      <SideBar />
      <div className="main-private-layout">
        <NavBar />
        <div className="main-content-private-layout w-full p-4">{props.children}</div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default PrivateLayout;
