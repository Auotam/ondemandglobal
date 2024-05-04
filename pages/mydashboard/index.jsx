import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';
import DashboardMain from '@/components/dashboard';
import Form from './Form';
// import { checkAuthentication, fetchFormData, saveFormData } from '@';
import useUserData from '@/utils/UseUserdata';

const Dashboard = () => {
  const userData = useUserData();
  const router = useRouter();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const isAuthenticated = await checkAuthentication();
        if (!isAuthenticated) {
          router.push('/mydashboard');
        } else {
          const fetchedFormData = await fetchFormData(userData.email);
          setFormData(fetchedFormData);
        }
      } catch (error) {
        console.error('Error handling authentication:', error);
      }
    };

    authenticateUser();
  }, []);

  const handleSubmitForm = async (formData) => {
    try {
      await saveFormData(userData.email, formData);
      setFormData(formData);
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <>
  
        <Wrapper>
          <SEO pageTitle={'OnDemand'} />
          <Layout>
            <DashboardMain />
          </Layout>
        </Wrapper>

    </>
  );
};

export default Dashboard;
