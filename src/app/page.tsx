'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import LandingPage from '@/components/pages/LandingPage';
import DuyurularPage from '@/components/pages/DuyurularPage';
import BizKimizPage from '@/components/pages/BizKimizPage';
import EtkinliklerPage from '@/components/pages/EtkinliklerPage';
import Nav from '@/components/Nav';
import YorumlarPage from '@/components/pages/YorumlarPage';

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
				<Nav />
				<main className='overflow-y-scroll bg-customYellow h-[calc(100vh-3rem)] md:h-screen md:w-[calc(100vw-4rem)] snap-proximity snap-y'>
					<LandingPage />
					<BizKimizPage />
					<DuyurularPage />
					<EtkinliklerPage />
					<YorumlarPage />
				</main>
			</div>
		</>
	);
}
