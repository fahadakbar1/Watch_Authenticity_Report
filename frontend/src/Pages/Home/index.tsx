import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Sample data for authenticity reports
  const [reports, setReports] = useState([
    {
      id: 1,
      brand: "Rolex",
      model: "Rolex123",
      imageUrl:"data:image/jpeg;base64,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"
    },
  ]); // Replace with your actual data source

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(10);

  // Calculate indexes for pagination
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Fetch your authenticity reports data here and set it using setReports
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      // Example: const response = await fetch("/api/authenticityReports");
      // const data = await response.json();
      // setReports(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Authenticity Reports</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Watch Brand
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Watch Model
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Watch Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              View
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentReports.map((report) => (
            <tr key={report.id}>
              <td className="px-6 py-4 whitespace-nowrap">{report.brand}</td>
              <td className="px-6 py-4 whitespace-nowrap">{report.model}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={report.imageUrl}
                  alt="Watch"
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={`/view-report/${report.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <div>
          <button
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className={`${
              currentPage === 1
                ? "bg-gray-300"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white py-2 px-4 rounded mr-2 focus:outline-none`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            onClick={() =>
              currentPage < Math.ceil(reports.length / reportsPerPage) &&
              handlePageChange(currentPage + 1)
            }
            className={`${
              currentPage === Math.ceil(reports.length / reportsPerPage)
                ? "bg-gray-300"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white py-2 px-4 rounded focus:outline-none`}
            disabled={
              currentPage === Math.ceil(reports.length / reportsPerPage)
            }
          >
            Next
          </button>
        </div>
        {/* Display the "Create New Report" button for admin users */}
        {/* {isAdmin && (
          <Link
            to="/create-report"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none"
          >
            Create New Report
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Home;
