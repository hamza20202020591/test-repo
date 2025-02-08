import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-6 text-center">
      <p className="text-neutral">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
