# FEC-catwalk

# Project Catwalk

Cat walk is a client-facing retail web-portal

## Installation


Install the dependencies in the root directory
```bash
npm install
```

To start bundling and work on react
```bash
npm run watch
# when deploying the App on AWS:
npm run build
```

To start the server (port 3000)
```bash
npm run start
```




## Usage
### Overview (Nan Jiang) [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/dorajiang/)](https://www.linkedin.com/in/dorajiang/) [![GitHub: GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/nannobug)](https://github.com/nannobug)
Product overview shows relevant information for a user selected product. It also provides various options for users to browse styles and provides interaction options for users to add a sku to shopping cart for purchase.
 
**Overview consists of functional components:**
- Image Gallery
- Product information
- Style Selector
- Add to shopping cart
 
**Image Gallery:**
- Quantity option: style & size (i.e. sku);
  - Thumbnail images carousel: style;
  - Main image: style;
- Category: product;
- Product title: product;
- Style selection options: style;
- Size Options: style;
 
*Note: A unique combination of style and size defines a SKU.* 
 
**Allowed User Interactions:**
- Click on thumbnail image carousel, up, and down button to view different images per style;
- Click on left and right button to view different images per style;
- Click on main Image to zoom-in
- Select a style
- Select size and quantity
- Add a SKU to shopping cart

### Related Items and Products (Andrew Cho) [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/andrew-cho-b06768218/)](https://www.linkedin.com/in/andrew-cho-b06768218/) [![GitHub: GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/AndrewGunnCho)](https://github.com/AndrewGunnCho)
 
This component is split into two parts: *Related Items* and *Outfit List*
  
**Related Items**

<ul>
<li> Each product card has an image that can be <em>clicked</em> on in order to switch the overview over to the selected product. </li>
<li> The related items will be refreshed showing a new list of items that are related to the currently viewed product. </li>
<li> If the number of related items is large enough to fill <em>past the screen</em> of the browser, a carousel will be displayed with buttons that navigate towards either side of the carousel on click. </li>
<li> Each product card has its own button on the <em>upper right corner</em> that will compare the currently viewed product’s features to the selected card’s product’s features. </li>
</ul>
 
**Outfit List**

 <ul>
 <li>The add to outfit button will store the currently viewed product into a new list that persists with each user. </li>
 <li> Each product card has a button on the <em>top right</em> that will remove the selected product card from the outfit list. </li>
 <li>The outfit list shares the same properties as the related items except for the functionality of the action button.</li>
 </ul>

 
### Questions and Answers (Qinyu Zhu) [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/qinyu-867152181/)](https://www.linkedin.com/in/qinyu-867152181/) [![GitHub: GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/zhuzhuxia078)](https://github.com/zhuzhuxia078)
**:open_book: Introduction**

- Our Q&A is sorted by helplessness, both questions and answers to give clients better review. 
- The **seller's** answer shows at the top of the answer list as the official answer. 
- Clients can vote for helpness, but only once. 
- Clients can report the unhelpful Q&A for internal analysis, then it will not show on the page. 
- Clients can search for their aimed information
- Clients can add Q&A after clicking on **add more** button. Name and answer are required, if it’s empty, the error will alert. Clients can upload answer img by submitting img url.

**:evergreen_tree: Widget structure**
```bash
    QA
      SearchBar

      QuestionList
            AnswerList
            Add answers Modal

      Add Questions
            Add Questions Modal
 
```

 
 
 
 
 
 
### Ratings and Reviews (Daniel Prejs) [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/daniel-prejs-7842611a9/)](https://www.linkedin.com/in/daniel-prejs-7842611a9/) [![GitHub: GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/dprejs)](https://github.com/dprejs)
 
Ratings and reviews has a list of reviews that can be filtered in different ways:
- by Relevant 
- by Newest
- by Helpful
- by Rating value
- by Search
All filters selected will stack and work together. It also has visual breakdowns of the review meta data and the ability to add reviews. 

The first way to filter the reviews is by the sort selecter, there are 3 options to sort: 
-  Newest: Sorts by the date of the review 
- Helpful: Sorts by the number of times a review has been marked helpful
- Relevant: Sorts by a combination of review date and helpfulness. 

Reviews can also be filtered by the rating score they received. These filters can be applied by clicking on rating breakdown elements located below the overall score. These filters are additive and more than one can be selected and toggled off. Rating filters can be toggled off by clicking the rating bar again, by clicking the rating name in the list of filters applied or by clicking the “Clear filters button”.

The search bar will automatically start searching after 3 character have been entered and all matching reviews will be shown.
 
Reviews will show 2 at a time and the list can be expanded by clicking the “More Reviews button”. 

Within each review the user can: 

- Click on image thumbnails to see the full resolution image.
- Click on Helpful to mark the review as helpful. This interaction is saved to local storage so the user can only mark each review once.
- Click on report the review is instantly removed and will not appear on future page loads.

If the user tries to submit a review with mandatory fields not filled, a list of fields that still need to be filled will appear at the top of the form. The mandatory fields not filled will also have their titles text color changed to red to better highlight what still needs to be filled out.


## File Structure

Create a folder for each component in the src directory.

## Contributing

Do not write on the master branch. Create your own branch.
All Pull Requests must go through a code review.

## Git Workflow

<b>Master</b>: Production code\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Staging</b>: Integration test environment\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Overview</i>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Ratings&Reviews</i>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Questions&Answers</i>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Related Items</i>
