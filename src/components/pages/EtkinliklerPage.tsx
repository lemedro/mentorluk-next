import React from 'react';

const EtkinliklerPage = () => {
	return (
		<div className='h-full grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 snap-start'>
			<SingleEtkinlik title='Teknik Gezi' url='bg-teknikGezi' />
			<SingleEtkinlik title='Tea Talk' url='bg-teaTalk' />
			<SingleEtkinlik title='Motivasyon' url='bg-motivasyon' />
			<SingleEtkinlik title='Teknik Gezi' url='bg-teknikGezi' />
			<SingleEtkinlik title='Teknik Gezi' url='bg-teknikGezi' />
			<SingleEtkinlik title='Tea Talk' url='bg-teaTalk' />
		</div>
	);
};

const SingleEtkinlik: React.FC<{ title: string; url: string }> = ({
	title,
	url,
}) => {
	return (
		<div className={`relative overflow-hidden ${url} bg-cover bg-center`}>
			<h1 className=' font-black text-6xl break-all  h-full w-full flex items-end text-customWhite opacity-80 md:justify-start md:text-9xl pl-2'>
				<span>{title}</span>
			</h1>
		</div>
	);
};

export default EtkinliklerPage;
