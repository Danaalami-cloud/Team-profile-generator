const generateTeamHTML = (team) => {

    const arrayOfHtmlStrings = []; 

    const generateManagerHtmlSection = manager => {
        return ` <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-center">
              <i class="fas fa-user-graduate"></i>
            </div>
            <div class="media-content">
              <p class="title is-4">Manager: ${manager.getName()}</p>
              <div class="content">
              <p>ID: ${manager.getID()}</p>
              <p>ID: ${manager.getEmail()}</p>
              <p>ID: ${manager.getOfficeNumber()}</p>
              </div>
              <a href="ID">#css</a> <a href="#">#responsive</a>
            </div>      
  `


               
    }

    const teamManager = team.filter(teamMember => {
        teamMember.getRole() === "Manager"
    })
    arrayOfHtmlStrings.push(generateManagerHtmlSection(teamManager)); 





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
