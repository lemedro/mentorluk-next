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
import SSSPage from '@/components/pages/SSS';
import FooterPage from '@/components/pages/Footer';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const landingRef = useRef(null);
	const bizKimizRef = useRef(null);
	const etkinliklerRef = useRef(null);
	const yorumlarRef = useRef(null);
	const sssRef = useRef(null);
	const footerRef = useRef(null);

	return (
		<>
			<Head>
				<title>YTÜ Mentorluk Kulübü</title>
			</Head>
			<div
				className={`${inter.className} min-h-screen flex flex-col md:flex-row-reverse pt-12 md:pt-0 md:pl-16 relative overflow-hidden `}
			>
				<Nav
					refs={{
						bizKimizRef,
						landingRef,
						etkinliklerRef,
						yorumlarRef,
						sssRef,
						footerRef,
					}}
				/>
				<main className='overflow-y-scroll bg-customYellow h-[calc(100vh-3rem)] md:h-screen md:w-[calc(100vw-4rem)] snap-proximity snap-y'>
					<LandingPage ref={landingRef} />
					<BizKimizPage ref={bizKimizRef} />
					{/* <DuyurularPage /> */}
					<EtkinliklerPage ref={etkinliklerRef} />
					<YorumlarPage ref={yorumlarRef} />
					<SSSPage ref={sssRef} />
					<FooterPage ref={footerRef} />
				</main>
			</div>
		</>
	);
}
