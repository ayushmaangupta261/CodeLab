import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getStudentRooms } from "../../../../services/operations/instructorApi";

const StudentProjects = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  console.log("Location -> ",location);
  

  const user = useSelector((state) => state.auth);
  const token = user?.user?.accessToken;
  console.log("Token -> ",token)

  const { studentName, roomIds } = location.state || {};
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        if (!token) {
          toast.error("You must be logged in to view rooms");
          return;
        }
        if (roomIds && roomIds.length > 0) {
          const data = await dispatch(getStudentRooms(token, roomIds));
          if (data) {
            setRooms(data);
          }
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
        toast.error("Failed to load rooms");
      }
    };

    fetchRooms();
  }, [dispatch, token, roomIds, location?.pathname]);


 

  return (
    <div className="w-full px-6 py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Projects of {studentName || "Student"}
      </h2>

      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[65vh] overflow-y-auto pr-3 custom-scrollbar">
          {rooms.map((room, index) => (
            <div
              key={room._id || index}
              className="bg-gray-800 p-6 rounded-xl shadow-md border border-indigo-500 flex flex-col gap-y-5 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {room.projectName || "Untitled Project"}
              </h3>

              {room.college && (
                <div className="mb-2 flex flex-col gap-y-2">
                  <strong className="text-yellow-300">College:</strong>
                  <div className="ml-3 bg-gray-700 px-3 py-1 rounded-md shadow-sm">
                    {room.college.name || "N/A"}
                  </div>
                </div>
              )}

              {room.students && room.students.length > 0 && (
                <div className="mb-2">
                  <strong className="text-yellow-300">Students:</strong>
                  <ul className="mt-2 ml-3 list-inside text-gray-300 space-y-1">
                    {room.students.map((student) => (
                      <li
                        key={student._id}
                        className="bg-gray-700 px-3 py-1 rounded-md shadow-sm text-center"
                      >
                        {student.fullName}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Join Button */}
              <button
                className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={() =>
                  navigate(`/editor/${room.roomId}`, {
                    state: {
                      email: user?.user?.email,
                      projectName: room.projectName,
                      userType:"Instructor",
                      studentName
                    },
                  })
                }
              >
                Join
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg animate-pulse">
          No projects assigned to this student.
        </p>
      )}
    </div>
  );
};

export default StudentProjects;
