import React from 'react';
import YorumEmreCan from '@/assets/emre_can_kocak.jpg';
import YorumGizem from '@/assets/gizem_yenicikan.jpg';
import YorumGozde from '@/assets/gozde_genc.jpg';
import Yorum from '@/components/Yorum';

const YorumlarPage = () => {
	return (
		<div className='min-h-full snap-start bg-customNavy flex flex-col md:flex-row gap-8 md:gap-24 md:py-24 justify-center items-start'>
			<Yorum
				image={YorumEmreCan}
				name='Emre Can Koçak'
				title='Pazarlama Uzmanı/Türk Telekom'
				comment='Mentorluk projesi sayesinde çok sayıda mentorden oluşan sosyal bir çevrem oldu. Mentorlardan aldığım eğitimle işe alım süreçlerini, departman farklılıklarını öğrenciliğimin en başında öğrendim. Kendimi geliştirmekle birlikte sayısız staj ve iş fırsatıyla karşılaştım. Projede yer alacak tüm arkadaşlara aktif olmayı ve projeye değer katacak davranışlarda öncü olmayı şiddetle tavsiye ederim'
			/>
			<Yorum
				image={YorumGizem}
				name='Gizem Yeniçıkan'
				title='Danışman/PwC'
				comment='Mentorluk projesi benim için “Be the change you want to see in the World” mottosunun gerçek hayatta form bulmuş hali gibi.Projeye ilk dahil olduğumda ekip üyesiydim, sonra mentee oldum şimdi ise mentor. Giveback kültürünü besleyerek devam ettirmeli ve gelecek kuşaklara aktarmalıyız.'
			/>
			<Yorum
				image={YorumGozde}
				name='Gözde Genç'
				title='İş Geliştirme Uzmanı/Migros'
				comment='Henüz öğrenciyken mentorlerim ile görüşmelerim sonucunda iş hayatında nasıl fark yaratacağımı keşfettim. Mentorluk projesinin lideri olduğum dönemde ise insanlarla olan iletişim yeteneklerimi geliştirme fırsatı yakaladım. Projeye mentee olarak katıldığım, şimdi de mentor olarak devam ettiğim bu ailenin bir parçası olmak inanılmaz keyifli!'
			/>
		</div>
	);
};

export default YorumlarPage;
