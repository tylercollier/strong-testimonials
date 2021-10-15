export const Pagination = (props) => {
	return [
		<div className="pagination">
			<a className="st-previous">
				<span>Previous Page</span>
			</a>
			<div className="pages">
				<a class="page-numbers">1</a>
				<a class="page-numbers">2</a>
				<a class="page-numbers">3</a>
				<a class="page-numbers">4</a>
				<a class="page-numbers">5</a>
				<a class="page-numbers dots">...</a>
				<a class="page-numbers">8</a>
			</div>
			<a className="st-next">
				<span>Next Page</span>
			</a>
		</div>,
	];
};
export default Pagination;
