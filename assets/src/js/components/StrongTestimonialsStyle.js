const StrongTestimonialsStyle = (props) => {
	console.log(props);
	const { data } = props.view;

	const id = `.strong-view-id-${props.view.id}`;
	const { background } = data;
	let style = ``;

	if ('single' == background.type) {
		style += `${id} .strong-form-inner { background: ${background.color}; }`;
	} else if ('gradient' == background.type) {
		style += `background: {${background.gradient1}};
	background: -moz-linear-gradient(top, {${background.grandient1}} 0%, {${background.gradient2}}} 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, {${background.grandient1}}), color-stop(100%, {${background.gradient2}}}));
	background: -webkit-linear-gradient(top,  {${background.grandient1}} 0%, {${background.gradient2}}} 100%);
	background: -o-linear-gradient(top, {${background.grandient1}} 0%, {${background.gradient2}}} 100%);
	background: -ms-linear-gradient(top, {${background.grandient1}} 0%, {${background.gradient2}}} 100%);
	background: linear-gradient(to bottom, {${background.grandient1}} 0%, {${background.gradient2}}} 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='{${background.grandient1}}', endColorstr='{${background.gradient2}}}', GradientType=0);`;
	}

	if ('custom' == data['font-color'].type) {
		style += `${id} .strong-form-inner { color: ${data['font-color'].color} }`;
	}
	return [
		<style
			dangerouslySetInnerHTML={{
				__html: `
      				${style}
    				`
			}}
		/>
	];
};

export default StrongTestimonialsStyle;
