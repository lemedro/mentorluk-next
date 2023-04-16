import React, { useState } from 'react';
import HamburgerMenuIcon from '@/components/icons/HamburgerMenuIcon';

const Nav = () => {
	const [open, setOpen] = useState(false);

	const handleNavClick:
		| React.MouseEventHandler<HTMLButtonElement>
		| undefined = () => {
		setOpen(prev => !prev);
	};

	return (
		<nav
			className={`overflow-hidden bg-customNavy shadow-lg text-customYellow z-50 flex justify-center md:justify-start items-start md:items-center fixed transition-all duration-300 ${
				!open
					? 'top-0 left-0 right-0 h-12 md:top-0 md:bottom-0 md:left-0 md:right-auto md:h-screen md:w-16'
					: 'top-0 left-0 bottom-0 right-0 h-screen md:top-0 md:bottom-0 md:left-0 md:right-auto md:h-screen md:w-screen'
			}`}
		>
			<button
				className='w-4 md:w-6 h-4 md:h-6 absolute md:left-5 md:top-auto md:bottom-auto left-auto right-auto top-4'
				onClick={handleNavClick}
			>
				<HamburgerMenuIcon />
			</button>
			<div className='mx-8 md:mx-32 md:my-32 w-full h-full flex flex-col items-center md:items-start justify-center md:pl-48'>
				<div className='flex flex-col gap-8 md:text-4xl md:font-bold'>
					<button className='break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'>
						Anasayfa
					</button>
					<button className='break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'>
						Biz Kimiz?
					</button>
					<button className='break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'>
						Duyurular
					</button>
					<button className='break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'>
						Etkinlikler
					</button>
					<button className='break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'>
						Yorumlar
					</button>
					<button className='break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'>
						İletişim
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
