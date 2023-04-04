// 1. Use the D3 library to read in samples.json from the URL 

// Link to data file 
const url = 'data/samples.json';

function init() {

// Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

// Use the list of sample names to populate the select options
  d3.json(url).then((data) => {
    var names = data.names;

    names.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var sample_1 = names[0];
    console.log(sample_1);
    makechart(sample_1);
    getdata(sample_1);
  });
}

// Initialize the dashboard
init();

// Fetch new data each time a new sample is selected
function newchoice(sample_i) {
  getdata(sample_i);
  makechart(sample_i);
}

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// Create the bar chart function.
function makechart(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json(url).then((data) => {

    // Create a variable that holds the first sample in the array.
    let sample_1 = data.samples.filter(sample_i => sample_i.id == sample)[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    let otu_ID = sample_1.otu_ids;
    let otu_label = sample_1.otu_labels;
    let s_values = sample_1.sample_values;

    // Create the yticks for the bar chart.

    let top_10 = 10; 

    var yticks = (
      otu_ID
      .slice(0, top_10)
      .map(val => 'OTU ' + val)
      .reverse()
      );

    top_labels = (
      otu_label
      .slice(0, top_10)
      .map(val => val)
      .reverse());

    top_values = (
      s_values
      .slice(0, top_10)
      .map(val => val)
      .reverse());

    // Create the trace for the bar chart. 
    var bar_data = [{
      x: top_values,
      y: yticks,
      text: top_labels,
      type: 'bar',
      orientation: 'h'
    }];

    // Create the layout for the bar chart. 
    var bar_layout = {
      hovermode: 'closest',
      title: '<b>Top 10 Bacteria Cultures Found</b>'
    };

    // Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', bar_data, bar_layout);

    
  });
}