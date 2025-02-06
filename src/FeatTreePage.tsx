import BasicPage from './pages/BasicPage';
import jsx from './pages/subpages/__feat_tree_page';
import './pages/Page.css';

const FeatsTreePage: React.FC = () => {
	return (
		<BasicPage
			title="Feat Trees"
			hierarchy={[["Feats", "main/feats"]]}
			hideSources
			pageId="feattreespage"
			className="featsTreePage"
		>
			<section>
				<p>Pathfinder has many "feat trees" where you must learn one feat (or more) before being able to take a beter feat later on. Below are the biggest feat trees, typically with 5 or more feats in a tree.</p>
				<p>This page only notes <strong>feat</strong> prerequisites, not other prerequisites like BAB or class features. In addition, some feats (like Weapon Focus) require specific choices to serve as prerequisite. See the individual feats for details.</p>
				<p>Use the find-in-page button above to quickly find a specific feat.</p>
			</section>
			{jsx}
		</BasicPage>
	);
};

export default FeatsTreePage;
