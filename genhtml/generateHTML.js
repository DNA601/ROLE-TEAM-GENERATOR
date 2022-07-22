function addOfficeNumber(index) {
    if (!index.officeNumber) {
        return ''
    } else {

        return `<li class="list-group-item">Office number: ${index.getOfficeNumber()}</li>`
    }
}

function addGithub(index) {
    if (!index.github) {
        return ''
    } else {
        return `<li class="list-group-item">GitHub: <a href="https://github.com/${index.getGithub()}" class="card-link" target="_blank">${index.getGithub()}</a></li>`
    }
}

function addSchool(index) {
    if (!index.school) {
        return ''
    } else {
        return `<li class="list-group-item">School Name: ${index.getSchool()}</li>`
    }
}



function genTeam(arr) {
    let lineup = '';
    arr.map(index => lineup += `
    
  <div class='card mb-3  text-center' style="width: 17em;">
  
    <div class="card-header text-black" style='background-color: green;'>
    
      <h5 class="card-title">${index.getName()}</h5>
      
      <h6 class="card-subtitle mb-2 text-black">${index.getRole()}</h6>
    </div>




    <div class="card-body bg-light">

      <ul class="card list-group list-group-flush">

        <li class="list-group-item">id: ${index.getId()}</li>
        
        <li class="list-group-item">email: <a href="mailto:${index.getEmail()}" class="card-link">${index.getEmail()}</a></li>
        
      ${addOfficeNumber(index)}${addGithub(index)}${addSchool(index)}
    </ul>
    </div>
  </div>\n`)
    return lineup;
}

function generateHTML(arr) {
    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>⌨️ MY CODING TEAM</title>
</head>
<body style="background-color: lime ;">
<h2 class="p-5 mb-5 text-green text-center">My Coding Team</h2>


  <div class='d-flex justify-content-around flex-wrap'>
  
  ${genTeam(arr)}
  </div> 
</body>
</html>`


    return content
}


module.exports = generateHTML;