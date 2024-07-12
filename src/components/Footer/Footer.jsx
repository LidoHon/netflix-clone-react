import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { ImFacebook } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa6';

const Footer = ({ backgroundColor }) => {
	return (
		<footer
			className={`px-4 sm:px-6 lg:px-8 py-5 text-neutral-400 mt-2 ${backgroundColor}`}
		>
			<div className="text-lg mb-3">
				<a href="#" className="underline">
					Questions? Contact us.
				</a>
			</div>
			<div className="text-white flex flex-row gap-4 text-xl pb-3">
				<ImFacebook />
				<IoLogoInstagram />
				<FaYoutube />
			</div>
			<div className="grid grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
				<div className="space-y-2 flex flex-col">
					<a href="#" className="underline">
						FAQ
					</a>
					<a href="#" className="underline">
						Account
					</a>
					<a href="#" className="underline">
						Investor Relations
					</a>
					<a href="#" className="underline">
						Ways to watch
					</a>
				</div>
				<div className="space-y-4 flex flex-col">
					<a href="#" className="underline">
						Help Center
					</a>
					<a href="#" className="underline">
						Jobs
					</a>
					<a href="#" className="underline">
						Cookie Preferences
					</a>
					<a href="#" className="underline">
						Legal Notices
					</a>
				</div>
				<div className="space-y-4 flex flex-col">
					<a href="#" className="underline">
						Corporate Information
					</a>
					<a href="#" className="underline">
						Only on Netflix
					</a>
					<a href="#" className="underline">
						Privacy
					</a>
					<a href="#" className="underline">
						Speed Test
					</a>
				</div>
				<div className="space-y-4 flex flex-col">
					<a href="#" className="underline">
						Terms of Use
					</a>
					<a href="#" className="underline">
						Contact Us
					</a>
				</div>
			</div>
			<div className="mt-5">
				<div className="inline-block relative w-25">
					<select className="block appearance-none w-full bg-black border border-neutral-500 text-sm py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-600 text-white mb-3">
						<option>English</option>
						<option>Amharic</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
						<FaChevronDown size={12} />
					</div>
				</div>
			</div>
			<div className="mt-4 text-sm pb-2">Netflix Ethiopia</div>
		</footer>
	);
};

export default Footer;
