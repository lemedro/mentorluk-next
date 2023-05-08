'use client';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import YMKLogo from '@/assets/ymk-logo.png';
import YTULogo from '@/assets/ytu-logo.png';
import Image from 'next/image';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterLogo from '../icons/TwitterLogo';
import Link from 'next/link';

const FooterPage = forwardRef(function FooterPage(props, ref) {
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
			className='h-full md:h-2/5 snap-start bg-customNavy text-customYellow flex flex-col md:flex-row items-center justify-evenly'
		>
			<div className='flex flex-col justify-center items-center gap-4'>
				<Link href='#'>ytumentorlukprojesi@gmail.com</Link>
				<Link href='#'>Barbaros Bulvarı 34349 Yıldız/Beşiktaş/İstanbul</Link>
				<Link href={'/kvkk'}>KVKK Aydınlatma Metni</Link>
			</div>
			<div className='flex flex-row gap-4'>
				<Link
					href='https://www.instagram.com/ytumentorlukkulubu/'
					className='fill-customYellow h-8 w-8'
				>
					<InstagramIcon />
				</Link>
				<Link
					href='https://www.linkedin.com/company/mentorluk-kulubu/'
					className='fill-customYellow h-8 w-8'
				>
					<LinkedinIcon />
				</Link>
				<Link
					href='https://twitter.com/ytumentorluk'
					className='fill-customYellow h-8 w-8'
				>
					<TwitterLogo />
				</Link>
			</div>
			<div className='flex flex-row'>
				<Image src={YMKLogo} alt='YMK Logo' className='w-32 h-32' />
				<Image src={YTULogo} alt='YTU Logo' className='w-36 h-36' />
			</div>
		</div>
	);
});

export default FooterPage;
