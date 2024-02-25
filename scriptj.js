const jmeno = prompt ("Křestní jméno:").trim()
const prijmeni = prompt ("Příjmení:").trim()

const emailPrijmeni = (prijmeni.slice (0, 5)).toLowerCase()
const eamilJmeno = (jmeno.slice (0, 3)).toLowerCase()

document.body.innerHTML +=`
<h2>${"Váš email je:"}</h2>
<p>${emailPrijmeni}${eamilJmeno}${"@fit.cvut.cz"}</p> 
`