import Image from 'next/image';
import { Inter } from 'next/font/google';
import LandingPage from '@/components/pages/LandingPage';
import HamburgerMenuIcon from '@/components/HamburgerMenuIcon';
import DuyurularPage from '@/components/pages/DuyurularPage';
import Head from 'next/head';
import BizKimizPage from '@/components/pages/BizKimizPage';
import EtkinliklerPage from '@/components/pages/EtkinliklerPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>YTÜ Mentorluk Kulübü</title>
			</Head>
			<div
				className={`${inter.className} min-h-screen flex flex-col md:flex-row-reverse pt-12 md:pt-0 md:pl-16 relative overflow-hidden `}
			>
				<nav className='bg-customNavy shadow-lg h-12 md:h-screen md:w-16 text-customYellow flex justify-center items-center fixed top-0 left-0 right-0 md:top-0 md:bottom-0 md:left-0 md:right-auto'>
					<button className='w-4 md:w-6 h-4 md:h-6'>
						<HamburgerMenuIcon />
					</button>
				</nav>
				<main className='overflow-y-scroll bg-customYellow h-[calc(100vh-3rem)] md:h-screen md:w-[calc(100vw-4rem)] snap-proximity snap-y'>
					<LandingPage />
					<BizKimizPage />
					<DuyurularPage />
					<EtkinliklerPage />
				</main>
			</div>
		</>
	);
}
