var data = [
    {
        value: 100,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 25,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 25,
        color: "green",
        highlight: "#FFC870",
        label: "Yellow"
    },    
];

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var midX = canvas.width/2;
var midY = canvas.height/2
var totalValue = getTotalValue(data);

// Create a pie chart
var myPieChart = new Chart(ctx).Pie(data, {
    showTooltips: false,
    onAnimationProgress: drawSegmentValues
});

var radius = myPieChart.outerRadius;

function drawSegmentValues()
{
    for(var i=0; i<myPieChart.segments.length; i++) 
    {
        ctx.fillStyle="white";
        var textSize = canvas.width/15;
        ctx.font= textSize+"px Verdana";
        // Get needed variables
        var value = myPieChart.segments[i].value/totalValue*100;
        if(Math.round(value) !== value)
        	value = (myPieChart.segments[i].value/totalValue*100).toFixed(1);
        value = value + '%';
        
        var startAngle = myPieChart.segments[i].startAngle;
        var endAngle = myPieChart.segments[i].endAngle;
        var middleAngle = startAngle + ((endAngle - startAngle)/2);

        // Compute text location
        var posX = (radius/2) * Math.cos(middleAngle) + midX;
        var posY = (radius/2) * Math.sin(middleAngle) + midY;

        // Text offside by middle
        var w_offset = ctx.measureText(value).width/2;
        var h_offset = textSize/4;

        ctx.fillText(value, posX - w_offset, posY + h_offset);
    }
}

function getTotalValue(arr) {
    var total = 0;
    for(var i=0; i<arr.length; i++)
        total += arr[i].value;
    return total;
}

