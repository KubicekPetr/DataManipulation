import { Component, render } from 'preact';

function getTicks(count, max) {
	// destructuring not working now 
	return Array.from(Array(count).keys()).map(d => max / (count - 1) * parseInt(d));
}

class LineChart extends Component {
	render ({ data }) {
    	let WIDTH = 500;
        let HEIGHT = 300;
        let TICK_COUNT = 5;
        let MAX_X = Math.max(...data.map(d => d.x));
        let MAX_Y = Math.max(...data.map(d => d.y));
        
        let x = val => val / MAX_X * WIDTH;
        let y = val => HEIGHT - val / MAX_Y * HEIGHT;
        let x_ticks = getTicks(TICK_COUNT, MAX_X);
        let y_ticks = getTicks(TICK_COUNT, MAX_Y).reverse();
                
        let d = `M${x(data[0].x)} ${y(data[0].y)} ${data.slice(1).map(d => {
        	return `L${x(d.x)} ${y(d.y)}`;
        }).join(' ')}`;
    
  	    return (
        	<div class="LineChart" style={`width: ${WIDTH}px; height: ${HEIGHT}px`}>
                <svg width={WIDTH} height={HEIGHT}>
                    <path d={d} />
                </svg>
                <div class="x-axis">
                    {x_ticks.map(v => <div data-value={v} />)}
        	    </div>
                <div class="y-axis">
                    {y_ticks.map(v => <div data-value={v} />)}
                </div>
        	</div>
        );
    }
}

export default LineChart;