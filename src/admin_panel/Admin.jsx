
import React, { useEffect } from 'react';
import './admin.css'
import 'simplebar/dist/simplebar.min.css';


function AdminPanel() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Optionally remove the script after component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bcas System</title>
      <link rel="shortcut icon" type="image/png" href="" />
      <link rel="stylesheet" href="/css/styles.min.css" />

     

      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <aside className="left-sidebar">
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-center">
              <a href="/dash" className="text-nowrap logo-img">
                <img
                  src="/images/logos/logo1.png"
                  width={100}
                />
              </a>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8"></i>
              </div>
            </div>
            <nav className="sidebar-nav scroll-sidebar" data-simplebar>
              <ul id="sidebarnav">
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">Home</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./dash">
                    <i className="ti ti-layout-dashboard"></i>
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-building"></i>
                    <span className="hide-menu">Department</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-book"></i>
                    <span className="hide-menu">Module</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-users"></i>
                    <span className="hide-menu">Batch</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-id"></i>
                    <span className="hide-menu">Student details</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-id"></i>
                    <span className="hide-menu">Digital id</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-user"></i>
                    <span className="hide-menu">Lecturer</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-chalkboard"></i>
                    <span className="hide-menu">Assign to module</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-credit-card"></i>
                    <span className="hide-menu">Payment</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-calendar"></i>
                    <span className="hide-menu">TimeTable</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-clipboard-check"></i>
                    <span className="hide-menu">Attendance</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="/login">
                    <i className="ti ti-login"></i>
                    <span className="hide-menu">Login</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="./">
                    <i className="ti ti-user-plus"></i>
                    <span className="hide-menu">Register</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div className="body-wrapper">
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                    <i className="ti ti-menu-2"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                    <i className="ti ti-bell-ringing"></i>
                    <div className="notification bg-primary rounded-circle"></div>
                  </a>
                </li>
              </ul>
              <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <li className="nav-item dropdown">
                    <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/logos/user-1.jpg" alt="" width="35" height="35" className="rounded-circle" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                      <div className="message-body">
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                          <i className="ti ti-user fs-6"></i>
                          <p className="mb-0 fs-3">My Profile</p>
                        </a>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                          <i className="ti ti-mail fs-6"></i>
                          <p className="mb-0 fs-3">My Account</p>
                        </a>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                          <i className="ti ti-list-check fs-6"></i>
                          <p className="mb-0 fs-3">My Task</p>
                        </a>
                        <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-4">Welcome to Admin Panel</h5>
                <div className="card">
                  {/* <div className="card-body"></div> */}
                  <h5 className="card-body">Contents</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
    
  );
}

export default AdminPanel;
