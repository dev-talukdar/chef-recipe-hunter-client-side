`
Main Requirements

 





with the Website name, Home, Blog and User profile picture. The user profile picture on the navbar is conditional. If the user is signed in, the navbar
 will show the profile picture; otherwise, it will show the Login button. If the user name is available, the user's name will be visible when the mouse
  hovers over the profile picture.
 

On the Registration page, display errors when:

🚩 update: If a user's email address or password doesn't match, display error. This error will be displayed on the Login page.

The password is less than 6 characters




When a user clicks on a chef's View Recipes button, he/she will be redirected to the Chef Recipes page. The Chef Recipes page will have the following :

 

Think about a section displaying the information of the selected chef's recipes in a tabular form or in a card group.

 

When clicking the Favorite button, show a toast message showing the recipe is your favorite and disable the button. -- partially done

Show a spinner when the data is in a loading state

 

 

Add "active route" to indicate the route which you are visiting.

Bonus------------------ 


The Chef Recipe page will be a private/protected page. If you reload the protected/private route (after login), this page will not redirect the user to 
the login page. Instead, it will keep the logged-in user on the protected route.

Apply lazy load to the chef picture either on the banner of Chef Recipes or on the chef pictures of the six cards on the Homepage.

Hint: Google React Awesome components, go to the GitHub repo, find react-lazy-load, and try it. Alternatively, you can try any other package as well.

FUN: The blog page, Create a heading and add an icon/ button. When you click on that button, it will create a pdf and will be downloaded ( This will 
    give you some fun. Try out this after completing all of your tasks. Hint: Explore react-to-pdf package). Your pdf should contain some information
     about the blog page.


`