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
    getdata(sample_1);
  });
}

// Initialize the dashboard
init();

// Fetch new data each time a new sample is selected
function newchoice(sample_i) {
  getdata(sample_i);
}
