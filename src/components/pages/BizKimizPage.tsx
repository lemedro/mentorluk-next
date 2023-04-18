import Image from 'next/image';
import React from 'react';
import CrowdPhoto from '@/assets/bizkimiz.png';
import Link from 'next/link';

const BizKimizPage = () => {
	return (
		<div className='h-full snap-start relative'>
			<Image
				alt='Crowd'
				src={CrowdPhoto}
				className='absolute bottom-0 object-cover h-2/5 pointer-events-none object-crowd z-20'
			/>

			<main className='h-4/6 relative flex flex-col  pt-24 md:pt-32 items-center'>
				{/* <h1 className='absolute font-black text-3xl top-0 left-0'>
					Mentee
					<br />
					Nedir?
				</h1> */}

				<div className='flex flex-col items-center gap-6 max-w-xs md:max-w-lg relative'>
					<h2 className='absolute -top-16 -left-64 md:text-4xl font-black text-3xl'>
						Mentor
						<br />
						Nedir?
					</h2>
					<h2 className='absolute -top-16 -right-64 md:text-4xl font-black text-3xl'>
						Mentee
						<br />
						Nedir?
					</h2>
					<h1 className='font-black text-4xl md:text-5xl'>Biz Kimiz?</h1>
					<div className='w-64 md:w-96 bg-customNavy h-2 md:h-4 '></div>
					<p className='text-center mt-12 md:mt-16'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						turpis nunc, fermentum sit amet aliquet id, malesuada ac felis.
						Nullam in condimentum erat, eget cursus odio. Nunc pretium egestas
						turpis ac efficitur.{' '}
						<span className='font-bold underline'>
							<Link href={'#'}>daha fazla...</Link>
						</span>
					</p>
				</div>
			</main>
		</div>
	);
};

export default BizKimizPage;
