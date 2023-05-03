`
Main Requirements
Create a website that shows the recipes of all available chefs. The website must be exclusively dedicated to one cuisine(Bangladeshi, Chinese, Indian,
     Mediterranean, Thai, Japanese, Italian, African, Vietnamese, Srilankan, Nepalese, American, Korean, Mexican, Australian, Afgan, French, etc.). 
     For example, if you give Chinese Chef and Chinese food recipes, it will only have Chinese Chef and Chinese food recipes. You cannot add recipes 
     from other countries—only one country chef and recipe.




First, select the cuisine type. Google the site design or visit ThemeForest to get your website idea. However, your website cannot relate to your 
previous assignments or any demo project displayed in the course or our conceptual sessions.





with the Website name, Home, Blog and User profile picture. The user profile picture on the navbar is conditional. If the user is signed in, the navbar
 will show the profile picture; otherwise, it will show the Login button. If the user name is available, the user's name will be visible when the mouse
  hovers over the profile picture.



Make sure that the navbar and footer are present on all pages:

When a user clicks on the login button, they will be redirected to the login page having the following:

Email/Password
Google Sign-in
GitHub Sign-in
A link that will redirect to the registration page
The Registration page will have the Email/Password form having the following fields:

Name

Email

Password

Photo URL

Note: Do not enforce the email verification method, as it will inconvenience the examiner. If you want, you can add email verification after receiving 
the assignment result.

On the Registration page, display errors when:

🚩 update: If a user's email address or password doesn't match, display error. This error will be displayed on the Login page.

The password is less than 6 characters

A user cannot submit empty email and password fields

 

The home page will have a Chef section with at least six cards. Each card will have the following information:

Chef Picture

Chef Name

Years of experience

Numbers of recipes

Likes

View Recipes Button

Add at least two extra sections on the home page. Make sure the sections are meaningful for the website you are building.

When a user clicks on a chef's View Recipes button, he/she will be redirected to the Chef Recipes page. The Chef Recipes page will have the following :

Banner - chef picture, chef name, a short bio/description, likes, number of recipes, and years of experience.

Think about a section displaying the information of the selected chef's recipes in a tabular form or in a card group.

Each recipe info should contain the recipe name, ingredients (at least 5), cooking method, rating, and a Favorite button. Show at least 3 recipes. for
 each chef. If needed, you can have duplicate recipes for each chef

When clicking the Favorite button, show a toast message showing the recipe is your favorite and disable the button.

Show a spinner when the data is in a loading state

Create a 404 page. Add a picture on the 404 page.

Use the Environment variable to hide the Firebase config keys.

Add "active route" to indicate the route which you are visiting.

Bonus------------------ 

 

Make your website home page mobile & desktop responsive (tablet responsive is optional)

Create a blogs page route where you will have to answer the following questions

Tell us the differences between uncontrolled and controlled components.

How to validate React props using PropTypes

Tell us the difference between nodejs and express js.

What is a custom hook, and why will you create a custom hook?

The Chef Recipe page will be a private/protected page. If you reload the protected/private route (after login), this page will not redirect the user to 
the login page. Instead, it will keep the logged-in user on the protected route.

Apply lazy load to the chef picture either on the banner of Chef Recipes or on the chef pictures of the six cards on the Homepage.

Hint: Google React Awesome components, go to the GitHub repo, find react-lazy-load, and try it. Alternatively, you can try any other package as well.

FUN: The blog page, Create a heading and add an icon/ button. When you click on that button, it will create a pdf and will be downloaded ( This will 
    give you some fun. Try out this after completing all of your tasks. Hint: Explore react-to-pdf package). Your pdf should contain some information
     about the blog page.

Make sure your site looks reasonable. The design and color selection is meaningful.

Clean and organized Code (folder structure). Organize components with meaningful names, and add comments when needed.
`