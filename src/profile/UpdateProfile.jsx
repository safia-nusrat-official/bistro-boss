import { TbUpload } from "react-icons/tb";
import { FiEdit2 } from "react-icons/fi";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Btn from "../components/Btn";
import "./update.css";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, UpdateEmailAddress, UpdateProfile } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate()
  const handleUpdate = (e) => {
    e.preventDefault();
    navigate("/profile")
  };
  const handleUploadClick = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <section
      className="md:p-20 pt-16 bg-cover bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: `url(${user?.photoURL})` }}
    >
      <form onSubmit={handleUpdate} className="flex gap-6 md:flex-nowrap flex-wrap bg-opacity-15 rounded-md backdrop-blur-md text-white bg-black md:p-20 p-8 justify-between items-center border-[1px] border-white/25">
        <div>
          <img
            className="rounded-full w-48 aspect-square"
            src={user?.photoURL}
            alt=""
          />
          <div className="border-b-4 border-white bg-black/25  rounded-md mt-6 w-full flex justify-between p-4">
            <span>Upload Image</span>
            <button>
              {file ? (
                `${file.name}`
              ) : (
                <TbUpload className="text-3xl"></TbUpload>
              )}
            </button>
            <input
              type="file"
              ref={inputRef}
              className="w-full hidden"
            />
          </div>
        </div>
        <div className="flex flex-col font-clash-display ">
          <div className="relative">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              className="text-6xl outline-none w-full bg-transparent border-b-[1px] mb-6 font-semibold"
              defaultValue={user?.displayName}
            ></input>
            <FiEdit2 className="text-2xl top-1/3 absolute right-0"></FiEdit2>
          </div>
          <div className="relative">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              className="text-2xl outline-none w-full bg-transparent border-b-[1px] mb-6"
              defaultValue={user?.email}
            ></input>
            <FiEdit2 className="text-2xl top-0 absolute right-0"></FiEdit2>
          </div>
          <Btn dark={false} onClick={handleUpdate}>
            Save Changes
          </Btn>
        </div>
      </form>
    </section>
  );
};

export default UpdateProfile;
