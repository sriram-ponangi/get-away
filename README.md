<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Group-2 Project

## Heroku Link:
---
#### Frontend:
https://csci-5709.herokuapp.com/
#### Backend:
https://csci-5709-backend.herokuapp.com/

## Git Repository Link:
---
https://git.cs.dal.ca/ponangi/csci-5709-winter-2021-group-2


## Authors
---
* [Abhinav, Mandava](abhinavm@dal.ca)
* [Jay, Gajjar](jy386888@dal.ca)
* [Rajni, Puni](rj364202@dal.ca)
* [Sriram, Ponangi](sriram.ponangi@dal.ca)

## Deployment
---
For the deploument of both the react.js frontend and the express.js backend applications into Heroku, we have used the CI/CD functionality in gitlab through the **.gitlab-ci.yml** file.

## Sources Used
---


### 1.] csci-5709-winter-2021-group-2/frontend/app-server/server.js
---
*Lines 01 - 31*

```js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('views', 'react');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(process.env.PORT || 8080, () => {
    console.info('Server listening on port: ', process.env.PORT || 8080);

    const testFolder1 = __dirname;
    console.debug('__dirname: ', testFolder1, '\n\n');
    fs.readdirSync(testFolder1).forEach(file => {
        console.debug(file, '\n\n');
    });

    const testFolder2 = __dirname + '/build';
    fs.readdirSync(testFolder2).forEach(file => {
        console.debug(file, '\n\n');
    });

    console.info("\n Application Started Correctly on port=", process.env.PORT || 8080, '\n');

});


```

The code above was created by adapting the code in [T3V1 - Code Management and Deployment - Slide 10](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2217354/View) as shown below: 

```js
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

```

- The code in [T3V1 - Code Management and Deployment - Slide 10](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2217354/View) was implemented in Tutorial-3.
- [T3V1 - Code Management and Deployment - Slide 10](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2217354/View)'s Code was used as an application server to deploy the frontend application
- [T3V1 - Code Management and Deployment - Slide 10](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2217354/View)'s Code was modified by adding some additonal checks to verify if the application was deployed correctly.

---
### 2.]  csci-5709-winter-2021-group-2/frontend/src/NavBar/NavBar.js

*Lines 17 - 59*

```HTML
<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">          
          <Link className="navbar-brand" to="/">TravelBuddy</Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/destination/search">Destinations</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Link</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link disabled" href="/" >Link</a>
              </li>
            </ul>

            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item dropdown">

                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={logo} width="40" height="40" className="rounded-circle" />
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <a href="/" className="dropdown-item">Link</a>
                  <a href="/" className="dropdown-item">Link</a>
                  <div className="dropdown-divider"></div>
                  <a href="/" className="dropdown-item">Logout</a>
                </div>
              </li>
            </ul>

          </div>
        </nav>   
```

The code above was created by adapting the code in [Bootstrap - 4 Official Doccumentation](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content) as shown below: 

```HTML
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
```

- The code in [Bootstrap - 4 Official Doccumentation](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content) was modified by adding react specific tags (ex: instead of using "<\a> and href". Link tag from react router was used).
- Also, there many styling changes including addition of a profiles dropdown at the right most corner.

---
### 3.]  csci-5709-winter-2021-group-2/frontend/src/DestinationSearch/DestinationSearch.js

*Lines 55 - 57*
```HTML
   <img className="img-fluid rounded mx-auto d-block" src={world} 
    title="Travel The World" alt="Travel The World" />
```
- The GIF image used was taken from this source [link](https://giphy.com/gifs/travel-holiday-journey-toelXGUsYD6vtCN408)



