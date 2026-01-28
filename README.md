Markdown
# RESTful API Activity - Ronadel
## Best Practices Implementation
 1. Environment Variables :
- Why did we put ' BASE_URI' in ` .env instead of hardcoding it?
- Answer: We put BASE_URI in a .env file to keep configuration values separate from our source code, making the application more secure, flexible, and easier to deploy across different environments like development, staging, and production without modifying the codebase. This approach enhances security by preventing sensitive or environment-specific information from being exposed in the code, improves maintainability by allowing easy updates to configuration values without redeploying code, and boosts portability by enabling the same codebase to run on multiple systems with varying configurations.
 2. Resource Modeling :
- Why did we use plural nouns (e.g., ' /dishes' ) for our routes?
- Answer: We use plural nouns for routes, such as '/dishes', to follow RESTful API conventions that treat endpoints as collections of resources rather than individual items. This approach makes the API more intuitive and consistent, as it allows for standard CRUD operations like listing all dishes (GET /dishes), creating a new one (POST /dishes), or accessing a specific dish (GET /dishes/{id}). It also simplifies client-side logic by providing a uniform pattern for interacting with resource collections, enhancing scalability and readability across the API.
 3. Status Codes :
 -When do we use ' 201 Created' vs ` 200 OK' ?
 - Why is it important to return ' 404' instead of just an empty array or a generic error?
 - Answer: We use '201 Created' for responses to POST requests that successfully create a new resource, indicating not just success but also that a new entity has been added, often including a Location header with the URI of the created resource. In contrast, '200 OK' is used for successful operations that don't involve creation, such as retrieving data (GET) or updating existing resources (PUT/PATCH), signaling that the request was processed without errors. Returning '404 Not Found' instead of an empty array or a generic error is crucial for precise error handling, as it explicitly communicates that the requested resource does not exist, enabling clients to distinguish between a missing resource and other issues like empty results or server errors, which improves debugging, user experience, and API reliability.
 4. Testing :
   <img width="1354" height="166" alt="testing" src="https://github.com/user-attachments/assets/1354372e-32ef-4d5f-888b-2543d8cc6fac" />


