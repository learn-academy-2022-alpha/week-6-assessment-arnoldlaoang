# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

- The foreign key will be added in Student model by adding each students with unique key.

Researched answer:

- I made a visual diagram to help visualize the prompt and figue out where the foreign key would go. Through this i came to my senses that the propmt said that the Cohort model has_many students which means we need to create an association migration. It also made sense that the Cohort model is the primry key and the Student Model is where the the list of the students will go and can update student_id foreign key that's assigned as unique values to each students not add the student keys to the Cohort model because it's the primary key and theres only one Cohort.

Visual diagram:

Cohort Model:
Title: String
id: integer

cohort1 = new Cohort()
Title: Alpha
Id: 1 (primarykey)

Cohort -> (has_many) Students

Student Model:
Name: string
Age: integer
cohort_id: student_id (foreignkey)

2. Which RESTful routes must always be passed params? Why?

Your answer:

- Thinking from what i remember about the RESTful routes i think it will be the update method because that's when it will passed params to make changes.

Researched answer:

- Through my research I learned that the RESTful routes that must always passed params are request GET, PATCH and DELETE because these actions requires passing params throughout the database after doing the CRUD actions.

3. Name three rails generator commands. What is created by each?

Your answer: The three rails generator command that I can rememeber on top of my head are: rails server that starts server in localhost3000, rails console that allows you to type and interact with commands on the console, and rails new which creates a new rails.

Researched answer:

- Through my research I learned that the three rails generator command are: rails generate controller, rails generate model and rails generate migration. The rails generate controller creates the controller file and everything that has to do with the controller.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?


action: "GET" location: /students

- The controller method that would be called by each route is the index method and the action that the idex method perform is to show all the list of the students.

action: "POST" location: /students

- The controller method that would be called by each route is the create method and the action that the create method perform is to be able to add new students to the list.

action: "GET" location: /students/new

- The controller method that would be called by each route is the new method and the action that the new method perform is to render data after creating new student.

action: "GET" location: /students/2

- The controller method that would be called by each route is the show method and the action that the show method perform is to show a single student on the list in particular.

action: "GET" location: /students/2/edit

- The controller method that would be called by each route is the edit method and the action that the edit method perform is that it will call out a single student on the list in particular and allows you to go the page and make edits.

action: "PATCH" location: /students/2

- The controller method that would be called by each route is the update method and the action that the update method perform is that it will allow allow the edit that's been made and finalize changes about the student on the list in particular.

action: "DELETE" location: /students/2

- The controller method that would be called by each route is the destroy method and the action that the destroy method perform is that it deletes data from the student on the list in particular.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user, I want to see all of my to do's, so that i can see them in a list on my main page.
- As a user, I want to gain access to my main page, so that I can interact with my to do list.
- As a user, I want an option to alphabetically or chronologically list them, so that I have an organized to do list.
- As a user, I want to choose one of the to-do list, so that it gives me all the details like title and information.
- As a user, I want to edit details of specific to do list, so that ai can make any corrections.
- As a user, I want to save the corrections made, so that I can update changes in to do list.
- As a user, I want to have an option to add new to do list, so that I can create a new to do list.
- As a user, I want to save the new to do list, so that I can add it to my to do list.
- As a user, I want to delete a to do list by pressing x button on the top left corner, so that it gives me an alert asking me if i'm sure to delete it or not.
- As a user, I want the to do list be gone from my main page, so that it disappear after deleting.
