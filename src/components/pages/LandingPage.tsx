'use client';
import Image from 'next/image';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import YMKLogo from '@/assets/ymk-logo.png';

const LandingPage = forwardRef(function LandingPage(props, ref) {
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
			className='h-full relative text-customWhite bg-landingPage bg-cover bg-landingPosition snap-start'
		>
			<div className='absolute w-24 h-24 top-8 left-8 md:top-16 md:left-16 md:w-32 md:h-32'>
				<Image src={YMKLogo} alt='YMK Logo' />
			</div>
			<div className='absolute left-[5%] bottom-[10%]'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl max-w-xs sm:max-w-none break-words font-black'>
					Yıldız Teknik Üniversitesi
				</h1>
				<h3 className='text-5xl sm:text-6xl md:text-8xl max-w-sm sm:max-w-none break-words font-black text-customYellow'>
					Mentorluk Kulübü
				</h3>
			</div>
		</div>
	);
});

export default LandingPage;
