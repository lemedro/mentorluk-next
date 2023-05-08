'use client';
import React, { MutableRefObject, forwardRef, useRef, useState } from 'react';
import HamburgerMenuIcon from '@/components/icons/HamburgerMenuIcon';
import { useRouter } from 'next/navigation';

interface NavProps {
	landingRef: MutableRefObject<null>;
	bizKimizRef: MutableRefObject<null>;
	etkinliklerRef: MutableRefObject<null>;
	yorumlarRef: MutableRefObject<null>;
	sssRef: MutableRefObject<null>;
	footerRef: MutableRefObject<null>;
}

const Nav: React.FC<{ refs: NavProps }> = props => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleNavClick: any = () => {
		setOpen(prev => !prev);
	};
	const handleScroll = (ref: MutableRefObject<any>) => {
		console.log('scrolling');
		console.log(ref.current);
		ref.current.scrollIntoView({ behavior: 'smooth' });
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
			<div
				className={`pt-24  mx-8 md:mx-32 md:my-32 w-full h-full flex-col md:flex-row items-center md:items-center justify-start md:justify-start md:pl-48 ${
					!open ? 'hidden' : 'flex'
				} `}
			>
				<div className='flex flex-col gap-5 md:gap-8 md:text-4xl md:font-bold break-keep'>
					<button
						onClick={() => {
							handleScroll(props.refs.landingRef);
							handleNavClick();
						}}
						className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'
					>
						Anasayfa
					</button>
					<button
						onClick={() => {
							handleScroll(props.refs.bizKimizRef);
							handleNavClick();
						}}
						className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'
					>
						Biz Kimiz?
					</button>
					{/* <button className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'>
						Duyurular
					</button> */}
					<button
						onClick={() => {
							handleScroll(props.refs.etkinliklerRef);
							handleNavClick();
						}}
						className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'
					>
						Etkinlikler
					</button>
					<button
						onClick={() => router.push('/ekibimiz')}
						className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'
					>
						Ekibimiz
					</button>
					<button
						onClick={() => {
							handleScroll(props.refs.yorumlarRef);
							handleNavClick();
						}}
						className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'
					>
						Yorumlar
					</button>
					<button
						onClick={() => {
							handleScroll(props.refs.sssRef);
							handleNavClick();
						}}
						className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'
					>
						SSS
					</button>
					<button
						onClick={() => {
							handleScroll(props.refs.footerRef);
							handleNavClick();
						}}
						className=' break-keep hover:scale-125 transition-all duration-75 ease-in opacity-100'
					>
						İletişim
					</button>
				</div>
				<div className=' h-1/3 md:h-1/2 w-full  md:w-1/2  mx-auto my-auto flex flex-col justify-center items-center gap-4 md:gap-8'>
					<h3 className='text-xl md:text-3xl italic'>
						"Yıldız ailesine sen de katıl,
						<br />
						tecrübeye kulak ver!"
					</h3>
					<a href='#' className='px-8 py-2 text-customNavy bg-customYellow'>
						Başvur
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
