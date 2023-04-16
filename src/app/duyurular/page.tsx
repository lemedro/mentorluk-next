import ArrowIcon from '@/components/icons/ArrowIcon';
import Link from 'next/link';
import React from 'react';

const Duyurular = () => {
	return (
		<div className='py-32 px-32 min-h-full relative'>
			<Link href={'/'}>
				<ArrowIcon className='fill-customNavy stroke-none absolute top-12 left-12' />
			</Link>
			<main className='h-full'>
				<section>
					<h1 className='text-4xl font-black '>Duyurular</h1>
					<div className='mt-16 grid grid-cols-4 gap-16'>
						<div className='w-64 h-80 bg-emerald-700'></div>
						<div className='w-64 h-80 bg-emerald-700'></div>
						<div className='w-64 h-80 bg-emerald-700'></div>
						<div className='w-64 h-80 bg-emerald-700'></div>
						<div className='w-64 h-80 bg-emerald-700'></div>
						<div className='w-64 h-80 bg-emerald-700'></div>
					</div>
				</section>
				<section className='mt-32'>
					<h1 className='text-4xl font-black '>Etkinlikler</h1>
					<ul>
						<li></li>
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Duyurular;
