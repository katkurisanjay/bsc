import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChartBarIcon, CalendarDaysIcon, UsersIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [pin, setPin] = useState("");
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (auth) {
      const data = JSON.parse(localStorage.getItem("bs_bookings") || "[]");
      setBookings(data);
    }
  }, [auth]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === "1234") {
      setAuth(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const updateStatus = (id, newStatus) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
    setBookings(updated);
    localStorage.setItem("bs_bookings", JSON.stringify(updated));
  };

  if (!auth) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-card w-full max-w-sm border border-gray-100">
          <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="font-display font-bold text-xl text-saffron">Admin</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-center mb-6">BS Caters Admin</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                placeholder="Enter PIN (1234)" 
                value={pin}
                onChange={e => setPin(e.target.value)}
                className={`form-input text-center tracking-widest text-lg ${error ? 'border-red-500' : ''}`}
                autoFocus
              />
              {error && <p className="text-red-500 text-xs font-body text-center mt-2">Incorrect PIN</p>}
            </div>
            <button type="submit" className="btn-primary w-full justify-center py-3">Login</button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/" className="font-body text-sm text-gray-500 hover:text-saffron transition-colors">← Back to Site</Link>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Stats
  const totalBookings = bookings.length;
  const pendingCount = bookings.filter(b => b.status === "Pending").length;
  const totalGuests = bookings.reduce((acc, curr) => acc + parseInt(curr.guests || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 font-body">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
              <ArrowLeftIcon className="w-5 h-5" />
            </Link>
            <h1 className="font-display font-bold text-xl text-[#1A1A1A]">Admin Dashboard</h1>
          </div>
          <button onClick={() => setAuth(false)} className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors">
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="admin-stat-card border-l-saffron">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Total Bookings</p>
                <h3 className="text-3xl font-bold text-[#1A1A1A]">{totalBookings}</h3>
              </div>
              <div className="p-3 bg-saffron/10 rounded-xl text-saffron">
                <ChartBarIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="admin-stat-card border-l-yellow-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Pending Requests</p>
                <h3 className="text-3xl font-bold text-[#1A1A1A]">{pendingCount}</h3>
              </div>
              <div className="p-3 bg-yellow-100 rounded-xl text-yellow-600">
                <CalendarDaysIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="admin-stat-card border-l-green-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Total Guests Expected</p>
                <h3 className="text-3xl font-bold text-[#1A1A1A]">{totalGuests.toLocaleString()}</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-xl text-green-600">
                <UsersIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="font-display font-bold text-lg">Recent Bookings</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold border-b">Client Info</th>
                  <th className="p-4 font-semibold border-b">Event Details</th>
                  <th className="p-4 font-semibold border-b">Location</th>
                  <th className="p-4 font-semibold border-b">Status</th>
                  <th className="p-4 font-semibold border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500">No bookings found.</td>
                  </tr>
                ) : (
                  bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4">
                        <div className="font-medium text-[#1A1A1A]">{b.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{b.phone}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-[#1A1A1A]">{b.eventType}</div>
                        <div className="text-xs text-gray-500 mt-1">{b.date} • {b.guests} guests</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{b.city}</td>
                      <td className="p-4">
                        <select 
                          value={b.status} 
                          onChange={(e) => updateStatus(b.id, e.target.value)}
                          className={`status-badge border outline-none cursor-pointer ${
                            b.status === "Pending" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                            b.status === "Confirmed" ? "bg-blue-100 text-blue-800 border-blue-200" :
                            b.status === "Completed" ? "bg-green-100 text-green-800 border-green-200" :
                            "bg-red-100 text-red-800 border-red-200"
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <a 
                          href={`https://wa.me/91${b.phone.replace(/\D/g,'')}?text=Hello ${b.name}, regarding your catering booking with Bijjala Satish...`}
                          target="_blank" rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#25D366] hover:underline"
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
