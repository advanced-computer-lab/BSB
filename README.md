## Airway Website 

Our airway website is a project for Our University for the course Advanced computer Lab, it should be a full working website
which starts by a home page for both the admin and the user.For the user There is an existing user and a guest user both can 
start by searching for a flight using a certain criteria then returning all available flights for return and departure and the 
guest/existing user could choose flights and then seats.After that comes the Summary part then the Payamet.

## Project Screenshots
![image](https://user-images.githubusercontent.com/62720494/147393581-0c2bbf60-5e0f-4873-977f-cf617ed412df.png)
![image](https://user-images.githubusercontent.com/62720494/147393588-32dcf61c-a129-4c60-b763-8547d5aa676d.png)
![image](https://user-images.githubusercontent.com/62720494/147393590-f8d3bd25-ea1e-4c1e-a4cc-dfb27c207ce5.png)
![image](https://user-images.githubusercontent.com/62720494/147393593-3e717478-a21b-48cb-b4f8-986dbf0daf42.png)
![image](https://user-images.githubusercontent.com/62720494/147393595-a83bd162-7e67-47b4-8a1f-ccffe7c54f95.png)


## Installation and Setup Instructions
To be updated to new releases
Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/ideas`  

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```
npm install --save <library-name>
```

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.
## Adding Bootstrap

You don’t have to use [React Bootstrap](https://react-bootstrap.github.io) together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps:

Install React Bootstrap and Bootstrap from NPM. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:

```
npm install react-bootstrap --save
npm install bootstrap@3 --save
```

Import Bootstrap CSS and optionally Bootstrap theme CSS in the ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
```

Import required React Bootstrap components within ```src/App.js``` file or your custom component files:

```js
```
## Adding mui
Install mui from NPM.

```
// with npm
npm install @mui/material @emotion/react @emotion/styled
```
Install mui from Yarn.

```
// with yarn
yarn add @mui/material @emotion/react @emotion/styled
```
## Importing a Component

This project setup supports ES6 modules <br>
we encourage you to use `import`.

For example:

### `Button`

```
import React, { Component } from 'react';
import Button from '@mui/material/Button';
```
### `Card`
```
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from '@mui/material/CardMedia';
```
### `Typography`
```
import Typography from "@material-ui/core/Typography";

```
### `Icons`
```
import { AiOutlineArrowRight } from 'react-icons/ai';
```
## Code examples

### `Card`
```
  <Card
        style={{
          width: 1500,
          height: 70,
          backgroundColor: "#EBECF0",  opacity: 0.7
        }}
      >
        <CardContent>
          <Typography
            style={{  fontWeight: "bold",color:' #5c0931'  }}
            color="textPrimary"
            align="center"
            variant="h4"
            component="h2"
            gutterBottom
          >
          BSB Airways
          </Typography>
        </CardContent>
      </Card>
```

### `Accordion`
```
<Accordion style={{width:1200}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 25,marginTop:0,color:' #5c0931' }}
            
            align="left"
            gutterBottom>Economy Class</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:' #5c0931'}}>
           

From dining to amenities, we have modified our Economy Class experience to ensure your safety and comfort on board.

          </Typography>
  </AccordionDetails>
      </Accordion>

```
### `Table`
```
//before the function
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: ' #5c0931',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

//Inside the function in the return
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontSize: 20}} >Country</StyledTableCell>
            <StyledTableCell style={{fontSize: 20}} align="left">Claims office*</StyledTableCell>
            <StyledTableCell style={{fontSize: 20}} align="right">24-hour emergency medical assistance</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.country}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
             <StyledTableCell style={{fontSize: 18}} align="right">{row.country}</StyledTableCell> 
              <StyledTableCell align="right">{row.claimsoffice}</StyledTableCell>
              <StyledTableCell align="right">{row.assistance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
```
## Running Tests

>Note: this feature is available with `react-scripts@0.3.0` and higher.<br>

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. 

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.
