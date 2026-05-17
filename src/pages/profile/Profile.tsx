import { ChevronRight, Pen } from "lucide-react";
import { useState, useEffect } from "react";
import { getUserInfo } from "../../api/UserApi";
import type { UserDto } from "../../types/profile";
import { NavLink } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState<UserDto>();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await getUserInfo();

    console.log("user", response);
    setUser(response.result);
  };

  const photoUrl = user?.profilePhoto
    ? `${import.meta.env.VITE_API_URL}/${user.profilePhoto}`
    : undefined;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Profile</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Profile
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-12 col-xxl-12 col-xl-12 col-lg-12">
            <div className="card height-equal">
              <div className="card-header justify-between">
                <h4 className="">Personal Information</h4>

                <NavLink to={"/ProfileUpdate"} className="btn btn-warning"><Pen size={16} />Update Profile</NavLink>
              </div>
              <div className="card-body pt-15">
                <div className="text-center mb-10">
                  <div className="avatar avatar-big radius-100">
                    <img
                      className="radius-100"
                      src={photoUrl}
                      alt="image not found"
                    />
                  </div>
                </div>
                <div className="profile-info text-center mb-15">
                  <h3 className="mb-5">
                    {user?.lastName} {user?.firstName}
                  </h3>
                  {/* <h6 className="text-body mb-10">_</h6> */}
                  {/* <div className="d-flex-center gap-15">
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-warning-light fs-16"
                    >
                      <i className="ri-twitter-x-line"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-success-light fs-16"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-info-light fs-16"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-danger-light fs-16"
                    >
                      <i className="ri-whatsapp-line"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn-icon btn-primary-light fs-16"
                    >
                      <i className="ri-telegram-2-fill"></i>
                    </a>
                  </div> */}
                </div>
                <div className="table-responsive mb-15">
                  <table className="table" style={{ textAlign: "left" }}>
                    <tbody>
                      {/* <tr>
                        <td style={{ minWidth: "105px" }}>Employee ID:</td>
                        <td>
                          <div className="text-heading">MD-0001</div>
                        </td>
                      </tr> */}
                      <tr>
                        <td>Date Joined</td>
                        <td>
                          <div className="text-heading">
                            {formatDate(user?.dateCreated)}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          <div className="text-heading">
                            {user?.email || "_"}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>
                          <div className="text-heading">
                            {user?.phone || "_"}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Birthday</td>
                        <td>
                          <div className="text-heading">
                            {formatDate(user?.dateOfBirth) || "_"}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>
                          <div className="text-heading">
                            {user?.gender || "_"}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          <div className="text-heading">
                            {user?.address || "_"}, {user?.city}, {user?.state},{" "}
                            {user?.country}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Job Category</td>
                        <td>
                          <div className="text-heading">
                            {user?.jobCategory}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Job Sector</td>
                        <td>
                          <div className="text-heading">
                            {user?.jobSector}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="text-center">
                  <button className="btn btn-primary" type="button">
                    Send Message
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
