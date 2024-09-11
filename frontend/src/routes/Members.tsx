import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { LoginContext } from "../Contexts/LoginContext";

type Member = {
  id: number;
  name: string;
  studentId: string;
  email: string;
  phoneNumber: string;
  department: string;
  year: string;
};

function Members() {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const [members, setMembers] = useState<Member[]>([]); // State to store members
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]); // State to store filtered members
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term
  const [loading, setLoading] = useState<boolean>(true); // State for loading status

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token, redirect to login
      navigate("/login");
    } else {
      try {
        // Decode token and check expiration
        const decodedToken = jwtDecode(token) as { exp: number };
        const currentTime = Date.now() / 1000; // Current time in seconds

        if (decodedToken.exp < currentTime) {
          // Token expired, redirect to login
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          // Fetch members if the user is logged in
          fetchMembers();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        // In case the token is invalid, redirect to login
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [navigate]);

  // Fetch members from Strapi (public GET)
  const fetchMembers = async () => {
    try {
      const response = await axios.get("https://strapi.smithdrive.space/api/members");
      const membersData = response.data.data.map((item: any) => ({
        id: item.id,
        name: item.attributes.name,
        studentId: item.attributes.studentId,
        email: item.attributes.email,
        phoneNumber: item.attributes.phoneNumber,
        department: item.attributes.department,
        year: item.attributes.year,
      }));
      setMembers(membersData); // Update the state with members data
      setFilteredMembers(membersData); // Set filteredMembers initially to the full list
      setLoading(false); // Set loading to false
    } catch (error) {
      console.error("Error fetching members:", error);
      setLoading(false); // Set loading to false even on error
    }
  };

  // Handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter members based on the search term
    const filtered = members.filter((member) =>
      member.name.toLowerCase().includes(searchValue)
    );
    setFilteredMembers(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 font-bold">Members Page</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 p-2 rounded-md mb-4 w-full"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Student ID</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone Number</th>
                <th className="py-2 px-4 border-b">Department</th>
                <th className="py-2 px-4 border-b">Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{member.name}</td>
                    <td className="py-2 px-4 border-b">{member.studentId}</td>
                    <td className="py-2 px-4 border-b">{member.email}</td>
                    <td className="py-2 px-4 border-b">{member.phoneNumber}</td>
                    <td className="py-2 px-4 border-b">{member.department}</td>
                    <td className="py-2 px-4 border-b">{member.year}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-4 text-center">
                    No members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Members;
