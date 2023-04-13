import React from 'react';
import TeknikGeziFoto from '@/assets/teknik-gezi.jpg';
import Image from 'next/image';

const EtkinliklerPage = () => {
	return (
		<div className='h-full grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3'>
			<SingleEtkinlik title='Teknik Gezi' url='teknikGezi' />
			<SingleEtkinlik title='Tea Talk' url='teaTalk' />
			<SingleEtkinlik title='Tea Talk' url='teaTalk' />
			<SingleEtkinlik title='Teknik Gezi' url='teknikGezi' />
			<SingleEtkinlik title='Teknik Gezi' url='teknikGezi' />
			<SingleEtkinlik title='Tea Talk' url='teaTalk' />
		</div>
	);
};

const SingleEtkinlik: React.FC<{ title: string; url: string }> = ({
	title,
	url,
}) => {
	return (
		<div className={`relative overflow-hidden bg-${url} bg-cover bg-center`}>
			<h1 className=' font-black text-6xl  h-full w-full flex items-end text-customWhite opacity-80 md:justify-start md:text-9xl pl-2'>
				<span>{title}</span>
			</h1>
		</div>
	);
};

export default EtkinliklerPage;
