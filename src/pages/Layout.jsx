import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className='text-center mt-6'>
        <h1 className="text-3xl font-medium">My Clander App</h1>
      </header>
      <main className="h-[90vh] flex items-center justify-center">
        {/* Layout Outlet */}
        <Outlet />
      </main>
      
    </>
  );
}

export default Layout;