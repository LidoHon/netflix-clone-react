import React from 'react';

const NavbarItems = ({ label }) => {
	return (
		<div className="text-white text-xs cursor-pointer hover:text-gray-300 transition">
			{label}
		</div>
	);
};

export default NavbarItems;
