import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <section
      className="md:p-20 bg-cover bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: `url(${user?.photoURL})` }}
    >
      <div className="flex gap-6 md:flex-nowrap flex-wrap bg-opacity-15 rounded-md backdrop-blur-md text-white bg-black p-20 justify-between">
        <img className="rounded-full w-48" src={user?.photoURL} alt="" />
        <div className="flex flex-col font-clash-display ">
          <h2 className="text-6xl font-semibold">{user?.displayName}</h2>
          <span className="text-2xl">{user?.email}</span>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/update-profile">
            <Btn dark={false}>Update Profile</Btn>
          </Link>
          <Btn dark={false}>Delete Profile</Btn>
        </div>
      </div>
    </section>
  );
};

export default Profile;
