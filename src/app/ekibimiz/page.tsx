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
									<img src='takım_resim/deniz.jpg' />
								</div>
								<h3>Deniz Günday</h3>
								<p>Yönetim Kurulu Başkanı</p>
								<div className='icons'>
									<a
										href='https://www.linkedin.com/in/denizgunday/'
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
									<img src='takım_resim/harun.jpg' />
								</div>
								<h3>Harun Akgün</h3>
								<p>İletişimden Sorumlu YKÜ</p>
								<div className='icons'>
									<a
										href='https://www.linkedin.com/in/harunakgnn/'
										target='_blank'
									>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:harunakgnn11@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/emre.jpg' />
								</div>
								<h3>Emre Çulhan</h3>
								<p>Finanstan Sorumlu YKÜ</p>
								<div className='icons'>
									<a
										href='https://www.linkedin.com/in/emre-culhan-116aa51b8/'
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
								<h3>Atakan Ali Atak</h3>
								<p>Mentorlerden Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/atakanaliatak/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:atakatakanali@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/elif.jpg' />
								</div>
								<h3>Elif Mısır</h3>
								<p>Menteelerden Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/elifmisir/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:elifmsr22@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/ecem.jpeg' />
								</div>
								<h3>Ecem Elgörmüş</h3>
								<p>Organizasyondan Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/ecemelg%C3%B6rm%C3%BC%C5%9F/'>
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
									<img src='takım_resim/zeynep.jpg' />
								</div>
								<h3>Zeynep Şen</h3>
								<p>Tanıtım Sorumlu YKÜ</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/zeynep-sen/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:zeynepsen302@gmail.com'>
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
									<img src='takım_resim/orhun-karaduman.jpeg' />
								</div>
								<h3>Orhun Karaduman</h3>
								<p>IT Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/orhun-karaduman/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:orhunkaraduman13@gmail.com'>
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
								<p>Endüstri Bölüm Sorumlusu</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/ahmetsuhaatici/'>
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
									<img src='takım_resim/rafet.jpg' />
								</div>
								<h3>Rafet Düzgün</h3>
								<p>Makine Bölüm Sorumlusu</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/rafetduzgun/'>
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
									<img src='takım_resim/ayca.jpg' />
								</div>
								<h3>Ayça Yapucuoglu</h3>
								<p>Mekatronik Bölüm Sorumlusu</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/ayca-yapucuoglu/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:yapucuogluayca@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/beyzanur.jpg' />
								</div>
								<h3>Beyzanur Yüncü</h3>
								<p>Matematik Bölüm Sorumlusu</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/hbeyzanury/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:hbeyzanury@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/omer.jpg' />
								</div>
								<h3>Memduh Ömer Yuvacı</h3>
								<p>Mentee Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/memduh%C3%B6meryuvac%C4%B1/'>
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
									<img src='takım_resim/zehranur.jpg' />
								</div>
								<h3>Zehra Nur Mutlu</h3>
								<p>Mentee Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/zehra-nur-m-0bb71b196/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:zehranur3429@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/goktug.jpg' />
								</div>
								<h3>Göktüğ Kavraz</h3>
								<p>Mentor Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/goktug-karagoz/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:sairigoktus@hotmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/merve.jpeg' />
								</div>
								<h3>Merve Çetin</h3>
								<p>Mentor Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/merve-%C3%A7etin-8831871b8/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:merve_ctnn99@hotmail.com'>
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
									<img src='takım_resim/mustafa.jpg' />
								</div>
								<h3>Mustafa Özsoy</h3>
								<p>Organizasyon Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/mustafa-%C3%B6zsoy/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:mustafaozsy7@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/zuleyha.jpg' />
								</div>
								<h3>Züleyha Yılmaz</h3>
								<p>Organizasyon Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/zuleyhayilmaz/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:zuleyhaylmaz00@gmail.com'>
										<i className='fas fa-envelope'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/eylul.jpg' />
								</div>
								<h3>Eylül Karataş</h3>
								<p>Organizasyon Koordinatorü</p>
								<div className='icons'>
									<a href='https://www.linkedin.com/in/eylulkaratas/'>
										<i className='fab fa-linkedin'></i>
									</a>
									<a href='mailto:karataseylul.01@gmail.com'>
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
									<img src='takım_resim/zeynep_gamze.jpg' />
								</div>
								<h3>Zeynep Gamze Özdemir</h3>
								<p>Sosyal Medya Koordinatorü</p>
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

						<div className='column'>
							<div className='card'>
								<div className='img-container'>
									<img src='takım_resim/gonul.jpg' />
								</div>
								<h3>Gönül Gül</h3>
								<p>İçerik Koordinatorü</p>
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
					</div>
				</section>
			</div>
		</>
	);
};

export default page;
