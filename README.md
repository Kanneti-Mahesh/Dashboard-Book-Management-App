# Dashboard-Book-Management-App

🔹 Objective:
Build a responsive React.js dashboard that fetches, displays, and allows CRUD operations on a
list of books using a mock JSON-server API.


# 1. Home Page (Dashboard)
○ List of books displayed in a table/grid view.  **Completed**
○ Each book should show: Title, Author, Genre, Published Year, and Status   **Completed**
(Available/Issued)
○ Include pagination (10 books per page).   **Completed**
○ Search by title or author.    **Completed**
○ Filters for genre/status (dropdowns or tabs).   **Completed**

# 2. Add/Edit Book Modal/Form
○ Modal or separate route to add or edit a book.    **Completed**
○ Form validations using react-hook-form or Formik.   **Completed** [Formik]
○ On submit, send data to the API.    **Completed** [JSON-Server]

# 3. Delete Book
○ Confirmation popup before deletion.  **Completed**
○ Show toast notifications for success/error actions.  **Completed**  [react-hot-toast]

# 4. Styling/Design
○ Use any UI library like Material UI, Ant Design, or Tailwind CSS   **Completed**  [Tailwind CSS]
○ Ensure responsiveness and UX best practices.  **Completed** 

# API Integration:
Use the following fake API for testing:   **Completed**  [JSON-SERVER]
https://crudcrud.com (or alternatively https://reqres.in or set up a mock API using json-server)
● GET /books   **Completed** 
● POST /books    **Completed** 
● PUT /books/:id    **Completed** 
● DELETE /books/:id   **Completed** 


# 🔹 Bonus Points:
● Implement loading skeletons or spinners during data fetching.   **Completed**  [Spinner in Tailwind CSS]
● Use Redux or Context API for state management (if needed).    **Completed**   [Context-API]
● Use React Router for navigation.           ****Completed** **    [BrowserRouter in react-router-dom]

