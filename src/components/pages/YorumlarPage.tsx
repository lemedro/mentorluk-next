import React from 'react';
import YorumMesutSaran from '@/assets/mesut_saran.png';
import YorumOrhunKaraduman from '@/assets/orhun_karaduman.png';
import Yorum from '@/components/Yorum';

const YorumlarPage = () => {
	return (
		<div className='min-h-full snap-start bg-customNavy flex flex-col md:flex-row gap-8 md:gap-24 md:py-24 justify-center items-start'>
			<Yorum
				image={YorumMesutSaran}
				name='Mesut Saran'
				title='İş Analisti'
				comment='Mentorluk projesi, iş hayatına başlamadan önce birçok departman hakkında fikir sahibi olmamı sağladı ve kendime en uygun iş için hazırlanma fırsatı buldum. '
			/>
			<Yorum
				image={YorumMesutSaran}
				name='Mesut Saran'
				title='İş Analisti'
				comment='Facilisis habitasse luctus scelerisque urna ultricies aptent condimentum litora eleifend conubia convallis platea libero taciti dictumst bibendum per class integer cursus varius lacinia donec dolor arcu fermentum cubilia porta interdum quis euismod nisl natoque turpis egestas congue fames consectetur dignissim nisi commodo nullam habitant fusce suscipit sagittis ad at metus ullamcorper primis lobortis nunc mattis est curae faucibus morbi proin mi aliquam venenatis tellus quam sem volutpat a tempor inceptos sit accumsan massa quisque adipiscing montes felis dapibus amet elit potenti placerat curabitur himenaeos mollis netus vitae tempus auctor suspendisse orci nostra rhoncus molestie viverra vehicula eget odio pretium gravida'
			/>
			<Yorum
				image={YorumMesutSaran}
				name='Mesut Saran'
				title='İş Analisti'
				comment='Facilisis habitasse luctus scelerisque urna ultricies aptent condimentum litora eleifend conubia convallis platea libero taciti dictumst bibendum per class integer cursus varius lacinia donec dolor arcu fermentum cubilia porta interdum quis euismod nisl natoque turpis egestas congue fames consectetur dignissim nisi commodo nullam habitant fusce suscipit sagittis ad at metus ullamcorper primis lobortis nunc mattis est curae faucibus morbi proin mi aliquam venenatis tellus quam sem volutpat a tempor inceptos sit accumsan massa quisque adipiscing montes felis dapibus amet elit potenti placerat curabitur himenaeos mollis netus vitae tempus auctor suspendisse orci nostra rhoncus molestie viverra vehicula eget odio pretium gravida'
			/>
		</div>
	);
};

export default YorumlarPage;
