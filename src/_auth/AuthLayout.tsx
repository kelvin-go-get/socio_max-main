import Loader from '@/components/shared/Loader';
import { useUserContext } from '@/context/useUserContext';
import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useUserContext();
  if (isLoading) return <Loader/>;

  return (
    <>
      {isAuthenticated ? (
          <Navigate to='/' />
        ): (
          <>
            <section className='flex flex-1 justify-center items-center flex-col py-10 px-10 ' >
              <Outlet />
            </section>

            <img 
              src='/assets/images/background.jpg' 
              alt='logo'
              className='hidden xl:block h-screen w-1/2 object-cover bg-no repeat'
            />
          </>
        )
      }
    </>
  )
}

export default AuthLayout