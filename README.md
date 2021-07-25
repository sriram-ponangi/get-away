<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Group-2 Project

## Heroku Link:
---
#### Frontend:
https://csci-5709.herokuapp.com/
#### Backend:
https://csci-5709-backend.herokuapp.com/

## Authors
---
* [Abhinav, Mandava](abhinavm@dal.ca)
* [Jay, Gajjar](jy386888@dal.ca)
* [Rajni, Puni](rj364202@dal.ca)
* [Sriram, Ponangi](sriram.ponangi@dal.ca)

## Deployment
---
For the deploument of both the react.js frontend and the express.js backend applications into Heroku, we have used the CI/CD functionality in gitlab through the **.gitlab-ci.yml** file.


## Source Code Folder Structure
### 1.] Frontend
- We are developing our application using react.js. Therefore instead of using a common folders for styles(for example /css), javascript files and images, we have followed the component based approach. Here we put all the files related to a particular component in their respective folders.

### 1.] Backend
- We are developing our application using node.js(express.js). So we have created our folders based on resources, which will internally have folders for models, routes and validations. 
- The “models” folder contains logic related to the CRUD operations on the object stored in the database. The “routes” folder contains the logic related to the API endpoints and the "validations" folder contains the logic for validations on the incoming request bodies to the APIs in the routes.
