function drawGraphs(statuses) {
  console.log("statuses: "+JSON.stringify(statuses))
  var w = $(window).width();
  var h = 100;
  var bottomMargin = 35;
  var barPadding = 1;

  var svg = d3.select("#emotion-graph")
	  .append("svg")
	  .attr("width", w)
	  .attr("height", h+bottomMargin);

  var emotionIndex = { 'excited':0, 'happy':1, 'neutral':2, 'sad':3, 'angry':4, 'angel':5, 'devil':6, 'disappoint':7, 'laugh':8, 'surprised':9}
  var emotions = []
  for(var key in emotionIndex) {
  	emotions.push(key)
  }
  console.log("emotions: "+JSON.stringify(emotions))

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
		return h - d*scale;  })
	 .attr("width", w / dataset.length - barPadding)
	 .attr("height", function(d) {
	   return d * scale})
	 .attr('fill', 'orange')

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
		.attr("y", h)
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
       		return h - (d * scale) + 17; 
    	})
   		.attr("font-family", "sans-serif")
   		.attr("font-size", "11px")
  	 	.attr("fill", "white")
  	 	.attr("text-anchor", "middle")

}