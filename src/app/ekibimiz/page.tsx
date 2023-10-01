import React from 'react';
import './style.css';
import ArrowIcon from '@/components/icons/ArrowIcon';
import Link from 'next/link';
import Head from 'next/head';

const page = () => {
	return (
		<>
			<Head>
				<title>YTÜ Mentorluk Kulübü</title>
			</Head>
			<div className='bg-customNavy relative'>
				<Link href={'/'}>
					<ArrowIcon className='fill-customYellow absolute top-12 left-12' />
				</Link>

				<section>
					<div className='row'>
						<h1 className='font-sans text-customYellow text-3xl md:text-5xl font-bold'>
							Yönetim Kurulu
						</h1>
					</div>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/zuleyha.jpg' />
								</div>
								<h3>Züleyha Yılmaz</h3>
								<p>Yönetim Kurulu Başkanı</p>
								<div className='icons'>
									<a
										href='https://www.linkedin.com/in/zuleyhayilmaz/'
										target='_blank'
									>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='#'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/suha.jpg' />
								</div>
								<h3>Ahmet Süha Atıcı</h3>
								<p>İletişimden Sorumlu YKÜ</p>
								<div className='icons'>
									<a
										href='https://www.linkedin.com/in/ahmetsuhaatici/'
										target='_blank'
									>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:ahmetsuhaatici@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/fatmanur.JPG' />
								</div>
								<h3>Fatmanur Taşci</h3>
								<p>Finanstan Sorumlu YKÜ</p>
								<div className='icons'>
									<a
										href='https://www.linkedin.com/in/fatmanur-tasci/'
										target='_blank'
									>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='#'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/atakan.jpg' />
								</div>
								<h3>Göktuğ Karagöz</h3>
								<p>Mentorlerden Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/goktug-karagoz/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:sarigoktus@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/gonul.jpg' />
								</div>
								<h3>Gönül Gül</h3>
								<p>Menteelerden Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/gonulgul/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:gonul.gul@std.yildiz.edu.tr'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/eylul.jpeg' />
								</div>
								<h3>Eylül Karataş</h3>
								<p>Organizasyondan Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/eylulkaratas/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='#'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/gamze.jpg' />
								</div>
								<h3>Zeynep Gamze Özdemir</h3>
								<p>Tanıtım Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/zeynepgamzeozdemir/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:zeygamoz@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<h1 className='font-sans text-customYellow text-3xl md:text-5xl font-bold'>
							İcra Kurulu
						</h1>
					</div>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/nil.jpg' />
								</div>
								<h3>Nil Özdemir</h3>
								<p>IT Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/nil-%C3%B6zdemir-8bb76b226/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:aysenilozdemir09@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/gokce.jpg' />
								</div>
								<h3>Gökçe Arya Kerzi</h3>
								<p>İletişim Koordinatörü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/g%C3%B6k%C3%A7e-arya-kerzi/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:gokcearyakerzi01@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/subhan.jpg' />
								</div>
								<h3>Subhan Azizoğlu</h3>
								<p>Sponsorluk Koordinatörü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/subhan-azizo%C4%9Flu-322079292/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='#'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/selin.jpg' />
								</div>
								<h3>Selin Sedef Aksoy</h3>
								<p>Mentee Strateji Koordinatörü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/selinsedefaksoy/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:selinsedefaksoy@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/sima.jpeg' />
								</div>
								<h3>Şima Rümeysa Ak</h3>
								<p>Mentee Koordinatörü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/%C5%9Fima-r%C3%BCmeysa-ak-20a1a4226/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:simarumeysaak@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/feyza.jpg' />
								</div>
								<h3>Feyzanur Duman</h3>
								<p>Mentee Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/feyzanurduman/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='#'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/yusuf.jpg' />
								</div>
								<h3>Yusuf Yüksel</h3>
								<p>Mentor Strateji Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/yusuf-y%C3%BCksel-b0b3071ba/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:yusufyuksel3446@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/sila.jpeg' />
								</div>
								<h3>Hamide Sıla Özdemir</h3>
								<p>Mentor Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/hamidesilaozdemir/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:hamidesilaozdemir@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/dilara.JPG' />
								</div>
								<h3>Dilara Bektaş</h3>
								<p>Mentor Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/dilarabektas00/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:dilarabkts0@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/yasemin.jpg' />
								</div>
								<h3>Yasemin Elizabeth Jones</h3>
								<p>Organizasyon Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/yaseminelizabethjones/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:yaseminelizabeth@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/furkan.png' />
								</div>
								<h3>Furkan Yılmaz</h3>
								<p>Organizasyon Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/furkan-y%C4%B1lmaz-968296228/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:furyylmz@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/cemal.jpeg' />
								</div>
								<h3>Cemal Eren Sinan</h3>
								<p>Organizasyon Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/cemal-eren-sinan-a83a071bb/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href=''>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/ceren.JPG' />
								</div>
								<h3>Ceren Yılmaz</h3>
								<p>Tasarım Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/ceren-yilmazz/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:yilmazceren1703@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/ibrahim.JPG' />
								</div>
								<h3>İbrahim Aykol</h3>
								<p>İçerik Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/ibrahimaykol/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:aykolibrahim3442@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/kayra.png' />
								</div>
								<h3>Kayra Ağcabay</h3>
								<p>İçerik Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/kayraagcabay/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:kayraagcabay@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default page;
