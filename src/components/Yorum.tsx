import Image from 'next/image';
import React from 'react';
import type { StaticImageData } from 'next/image';

interface YorumProps {
	image: string | StaticImageData;
	name: string;
	title: string | undefined;
	comment: string;
}
const Yorum: React.FC<YorumProps> = props => {
	return (
		<div className='h-min bg-customYellow max-w-xs pt-16 pb-12 px-8 relative'>
			<div className='w-32 h-32 absolute -top-8 -left-8 rounded-full overflow-hidden'>
				<Image src={props.image} alt='Comments Photo' fill />
			</div>
			<section className=''>
				<h1 className='text-2xl font-bold text-end'>{props.name}</h1>
				<h3 className='text-lg opacity-80 text-end'>{props.title}</h3>
			</section>
			<p className='mt-8 text-sm'>{props.comment}</p>
		</div>
	);
};

export default Yorum;
