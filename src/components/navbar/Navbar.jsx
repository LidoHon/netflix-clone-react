import React, { useCallback, useEffect, useState } from 'react';
import NavbarItems from './NavbarItems';
import { FaChevronDown, FaRegBell } from 'react-icons/fa6';
import MobileMenu from './MobileMenu';
import { IoSearch } from 'react-icons/io5';

const TOP_OFFSET = 66;

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(true);

	const [showBackground, setShowBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((curValue) => !curValue);
	}, []);

	// const toggleMobileMenu = () => {
	// 	setShowMobileMenu((curValue) => !curValue);
	// };

	return (
		<nav className="w-full fixed z-40">
			<div
				className={`px-4 md:px-16 flex flex-row items-center transition duration-500 ${
					showBackground ? 'bg-zinc-950' : ''
				}`}
			>
				<img
					className="h-12 lg:h-15"
					src="//public/Netflix_Logo_PMS.png"
					alt="logo"
				/>
				<div className="flex-row ml-8 gap-7 hidden lg:flex">
					<NavbarItems label="home" />
					<NavbarItems label="TV Shows" />
					<NavbarItems label="Latest" />
					<NavbarItems label="MyList" />
					<NavbarItems label="Browse by Languages" />
				</div>

				<div
					onClick={toggleMobileMenu}
					className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
				>
					<p className="text-white text-xs">Browse</p>
					<FaChevronDown
						className={`text-white transition ${
							showMobileMenu ? 'rotate-0' : 'rotate-180'
						}`}
					/>
					<MobileMenu visible={showMobileMenu} />
				</div>

				<div className="flex flex-row ml-auto gap-5 items-center">
					<div className="text-gray-200 text-xl hover:text-gray-300 cursor-pointer transition">
						<IoSearch />
					</div>
					<div className="text-gray-200 text-xl hover:text-gray-300 cursor-pointer transition">
						<FaRegBell />
					</div>
					<div className="w-6 h-6 lg:w-10 rounded-md overflow-hidden">
						<img src="/blue.png" alt="" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
