import BlockSection from "@/components/block-section";
import NewsletterForm from "@/components/forms/newsletter-form";
import { getAllAbouts } from "@/data-access-layer/abouts";
import ArticleCard from "@/components/ui/article-card";
import { getAdoptSectionById } from "@/data-access-layer/adopt";

const [abouts, heroBanner, ctaBanner] = await Promise.all(
	[getAllAbouts(), getAdoptSectionById(1), getAdoptSectionById(2)]
);

export default function Home() {
	return (
		<>
			<BlockSection backgroundImage={heroBanner.asset.url}>
				<h1 className="col-span-12">{heroBanner.title}</h1>
				<p className="col-span-12">{heroBanner.content}</p>
			</BlockSection>
			<BlockSection>
				{abouts.map((article, index) => <ArticleCard article={article} key={index} />)}
			</BlockSection>
			<BlockSection backgroundColor="bg-blue-200">
				<div className="col-span-6">
					<h2>Tilmeld dig vores nyhedsrøgsignal</h2>
					<p>Få inspiration og røgsignaler om dyremishandling og vores arbejde direkte fra et bål i nærheden af dig.</p>
				</div>
				<NewsletterForm />
			</BlockSection>
			<BlockSection backgroundImage={ctaBanner.asset.url}>
				<h2 className="col-span-12">{ctaBanner.title}</h2>
				<p className="col-span-12">{ctaBanner.content}</p>
			</BlockSection>
		</>
	);
}
