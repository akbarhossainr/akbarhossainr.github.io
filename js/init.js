$(document).ready(function(){
	$('ul.tabs').tabs();

	// progressbar.js@1.0.0 version is used
	// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

	var bar = new ProgressBar.Line(progressbar_php, {
		strokeWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		color: '#333',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'},
		text: {
		    style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#111',
				position: 'absolute',
				right: '10px',
				top: '0px',
				padding: 0,
				margin: 0,
				transform: null
		    },
		    autoStyleContainer: false
		},
			from: {color: '#333'},
			to: {color: '#ED6A5A'},
			step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});

	bar.animate(0.75);  // Number from 0.0 to 1.0

	var bar2 = new ProgressBar.Line(progressbar_js, {
		strokeWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		color: '#333',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'},
		text: {
		    style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#111',
				position: 'absolute',
				right: '10px',
				top: '0px',
				padding: 0,
				margin: 0,
				transform: null
		    },
		    autoStyleContainer: false
		},
			from: {color: '#333'},
			to: {color: '#ED6A5A'},
			step: (state, bar2) => {
			bar2.setText(Math.round(bar2.value() * 100) + ' %');
		}
	});

	bar2.animate(0.5);  // Number from 0.0 to 1.0

	var bar3 = new ProgressBar.Line(progressbar_html, {
		strokeWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		color: '#333',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'},
		text: {
		    style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#111',
				position: 'absolute',
				right: '10px',
				top: '0px',
				padding: 0,
				margin: 0,
				transform: null
		    },
		    autoStyleContainer: false
		},
			from: {color: '#333'},
			to: {color: '#ED6A5A'},
			step: (state, bar3) => {
			bar3.setText(Math.round(bar3.value() * 100) + ' %');
		}
	});

	bar3.animate(0.9);  // Number from 0.0 to 1.0

	var bar4 = new ProgressBar.Line(progressbar_css, {
		strokeWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		color: '#333',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'},
		text: {
		    style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#111',
				position: 'absolute',
				right: '10px',
				top: '0px',
				padding: 0,
				margin: 0,
				transform: null
		    },
		    autoStyleContainer: false
		},
			from: {color: '#333'},
			to: {color: '#ED6A5A'},
			step: (state, bar4) => {
			bar4.setText(Math.round(bar4.value() * 100) + ' %');
		}
	});

	bar4.animate(0.88);  // Number from 0.0 to 1.0

	var bar5 = new ProgressBar.Line(progressbar_mysql, {
		strokeWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		color: '#333',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'},
		text: {
		    style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#111',
				position: 'absolute',
				right: '10px',
				top: '0px',
				padding: 0,
				margin: 0,
				transform: null
		    },
		    autoStyleContainer: false
		},
			from: {color: '#333'},
			to: {color: '#ED6A5A'},
			step: (state, bar5) => {
			bar5.setText(Math.round(bar5.value() * 100) + ' %');
		}
	});

	bar5.animate(0.7);  // Number from 0.0 to 1.0

});