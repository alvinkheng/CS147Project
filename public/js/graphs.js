// $(function() {
// 	var statuses = !{statuses}
// 	console.log("statuses: "+JSON.stringify(statuses))

// 	drawGraphs()
// })

function drawGraphs(statuses) {
	console.log("statuses: "+JSON.stringify(statuses))
	var w = 400;
	var h = 100;
	var barPadding = 1;

	var svg = d3.select("#emotion-graph")
        .append("svg")
        .attr("width", w)
        .attr("height", h);


    var dataset = [62, 18, 20]

    svg.selectAll("rect")
	   .data(dataset)
	   .enter()
	   .append("rect")
	   .attr("x", function(d, i) {
    	return i * (w / dataset.length);	})
	   .attr("y", function(d) {
  		  return h - d;  })
	   .attr("width", w / dataset.length - barPadding)
	   .attr("height", function(d) {
   		 return d;	})
	   .attr('fill', 'orange')
}