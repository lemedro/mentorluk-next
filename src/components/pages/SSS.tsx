'use client';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';

const SSSPage = forwardRef(function SSSpage(props, ref) {
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
			className='h-full snap-start flex text-xs flex-col justify-start items-center px-6 py-6 gap-5 md:gap-12  md:p-16'
		>
			<h1 className='font-black text-xl md:text-3xl mb-3 md:mb-8'>
				Sıkça Sorulan Sorular
			</h1>

			<SingleSoru
				soru='Kimler Mentor Olabilir?'
				cevap='Yıldız Teknik Üniversitesi Endüstri ve Makine Mühendisliği lisans veya yüksek lisans bölümünden mezun olmuş, en az 3 yıl iş deneyimine sahip herkes kulüpte mentor olabilir.'
			/>
			<SingleSoru
				soru='Kimler Mentee Olabilir?'
				cevap='Endüstri ve Makine Mühendisliği 1, 2, 3. ve 4. sınıfta okumakta olan öğrenciler kulübümüze mentee olarak başvurabilirler.'
			/>
			<SingleSoru
				soru='Görüşmeler Ne Sıklıkla Yapılmalıdır?'
				cevap='Görüşmelerin sıklığı Mentor ve Mentee’nin kontrolünde olmasına rağmen her ay en az 1 saatlik görüşme yapılmasını beklemekteyiz. Her görüşme için önceden konu belirlemeli ve yıllık hedef doğrultusunda çalışmalar yapılmalıdır. Proje ekibi her yıl danışmanlarla yapılan çalışma sonuçlarına göre mentor ve menteelere çalışma planı göndermektedir.'
			/>
			<SingleSoru
				soru='Mentorluk Kulübü Ücretli Bir Servis Mi?'
				cevap='Mentorluk Kulübü, Yıldız Teknik Üniversitesi mezun ve öğrencilerini bir araya getirerek Yıldız bağlılığını artırmaya ve öğrencilerin kariyer gelişimlerine fayda sağlamayı amaçlayan, kar amacı gütmeyen bir organizasyondur. Kulüp üyeleri tamamen gönüllülük esaslı olarak projede çalışmaktadırlar.'
			/>
		</div>
	);
});

export default SSSPage;

const SingleSoru: React.FC<{ soru: string; cevap: string }> = props => {
	return (
		<div className='w-full'>
			<h1 className='font-bold text-base mb-2 md:mb-6 md:text-xl'>
				{props.soru}
			</h1>
			<p className='md:text-base'>{props.cevap}</p>
		</div>
	);
};
