export const Pagination = (props) => {
	return [
		<div className="pagination">
			<a className="st-previous">
				<span>Previous Page</span>
			</a>
			<div className="pages">
				<a className="page-numbers">1</a>
				<a className="page-numbers">2</a>
				<a className="page-numbers">3</a>
				<a className="page-numbers">4</a>
				<a className="page-numbers">5</a>
				<a className="page-numbers dots">...</a>
				<a className="page-numbers">8</a>
			</div>
			<a className="st-next">
				<span>Next Page</span>
			</a>
		</div>,
	];
};
export default Pagination;
