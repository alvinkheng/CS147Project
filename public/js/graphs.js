
function drawLineGraph(statuses, startDate) {
	$('#time-graph').html('')
	var emotionScale = { 'excited': 2, 'happy':1, 'neutral': 0, 'sad':-1, 'angry':-2}

	var w = $(window).width();
  	var h = 150;
  	var p = 20
  	var bottomMargin = 35;
  	var topMargin = 10;
  	var margin = 40;

  	var minStartDate = new Date((new Date()).getTime()-1000*60*60*24*7);	// last week, testing
  	//loop through data
  	var relevantData = []
  	for(var i=0; i < statuses.length; i++) {
  		var curr = statuses[i]
  		var currDate = new Date(curr['date'])
  		if(currDate > minStartDate) {
  			var currEmotion = curr['emotion']
  			if(currEmotion in emotionScale) 
 	 			relevantData.push({ 'date': currDate, 'score': emotionScale[currEmotion] })
  		}
  	}
  	console.log("Filtered data for line graph: "+JSON.stringify(relevantData))

  	// set up axes
  	var minDate = relevantData[(relevantData.length - 1)]['date']
  	var maxDate = relevantData[0]['date']
  	var y = d3.scale.linear().domain([-2, 2]).range([h, 0])
    var x = d3.time.scale().domain([minDate, maxDate]).range([0, w-p*2]);

	var svg = d3.select("#time-graph")
	  	.append("svg")
	  	.attr("width", w)
	  	.attr("height", h+bottomMargin+topMargin)

	var g = svg.append("svg:g")
    	.attr("transform", "translate(" + 2*p + "," + p + ")");
			
	var line = d3.svg.line()
	    .x(function(d) { return x(d.date); })
	    .y(function(d) { return y(d.score); })

	g.append("svg:path").attr("d", line(relevantData));

	g.selectAll("circle.line")
	    .data(relevantData)
	    .enter().append("svg:circle")
	    .attr("class", "line")
	    .attr("cx", function(d) { return x(d.date) })
	    .attr("cy", function(d) { return y(d.score) })
	    .attr("r", 3.5)

	// x-axis
	g.append("svg:line")
	    .attr("x1", x(minDate))
	    .attr("y1", y(0))
	    .attr("x2", x(maxDate))
	    .attr("y2", y(0))

	// y-axis
	g.append("svg:line")
	    .attr("x1", x(minDate))
	    .attr("y1", y(-2))
	    .attr("x2", x(minDate))
	    .attr("y2", y(2))

	console.log('xTicks')
	console.log(x.ticks(5))
	g.selectAll(".xLabel")
	    .data(x.ticks(5))
	    .enter().append("svg:text")
	    .attr("class", "xLabel")
	    //.text(function(d) { return d.date.getMonth() + '-'+d.date.getDate() })
	   	.text(String)
	    .attr("x", function(d) { console.log('x tick:'+d); return x(d.date) })
	    .attr("y", function() { return y(0) })
	    .attr("text-anchor", "middle")

	// g.selectAll(".yLabel")
	//     .data(y.ticks(4))
	//     .enter().append("svg:text")
	//     .attr("class", "yLabel")
	//     .text(String)
	//     .attr("x", 0)
	//     .attr("y", function(d) { return y(d.score) })
	//     .attr("text-anchor", "right")
	//     .attr("dy", 4)

	// g.selectAll(".xTicks")
	//     .data(x.ticks(5))
	//     .enter().append("svg:line")
	//     .attr("class", "xTicks")
	//     .attr("x1", function(d) { return x(d.date); })
	//     .attr("y1", -1 * y(0))
	//     .attr("x2", function(d) { return x(d.date); })
	//     .attr("y2", -1 * y(-0.3))

	// g.selectAll(".yTicks")
	//     .data(y.ticks(4))
	//     .enter().append("svg:line")
	//     .attr("class", "yTicks")
	//     .attr("y1", function(d) { return y(d.score); })
	//     .attr("x1", x(-0.3))
	//     .attr("y2", function(d) { return y(d.score); })
	//     .attr("x2", x(0))
		
}

function drawGraphs(statuses) {
 	console.log('inside drawGraphs!'+JSON.stringify(statuses))
	$('#emotion-graph').html('')

  var w = $(window).width();
  var h = 100;
  var bottomMargin = 35;
  var topMargin = 10;
  var barPadding = 1;

  var svg = d3.select("#emotion-graph")
	  .append("svg")
	  .attr('class', 'emotion')
	  .attr("width", w)
	  .attr("height", h+bottomMargin+topMargin);

  var emotionIndex = { 'excited':0, 'happy':1, 'neutral':2, 'sad':3, 'angry':4, 'angel':5, 'devil':6, 'disappoint':7, 'laugh':8, 'surprised':9}
  var emotions = []
  for(var key in emotionIndex) {
  	emotions.push(key)
  }
  var colors = ['orange', 'pink', 'gray', 'blue', 'red', 'silver', 'maroon', 'black', 'salmon', 'coral']

  var dataset = [0,0,0,0,0,0,0,0,0,0]

  for(var i=0; i < statuses.length; i++) {
	  var curr = statuses[i];
	  if(emotionIndex[curr['emotion']]) {
		dataset[emotionIndex[curr['emotion']]]++;
	  }
  }

  var max = Math.max.apply(Math, dataset)
  var scale = h / max;
  console.log('scale: '+scale)

  console.log('dataset: '+ JSON.stringify(dataset))
  svg.selectAll("rect")
	.data(dataset)
	 .enter()
	 .append("rect")
	 .attr("x", function(d, i) {
	  return i * (w / dataset.length);    })
	 .attr("y", function(d) {
		return h +topMargin - d*scale;  })
	 .attr("width", w / dataset.length - barPadding)
	 .attr("height", function(d) {
	   return d * scale})
	 .attr('fill', function(d, i) {
		return colors[i % colors.length]	 	
	 })

	svg.selectAll("image")
	  	.data(dataset)
	  	.enter()
	  	.append("image")
		//.attr("xlink:href", "https://github.com/favicon.ico")
		.attr("xlink:href", function(d, i) {
			return '/imgs/'+emotions[i]+'-01.png'
		})
		.attr("width", 39)
	    .attr("height", 39)
		.attr("x", function(d, i) {
		  return i * (w / dataset.length);    })
		.attr("y", h+topMargin)
		.attr("width", w / dataset.length - barPadding)

	svg.selectAll("text")
	   	.data(dataset)
	   	.enter()
	   	.append("text")
	   	.text(function(d) {
	   		if(d == 0) return ""
       		return d;
   		})
   		.attr("x", function(d, i) {
    	  	return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
 	  	})
	   	.attr("y", function(d) {
       		return h - (d * scale) + topMargin+ 15; 
    	})
   		.attr("font-family", "sans-serif")
   		.attr("font-size", "11px")
  	 	.attr("fill", "white")
  	 	.attr("text-anchor", "middle")

}