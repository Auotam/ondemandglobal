import { useEffect, useState } from 'react';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the components required for Chart.js
ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Alldata = ({ onFetchUserDetails }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalUsersToday, setTotalUsersToday] = useState(0);
  const [loginData, setLoginData] = useState({ labels: [], data: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const userData = useUserData();

  useEffect(() => {
    const fetchUsers = async () => {
      if (userData === null) {
        console.log('User data is null, skipping fetch.');
        return;
      }

      if (userData.user && userData.user.role === 'admin') {
        try {
          const response = await axios.get('/api/alldata');
          
          // Set users data
          const usersData = response.data.data;
          setUsers(usersData);
          setFilteredUsers(usersData);

          // Calculate total users today
          const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
          const usersToday = usersData.filter(user => user.createdAt.startsWith(today)).length;
          setTotalUsersToday(usersToday);

          // Prepare login data for graph
          const loginCountByDate = {};
          usersData.forEach(user => {
            const date = user.createdAt.split('T')[0]; // Extract date in YYYY-MM-DD format
            loginCountByDate[date] = (loginCountByDate[date] || 0) + 1;
          });

          const labels = Object.keys(loginCountByDate);
          const data = Object.values(loginCountByDate);
          setLoginData({ labels, data });

          setLoading(false);
        } catch (error) {
          console.error('Error fetching users:', error);
          setError(error.message || 'Failed to fetch users');
          setLoading(false);
        }
      } else {
        console.warn('Unauthorized access attempt');
        setError('Unauthorized');
        setLoading(false);
      }
    };

    fetchUsers();
  }, [userData]);

  const handleFetchDetails = (email) => {
    onFetchUserDetails(email); // Call the function passed via props
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filtered = users.filter(user => {
        const name = user.name?.toLowerCase() || '';
        const email = user.email?.toLowerCase() || '';
        const role = user.role?.toLowerCase() || '';
        const plan = user.plan?.toLowerCase() || '';
        return name.includes(query) ||
               email.includes(query) ||
               role.includes(query) ||
               plan.includes(query);
      });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Bar chart data
  const barChartData = {
    labels: loginData.labels,
    datasets: [
      {
        label: 'Total Logins Per Day',
        data: loginData.data,
        borderColor: '#0070f3',
        backgroundColor: 'rgba(0, 112, 243, 0.2)',
        fill: true,
      }
    ]
  };

  // Donut chart data
  const donutChartData = {
    labels: ['Total Users', 'Users Today'],
    datasets: [
      {
        data: [users.length, totalUsersToday],
        backgroundColor: ['#0070f3', '#ff6384'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>


      

      <div className='d-flex justify-content-between align-items-center' >
      <h2 style={{ marginBottom: '20px' }}>User Data</h2>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearch}
          style={{ padding: '8px', width: '20%', marginBottom: '10px' }}
        />
      </div>

      <div style={{ maxHeight: '440x', overflowY: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
          <thead style={{ position: 'sticky', top: 0, backgroundColor: '#0070f3', color: '#fff' }}>
            <tr>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Role</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Plan</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Price</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Verified</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Show Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} style={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.name}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.email}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.role}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.plan}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.price}</td>
             

                <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{user.isVerified ? 'Yes' : 'No'}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                  <button className='btn dart-btn' onClick={() => handleFetchDetails(user.email)}>Show</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Alldata;
