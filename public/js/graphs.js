
function drawLineGraph(graphId, statuses, startDate) {
	$(graphId).html('')
	var emotionScale = { 'excited': 2, 'happy':1, 'neutral': 0, 'sad':-1, 'angry':-2}
	var invEmotionScale = {}
	for(emotion in emotionScale) {
		invEmotionScale[emotionScale[emotion]] = emotion
	}

	var w = $(window).width();
  	var h = 150;
  	var p = 20
  	var bottomMargin = 35;
  	var topMargin = 10;
  	var margin = 40;

  	var minStartDate = new Date((new Date()).getTime()-1000*60*60*24*7);	// last week, testing
  	
  	// loop through data
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

  	// set up axes
  	var minDate = relevantData[(relevantData.length - 1)]['date']
  	var maxDate = relevantData[0]['date']
  	var y = d3.scale.linear().domain([-2, 2]).range([h, 0])
    var x = d3.time.scale().domain([minDate, maxDate]).range([p, w-p*2]);

	var svg = d3.select(graphId)
	  	.append("svg")
	  	.attr("width", w-p)
	  	.attr("height", h+bottomMargin+topMargin)

	var g = svg.append("svg:g")
    	.attr("transform", "translate(" + p + "," + p + ")");
			
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
	    .attr("r", 6)
	    .attr('fill', "orange")

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

	var datesSeen = {}
	g.selectAll(".xLabel")
	    .data(x.ticks(5))
	    .enter().append("svg:text")
	    .attr("class", "xLabel")
	    //.text(function(d) { return d.date.getMonth() + '-'+d.date.getDate() })
	   	.text(function(d) {
	   		var dateStr = (d.getMonth()+1) + '-' + d.getDate()
	   		if(dateStr in datesSeen) {
	   			var hours = d.getHours() % 13
				var minutes = d.getMinutes()
				if (minutes < 10){
					minutes = "0" + minutes
				}
				dateStr = hours + ":" + minutes + " "
				if(hours > 11){
					dateStr += "PM"
				} else {
					dateStr += "AM"
				}
	   		} else {
	   			datesSeen[dateStr] = true
	   		}
	   		return dateStr
	   	})
	    .attr("x", function(d) { return x(d) })
	    .attr("y", function() { return y(0) + 20 })
	    .attr("text-anchor", "middle")    

	g.selectAll(".yLabel")
	    .data(y.ticks(5))
	    .enter().append("image")
	    .attr("class", "yLabel")
	    .attr("xlink:href", function(d, i) {
			return '/imgs/'+invEmotionScale[d]+'-01.png'
		})
	    .attr("x", -p)
	    .attr("y", function(d) { 
	    	return y(d) - 20 
	    })
	    .attr("width", 39)
	 	.attr("height", 39)
}

function drawGraphs(graphId, statuses) {
// 	console.log('inside drawGraphs!'+JSON.stringify(statuses))
	$(graphId).html('')

  var w = $(window).width();
  var h = 100;
  var bottomMargin = 35;
  var topMargin = 10;
  var barPadding = 1;

  var svg = d3.select(graphId)
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

//  console.log('dataset: '+ JSON.stringify(dataset))
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