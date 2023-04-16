import React from 'react';

const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg
			width='21'
			height='24'
			viewBox='0 0 21 24'
			// fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM21 10.5L2 10.5V13.5L21 13.5V10.5Z' />
		</svg>
	);
};

export default ArrowIcon;
