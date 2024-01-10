import { FaUserShield } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SectionTitle from "../../components/section components/SectionTitle";
import useUser from "../../hooks/useUser";

const Users = () => {
  const { users, hanldeMakeAdmin, handleRemoveAdmin, hanldeDeleteUser} = useUser()

  return (
    <div className="py-4">
      <SectionTitle
        heading={`Total users: ${users?.length}`}
        sub_heading="Manage, Delete users"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>No. </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user?._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (user?.role === "user") {
                          hanldeMakeAdmin(user);
                        } else {
                          handleRemoveAdmin(user);
                        }
                      }}
                      className="p-2 rounded-md hover:bg-orange-500 text-2xl bg-orange-300 text-white transition-all"
                    >
                      {user.role === "user" ? (
                        <FaUsers></FaUsers>
                      ) : (
                        <FaUserShield></FaUserShield>
                      )}
                    </button>
                  </td>

                  <th>
                    <button
                      onClick={() => hanldeDeleteUser(user._id)}
                      className="p-2 rounded-md transition-all hover:bg-red-700 hover:text-xl text-2xl bg-red-600 text-white"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
