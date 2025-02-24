import FootbarComponent from "../../../Components/User/UserFooter/FooterComponent";
import { Star, MapPin } from "lucide-react";
import EmployerNavbar from "../../../Components/User/UserNavbar/EmployerNavbar";
import EmployerSkillSideBar from "../../../Components/User/UserNavbar/EmployerSkillSideBar";

interface Worker {
  id: number;
  name: string;
  role: string;
  rating: number;
  status: "active" | "inactive";
  image: string;
  location: string;
}

const ClientHome = () => {
  const workers: Worker[] = [
    {
      id: 1,
      name: "Vijay",
      role: "Plumbing | Electrician",
      rating: 4.0,
      status: "active",
      image: "/public/assets/worker-avatar.png",
      location: "Kondotty",
    },
    {
      id: 2,
      name: "Ashik Khan",
      role: "Plumbing | Electrician",
      rating: 4.0,
      status: "active",
      image: "/public/assets/worker-avatar.png",
      location: "Kakkanad",
    },
    {
      id: 3,
      name: "Salman",
      role: "Plumbing | Electrician",
      rating: 4.0,
      status: "active",
      image: "/public/assets/worker-avatar.png",
      location: "Kottakkal",
    },
    {
      id: 4,
      name: "Ajith",
      role: "Plumbing | Electrician",
      rating: 4.0,
      status: "active",
      image: "/public/assets/worker-avatar.png",
      location: "Kottakkal",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <EmployerNavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-4 sm:py-8 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar */}

          <EmployerSkillSideBar />

          {/* Worker Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workers.map((worker) => (
              <div key={worker.id} className="bg-purple-50 rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={worker.image}
                    alt={worker.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium truncate">{worker.name}</h3>
                      <div className="flex items-center shrink-0 ml-2">
                        <span className="mr-1">{worker.rating}</span>
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {worker.role}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 text-gray-600 mr-1 shrink-0" />
                      <span className="truncate">{worker.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      worker.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {worker.status}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-1 text-purple-600 border border-purple-600 rounded-full text-sm">
                      View details
                    </button>
                    <button className="px-4 py-1 bg-purple-600 text-white rounded-full text-sm">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FootbarComponent />
    </div>
  );
};

export default ClientHome;
