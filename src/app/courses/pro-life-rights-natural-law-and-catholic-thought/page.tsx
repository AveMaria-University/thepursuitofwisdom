import Image from 'next/image';
import Link from 'next/link';
import { getCourseBySlug } from '@/data/courses';
import { notFound } from 'next/navigation';
import LessonsList from '../[slug]/LessonsList';

export default function ProLifeCoursePage() {
	const course = getCourseBySlug('pro-life-rights-natural-law-and-catholic-thought');
	if (!course) return notFound();
	const heroImage = course.heroImage || course.image;

	return (
		<div className="min-h-screen bg-white">
			<header className="pursuit-header text-white">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div className="flex items-center">
							<Link href="/" className="text-2xl font-bold font-crimson italic">The Pursuit <span className="text-sm font-normal">of</span> Wisdom</Link>
						</div>
						<div className="hidden md:flex space-x-8">
							<Link href="/courses" className="hover:text-yellow-200 transition-colors">COURSES</Link>
							<Link href="#" className="hover:text-yellow-200 transition-colors">GET THE APP</Link>
							<Link href="#" className="hover:text-yellow-200 transition-colors">DONATE</Link>
						</div>
						<div className="flex space-x-4">
							<button className="px-6 py-2 bg-pursuit-navy text-white rounded hover:bg-opacity-90 transition-colors">SIGN OUT</button>
						</div>
					</div>
				</nav>
			</header>

			<section 
				className="relative text-white overflow-hidden"
				style={{
					backgroundImage: course.heroBackgroundImage ? `url(${course.heroBackgroundImage})` : undefined,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			>
				{/* Blue overlay */}
				<div className="absolute inset-0 bg-pursuit-navy opacity-75 pointer-events-none" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<h1 className="font-crimson font-bold text-4xl md:text-5xl leading-tight mb-6">{course.professorDisplay || course.professor}</h1>
							<p className="text-pursuit-gold font-semibold mb-8 text-lg md:text-xl max-w-xl">{course.title}</p>
							<Link href="/courses" className="inline-block bg-pursuit-gold text-white px-10 py-4 rounded text-sm tracking-widest font-semibold shadow hover:bg-yellow-600 transition-colors">BACK TO ALL COURSES</Link>
						</div>
						<div className="justify-self-center md:justify-self-center">
							<div className="w-[480px] md:w-[530px]">
								<div className="aspect-[4/5] relative rounded-md overflow-hidden shadow-xl">
									<Image src={heroImage} alt={course.professor} fill className="object-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className="relative">
				<div 
					className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[880px]"
					style={{
						backgroundImage: 'url(/images/compass.jpeg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat'
					}}
				>
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 relative z-10">
						<div className="bg-white rounded-xl shadow-lg p-6 md:p-12 mb-24 relative overflow-hidden">
							<div className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none select-none">
								<div className="w-[520px] h-[520px] bg-[radial-gradient(circle_at_center,#C9972C33,transparent_70%)] rounded-full" />
							</div>
							{(() => {
								let desc = course.description || '';
								if (desc.startsWith(course.title)) {
									desc = desc.replace(new RegExp(`^${course.title}\\s*\n+`), '');
								}
								return (
									<div className="relative z-10 max-w-5xl mx-auto space-y-6 text-center">
										<h2 className="font-crimson font-bold text-3xl md:text-4xl leading-tight">{course.title}</h2>
										{desc && <p className="text-gray-700 text-base leading-relaxed">{desc}</p>}
										<div className="pt-2">
											<Link href="#program" className="inline-block">
												<button className="bg-pursuit-navy text-white hover:bg-pursuit-gold hover:text-white transition-colors px-10 py-4 rounded text-sm font-semibold tracking-wide shadow">DIVE INTO THE PROGRAM ▸</button>
											</Link>
										</div>
									</div>
								);
							})()}
						</div>
					</div>
				</div>

				<section id="program" className="mb-24 pt-16">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						<h3 className="font-crimson font-bold text-3xl md:text-4xl text-pursuit-navy mb-12 text-center">Explore the Program</h3>
						<LessonsList sections={course.sections || []} courseTitle={course.title} />
					</div>
				</section>

				{(course.presenterBio || course.presenterImage) && (
					<section className="mt-32 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-pursuit-gold pb-0">
						<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
							<div className="flex flex-col md:flex-row md:items-start md:space-x-16">
								{course.presenterImage && (
									<div className="flex-shrink-0 mb-10 md:mb-0">
										<div className="w-52 h-52 rounded-full overflow-hidden shadow-lg ring-4 ring-white/20">
											<Image src={course.presenterImage} alt={course.professorDisplay || course.professor} width={360} height={360} className="w-full h-full object-cover" />
										</div>
									</div>
								)}
								<div className="flex-1">
									<div className="bg-white rounded-xl shadow-md p-10 md:p-12">
										<h3 className="font-crimson font-bold text-2xl md:text-3xl mb-6 text-center md:text-left">About the Presenter</h3>
										{course.presenterBio && (
											<p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{course.presenterBio}</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
			</main>
		</div>
	);
}
