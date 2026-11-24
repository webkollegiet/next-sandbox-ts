export default function ArticleCard({ article }) {
	return (
		<article className="col-span-4" key={article.title}>
			<h2>{article.title}</h2>
			{article.content.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
		</article>
	);
}