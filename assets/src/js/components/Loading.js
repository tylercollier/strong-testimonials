const { Fragment } = wp.element;
const { Spinner } = wp.components;
export const Loading = (props) => {

	if ('loading' == props.status) {
		return [
			<Fragment>
				<div className="st-block-preview">
					<div className="st-block-preview__content">
						<div className="st-block-preview__logo"> </div>
						<Spinner />
					</div>
				</div>
			</Fragment>,
		];
	}

	return null;

};

export default Loading;
