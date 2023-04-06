// 1. Use the D3 library to read in samples.json from the URL 

// Link to data file 
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Grab a reference to the dropdown select element
function init() {
  var selector = d3.select("#select-data");

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
    makedata(sample_1);
  });
}

// Initialize the dashboard
init();



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

    // Create the yticks for the bar chart using otu_ids.

    let top_10 = 10; 

    var yticks = (
      otu_ID
      .slice(0, top_10)
      .map(val => 'OTU ' + val)
      .reverse()
      );

    // Use otu_labels for top 10 for hovertext
    top_labels = (
      otu_label
      .slice(0, top_10)
      .map(val => val)
      .reverse());

      // Use sample_values from top ten as values
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

    // 3. Create a bubble chart that displays each sample.

    // Create trace for bubble chart.
    var bubble_data = [{
      x: otu_ID, // Use otu_ids for the x values.
      y: s_values, // Use sample_values for the y values.
      text: otu_label, // Use otu_labels for the text values.
      mode: 'markers',
      marker: { 
        size: s_values, //Use sample_values for the marker size.
        color: otu_ID, // Use otu_ids for the marker colors.
        colorscale: 'Portland' }
    }];
    // Create layout for bubble chart.
    var bubble_layout = {
      hovermode: 'closest',
      title: '<b>Bacteria Cultures per Sample</b>',
      xaxis: { title: 'OTU ID' }
    };
    // Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubble_data, bubble_layout);
    
  });
}

// 4. Display the sample metadata, i.e., an individual's demographic information.


// Demographics Panel 
function makedata(sample) {
  d3.json(url).then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var results = metadata.filter(sample_i => sample_i.id == sample);
    var result = results[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

    Object.entries(result).forEach(([id, val]) => {
      panel.append("h6").text(id.toUpperCase() + ': ' + val);
    });
  });
}

// 6. Update all the plots when a new sample is selected.

// Fetch new data each time a new sample is selected
function newchoice(sample_i) {
  makedata(sample_i);
  makechart(sample_i);
}