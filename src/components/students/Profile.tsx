import { useNavigate } from 'react-router-dom';
import {logoutUser} from "../../api/mutations/authMutations";
import { useQuery } from "react-query";
import * as api from "../../api/queries/authQueries";

function Profile() {
  const navigate = useNavigate();
  const onLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const data = useQuery("profile", () => api.myProfile);
  console.log(data);
  return (
    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://picsum.photos/200/300"
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              Welcome 
              </h1>
              <button
                className="mt-2 bg-red-700 text-white rounded-sm p-3"
                onClick={onLogout}
              >
                Odlhásenie
              </button>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 text-xl">
                      <h1>Meno: FOO</h1>
                      
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4"></div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
