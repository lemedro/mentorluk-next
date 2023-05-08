'use client';

import Image from 'next/image';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import CrowdPhoto from '@/assets/bizkimiz.png';
import Link from 'next/link';

const BizKimizPage = forwardRef(function BizKimizPage(props, ref) {
	const pageRef = useRef(null) as any;
	useImperativeHandle(ref, () => {
		return {
			scrollIntoView() {
				pageRef?.current?.scrollIntoView();
			},
		};
	});

	return (
		<div ref={pageRef} className='min-h-full snap-start relative'>
			<Image
				alt='Crowd'
				src={CrowdPhoto}
				className='absolute bottom-0 object-cover h-2/6 pointer-events-none object-crowd z-20'
			/>

			<main className='h-4/6 relative flex flex-col  pt-16 md:pt-32 items-center'>
				{/* <h1 className='absolute font-black text-3xl top-0 left-0'>
					Mentee
					<br />
					Nedir?
				</h1> */}

				<div className='flex flex-col items-center gap-6 max-w-xs md:max-w-lg relative'>
					<h2 className='hidden md:block absolute -top-16 -left-64 md:text-4xl font-black text-3xl'>
						Mentor
						<br />
						Nedir?
					</h2>
					<h2 className='hidden md:block absolute -top-16 -right-64 md:text-4xl font-black text-3xl'>
						Mentee
						<br />
						Nedir?
					</h2>
					<h1 className='font-black text-4xl md:text-5xl'>Biz Kimiz?</h1>
					<div className='w-64 md:w-96 bg-customNavy h-2 md:h-4 '></div>
					<p className='text-center mt-8 md:mt-16 text-sm'>
						Yıldız Teknik Üniversitesinde mezunların bilgi ve tecrübelerinin
						öğrencilerin kişisel kariyerlerinin gelişiminde kullanılması
						amacıyla; rektörlük, öğretim üyeleri, mezunlar ve öğrencilerin ortak
						çalışma içerisinde ortaya çıkan bir gönüllülük projesidir. Bu
						kapsamda; öğrenci ve mezun birlikteliği uzun vadede iş hayatınca
						Yıldız birlikteliği oluşturulması amaçlanır. Diğer yandan ise;
						mezunların kendi aralarında oluşturdukları ağın genişletilmesine
						olanak sağlar. Yıl içerisinde gerçekleştirilen çeşitli
						organizasyonlar ile bu birliktelik oluşturulur ve pekiştirilir.{' '}
						<span className='font-bold underline'>
							<Link href={'/ekibimiz'}>daha fazla...</Link>
						</span>
					</p>
				</div>
			</main>
		</div>
	);
});

export default BizKimizPage;
