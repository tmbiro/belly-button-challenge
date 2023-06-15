# Belly Button Challenge

![bacteria](https://user-images.githubusercontent.com/119638430/230522846-028150ba-cbc9-4f45-99ac-8362f3d8b8fe.jpg)

# Background
 
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Instructions

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    * Use sample_values as the values for the bar chart.

    * Use otu_ids as the labels for the bar chart.

    * Use otu_labels as the hovertext for the chart.

        ![hw01](https://user-images.githubusercontent.com/119638430/230523037-24e4341f-f90b-42a9-9d77-ca904bf83026.png)

3. Create a bubble chart that displays each sample

    * Use otu_ids for the x values.

    * Use sample_values for the y values.

    * Use sample_values for the marker size.

    * Use otu_ids for the marker colors.

    * Use otu_labels for the text values

      <img width="1416" alt="bubble_chart" src="https://user-images.githubusercontent.com/119638430/230523197-877111bf-7ffd-4a44-af3a-740604a875a2.png">
      
4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

      ![hw03](https://user-images.githubusercontent.com/119638430/230523309-c42c92a8-9b90-4080-8b71-e660145c60ee.png)
      
6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

    ![hw02](https://user-images.githubusercontent.com/119638430/230523358-953e8431-8994-4fbf-9b59-49d12c61d592.png)

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
      

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.

Tutoring Services 

AskBCS Learning Assistants

https://stackoverflow.com/questions

https://devdocs.io/d3~3/selections.md#d3_select

https://javascript.info/keys-values-entries

https://devdocs.io/d3~5/d3-request#json

https://plotly.com/javascript/basic-charts/
