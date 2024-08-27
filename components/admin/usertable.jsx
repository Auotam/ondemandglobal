import { useEffect, useState } from 'react';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the components required for Chart.js
ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const UserTable = ({ onFetchUserDetails }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalUsersToday, setTotalUsersToday] = useState(0);
  const [loginData, setLoginData] = useState({ labels: [], data: [] });
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
  }, [userData]); // Ensure that `userData` is correctly included in the dependency array

  const handleFetchDetails = (email) => {
    onFetchUserDetails(email); // Call the function passed via props
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
      <h2 style={{ marginBottom: '20px' }}>User Table</h2>
      
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
        <div style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '20px' }}>
          <h3>Total Users Today</h3>
          <p style={{ fontSize: '24px', margin: '0' }}>{totalUsersToday}</p>
        </div>
        <div style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>Total Users</h3>
          <p style={{ fontSize: '24px', margin: '0' }}>{users.length}</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px', height: '300px' }}>
          <h2 className='mb-10'>User Logins Per Day</h2>
          <Bar className="light-theme" data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div style={{ flex: 1, height: '300px' }}>
          <h2 className='mb-10'>User Distribution</h2>
          <Doughnut className="light-theme"  data={donutChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

 
    </div>
  );
};

export default UserTable;
