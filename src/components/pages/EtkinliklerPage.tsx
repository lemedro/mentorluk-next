'use client';

import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';

const EtkinliklerPage = forwardRef(function EtkinliklerPage(props, ref) {
	const pageRef = useRef(null) as any;
	const [loaded, setLoaded] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			scrollIntoView() {
				pageRef?.current?.scrollIntoView();
			},
		};
	});
	return (
		<div
			ref={pageRef}
			className='h-full grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 snap-start'
		>
			<SingleEtkinlik title='Eğitim' url='bg-egitim' />
			<SingleEtkinlik title='Seminerler' url='bg-seminerler' />
			<SingleEtkinlik title='Büyük Buluşma' url='bg-buyukBulusma' />
			<SingleEtkinlik title='Tea Talk' url='bg-teaTalk' />
			<SingleEtkinlik title='Teknik Gezi' url='bg-teknikGezi' />
			<SingleEtkinlik title='Motivasyon' url='bg-motivasyon' />
		</div>
	);
});

const SingleEtkinlik: React.FC<{ title: string; url: string }> = ({
	title,
	url,
}) => {
	return (
		<div className={`relative overflow-hidden ${url} bg-cover bg-center`}>
			<h1 className=' font-black text-5xl break-normal h-full w-full flex items-end text-customWhite opacity-80 md:justify-start md:text-8xl p-2 md:break-normal'>
				<span>{title}</span>
			</h1>
		</div>
	);
};

export default EtkinliklerPage;
