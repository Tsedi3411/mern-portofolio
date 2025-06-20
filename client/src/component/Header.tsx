import React, { useEffect, useState } from 'react'

const Header = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Show loader for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-primary">
        {/* Loader spelling TAA */}
        <div className="flex space-x-2">
          <span className="text-secondary text-5xl font-bold animate-bounce">T</span>
          <span className="text-white text-5xl font-bold animate-bounce delay-150">A</span>
          <span className="text-tertiary text-5xl font-bold animate-bounce delay-300">A</span>
        </div>
        
      </div>
    );
  }

  // return (
  //   <div className='p-5 bg-primary flex justify-between'>
  //       <h1 className='text-secondary text-4xl font-semibold'></h1>
  //       <h1 className='text-white text-4xl font-semibold'></h1>
  //       <h1 className='text-tertiary text-4xl font-semibold'></h1>
  //   </div>
  // )
}

export default Header