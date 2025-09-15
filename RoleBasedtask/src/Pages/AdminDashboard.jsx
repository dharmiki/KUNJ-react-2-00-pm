import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const AdminDashboard = ({ setUser }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
          <button
            onClick={() => setUser(null)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
