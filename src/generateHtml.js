const Engineer = require("../Lib/engineer");


const generateTeamHTML = (team) => {
    console.log(team, "after passed")
    const arrayOfHtmlStrings = []; 

    const generateManagerHtmlSection = manager => {
        console.log(manager)
        return ` <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-center">
            <i class="fas fa-briefcase"></i>  </div>           
            </div>
            </div>
            </div>
            
            <div class="media-content">
              <p class="title is-4">Manager: ${manager.getName()}</p>
              <div class="content">
              <p>ID: ${manager.getId()}</p>
              <p>Email: ${manager.getEmail()}</p>
              <p>Office number: ${manager.getOfficeNumber()}</p>
              </div>
              
            </div>      
  `            
    }
    const generateEngineerHtmlSection = engineer => {
        console.log(engineer)
        return ` <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-center">
            <i class="fas fa-glasses"></i>
            </div>
            </div>
            </div>
            
            <div class="media-content">
              <p class="title is-4">Engineer: ${engineer.getName()}</p>
              <div class="content">
              <p>ID: ${engineer.getId()}</p>
              <p>Email: ${engineer.getEmail()}</p>
              <p>Github: ${engineer.getGithub()}</p>
              </div>
              
            </div>  
            `
        } 

        const generatestudentHtmlSection = student => {
            console.log(student)
            return ` <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-center">
                <i class="fas fa-user-graduate"></i>
                </div>
                </div>
                </div>
                <div class="media-content">
                  <p class="title is-4">Student: ${student.getName()}</p>
                  <div class="content">
                  <p>ID: ${student.getId()}</p>
                  <p>Email: ${student.getEmail()}</p>
                  <p>School: ${student.getSchool()}</p>
                  </div>
                  
                </div>  
                `
            } 

    
    


    arrayOfHtmlStrings.push( team.filter(teamMember => 
        teamMember.getRole() === "Manager"
    ).map(manager => generateManagerHtmlSection(manager)))
   

    arrayOfHtmlStrings.push( team.filter(teamMember => 
        teamMember.getRole() === "Engineer"
    ).map(engineer => generateEngineerHtmlSection(engineer)))

    arrayOfHtmlStrings.push( team.filter(teamMember => 
        teamMember.getRole() === "Intern"
    ).map(student => generatestudentHtmlSection(student)))
   
   



    return arrayOfHtmlStrings.join("")
};

module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css" />
        <title>My Team</title>
    </head>
    <body>
        <section class="hero is-primary">
            <div class="hero-body">
              <p class="title">
               My Awesome Team
              </p>
            </div>
          </section>
         ${generateTeamHTML(team)}
        
    </body>
    </html>`;
};
