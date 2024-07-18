// pages/verify/[token].js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';

export default function Verify() {
  const router = useRouter();
  const { token } = router.query;
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');

  useEffect(() => {
    const verifyToken = async () => {
      try {
        // Make a request to your backend to verify the token
        const response = await axios.get(`/api/Auth/verify?token=${token}`);

        if (response.data.success) {
          setVerificationStatus('Verification successful!');
          // Redirect to login or dashboard after successful verification
          setTimeout(() => {
            router.push('/login'); // Example redirect to login page
          }, 2000); // Redirect after 2 seconds
        } else {
          setVerificationStatus('Verification failed.');
          // Handle failure, e.g., show an error message or redirect to error page
          setTimeout(() => {
            router.push('/error'); // Example redirect to error page
          }, 2000); // Redirect after 2 seconds
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setVerificationStatus('Verification failed.');
        // Handle error, e.g., show an error message or redirect to error page
        setTimeout(() => {
          router.push('/error'); // Example redirect to error page
        }, 2000); // Redirect after 2 seconds
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token, router]);

  return (
    <>
      <Head>
        <title>Verification Page</title>
        <meta name="description" content="Verification status page" />
      </Head>
      <div>
        <h1>Verification Status</h1>
        <p>{verificationStatus}</p>
      </div>
    </>
  );
}
