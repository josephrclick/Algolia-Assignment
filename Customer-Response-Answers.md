Question 1:  
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers,  
George
<br><br><br>
**RESPONSE 1:**<br><br>
Hello George,

Joe Click with Algolia here. I’m happy to help with your onboarding however I can!

I like to think of records as the individual “rows” in a database or spreadsheet file. Each row contains details (columns) about the individual record. As an example, say you run a restaurant serving various dishes. Each dish on the menu is like a record in your dataset, and each record (dish) contains details like ingredients, description, price, and so on.

Indexing these records is like categorizing your menu items into “Appetizers”, “Entrees”, and “Desserts” sections. Now, when a customer wants dessert they can quickly go to the dessert section and find their treat without having to look through every dish on the whole menu.

Finally, Custom Ranking in Algolia is how you prioritize displaying certain search results above others when multiple records are returned. The metrics you choose to use for your Custom Ranking depends on your goals and what you’d like to present to a searching user on your site. Continuing the restaurant example, you may want to sort your Appetizers or Desserts with your most popular items at the top of the list, or maybe the dishes with the greatest profit margin. You rank by whatever metrics you think will help catch your visitor’s eye and encourage them to order, or, you choose the data that helps highlight your “best” items in search results to present to your site visitors.

I hope this makes things clearer. Please let me know if I can be of further assistance!

Joe Click
<br><br><br>-----<br>
Question 2:  
Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt
<br><br><br>
**RESPONSE 2:**<br><br>
Hi Matt,

We appreciate any feedback and thank you for taking the time to reach out. As the dashboard design is new, I wanted to call your attention to the Index configuration page itself and the “Manage Index” dropdown near the top of the page, in case you were not aware of its functionality.

While updating data, testing new facets or filters, or managing UI demos on your Index page, the Manage Index dropdown persists, allowing you to clear or delete from whatever tab within the Index configuration you are on. It’s definitely handy when iterating in these areas.

If you are working elsewhere in the dashboard and need to manage your indices quickly, I recommend [using the Algolia CLI](https://www.algolia.com/doc/tools/cli/get-started/overview/)  (command-line interface) where you can enter simple commands [like these](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#delete-indices-with-the-api) in a separate terminal window to manage your indices on the fly.

I linked a couple docs on the Algolia CLI above if you’d like to take a look and let me know what you think. I’m happy to jump on a call to walk through setting up and using the tool or to discuss possible other approaches anytime.

Thank you,

Joe Click
<br><br><br>-----<br>
Question 3:  
Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo
<br><br><br>
**RESPONSE 3:**

Hello Leo,

I’m happy to hear you are looking at integrating Algoila with your website! Implementing Algolia Search does require some basic HTML, CSS, and JavaScript familiarity but does not require advanced coding or any crazy hoops to jump through. From our past conversations about your role managing [LazyLeosLegos.com](https://youtu.be/8ybW48rKBME?si=zfjNJ6RjD1OxLmsz) (love the site by the way), I’m sure you have the skills and access needed to get up and running.

At a high level, you will:

- Upload your data to your Algolia application and create an index of that data
- Configure the index by indicating the fields that should be searched, how results should be ranked, filters, and other initial configuration in the Algolia UI
- Frontend setup - here’s where you get to insert a little code
  - Use one of several JavaScript libraries to streamline creating your search UI with Algolia’s widgets
  - Add or connect your search bar to your Algolia index
  - Place facets and filters and other page layout changes
  - Tweak CSS to match your site style

We have an excellent document library [here](https://www.algolia.com/doc/) featuring a two-minute interactive tutorial with code examples to get your hands on now., or dive into our [quick start guide](https://www.algolia.com/doc/guides/getting-started/quick-start/).

Hope this helps!

Joe Click
