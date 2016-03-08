

//Method to create the chart
function makeHighchartsObject(){
        $('#container').highcharts({
        title: {
            text: 'US and CT Rate',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: MirrorCT.com',
            x: -20
        },
        xAxis: {
            categories: getMonth(),
            plotLines: [{
                color: 'red', // Color value
                dashStyle: 'longdashdot', // Style of the plot line. Default to solid
                value: 325, // Value of where the line will appear
                width: 2, // Width of the line    
            label: { 
                text: 'Beginning of the recession', // Content of the label. 
                align: 'middle', // Positioning of the label. 
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Rate'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'US Rate',
            data: getUsRate()},{ 
            name: 'CT Rate',
            data: getCtRate(),
        }]
    });
  }



//Testing, printing column
function print_sample(data){
  for (var i = 0; i < data.length; i++) {
    var data_point = data[i];

    var columnUS = "US Rate";
    var columnCT = "CT Rate";
    var columnMonth = "Month";

    console.log(data_point);
    
    //Month
    console.log("Month");
    console.log(data_point[columnMonth]);
    console.log("");

    //US Rate
    console.log("US Rate");
    console.log(data_point[columnUS]);
    console.log("");  

    //CT Rate
    console.log("CT Rate");
    console.log(data_point[columnCT]);
    console.log("");  

    
  } 
}

//returning the columns as array 
function getColumnAsArray(col){
  var array = [];//empty array to push it in
  for (var i = 0; i < data.length; i++) {
   array.push(data[i][col]);
  }
 return array;      
}

//Getting the USRate Column
function getUsRate(){
  return getColumnAsArray("US Rate");
}

//Getting the USRate Column
function getCtRate(){
  return getColumnAsArray("CT Rate");
}

//Getting the Month Column
function getMonth(){
  return getColumnAsArray("Month");
}







