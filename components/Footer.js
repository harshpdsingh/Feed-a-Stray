import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-950 text-white flex items-center justify-center px-4 h-16'>
      <p className='text-center'>
        Copyright &copy; {new Date().getFullYear()} Feed a Stray - All rights reserved!
      </p>
    </footer>
  );
};

export default Footer;