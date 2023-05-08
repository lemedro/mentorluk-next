import Link from 'next/link';
import React from 'react';

const DuyurularPage = () => {
	return (
		<div id='duyurular' className='min-h-full snap-start flex flex-col'>
			<div className='basis-1/2 md:basis-2/3  flex flex-row'>
				{/* SOL TARAF */}
				<div className='basis-1/2 hidden md:flex md:flex-col'>
					{/* DUYURULAR BASLIGI */}
					<div className='basis-1/2 flex justify-center items-center relative'>
						<h1 className='text-5xl font-black'>Duyurular</h1>
						<Link
							href='/duyurular'
							className='absolute bottom-4 right-4 underline'
						>
							Tümü
						</Link>
					</div>
					{/* KUCUK DUYURULAR */}
					<div className='basis-1/2 flex flex-row'>
						<div className='basis-1/2 break-words'>BURAYA RESIM GELCEK</div>
						<div className='basis-1/2 break-words bg-customNavy text-customYellow'>
							BURAYA DA, AMA HOVERDA DEGISCEK
						</div>
					</div>
				</div>

				{/* SAG TARAF */}
				<div className='md:basis-1/2  w-full bg-customNavy  text-customYellow'>
					SAG TARAF (BURAYA DA RESIM GELECEK)
				</div>
			</div>
			<div className='basis-1/2 md:basis-1/3 bg-customNavy  text-customYellow flex flex-col md:flex-row'>
				{/* MOBILDE IKILI GOZUKENLER */}
				<div className='basis-1/2 md:basis-2/3 flex flex-row justify-center items-center'>
					<div className='basis-1/2 flex flex-col justify-center items-center gap-2 md:gap-4'>
						<h1 className='text-3xl md:text-5xl font-black'>500+</h1>
						<h3 className='text-lg font-medium'>MENTOR</h3>
					</div>
					<div className='basis-1/2 flex flex-col justify-center items-center gap-2 md:gap-4'>
						<h1 className='text-3xl md:text-5xl font-black'>750+</h1>
						<h3 className='text-lg font-medium'>MENTEE</h3>
					</div>
				</div>

				{/* TEKLI  */}
				<div className='basis-1/2 md:basis-1/3 flex flex-col justify-center items-center gap-2 md:gap-4'>
					<h1 className='text-3xl md:text-5xl font-black'>25+</h1>
					<h3 className='text-lg font-medium'>ETKİNLİK</h3>
				</div>
			</div>
		</div>
	);
};

export default DuyurularPage;
