// TODO: add code here
async function requestHandler() {
    const response = await fetch( "https://handlers.education.launchcode.org/static/astronauts.json");
    const json = await response.json();
    return json;
}

window.addEventListener( "load", async ( event ) => {
    let json = await requestHandler();
    const container = document.getElementById( "container" );

    json.forEach( item => {
        const astronaut = document.createElement( "div" );
        astronaut.className = "astronaut";
        container.appendChild( astronaut );

        const bio = ( document.createElement( "div" ));
        bio.className = "bio";
        astronaut.appendChild( bio );

        const name = document.createElement( "h3" );
        name.innerHTML = `${item.firstName} ${item.lastName}`; 
        bio.appendChild( name );

        const ul = document.createElement( "ul" );
        bio.appendChild( ul );

        for (let i = 0; i < 3; i++) {
            const li = document.createElement( "li" );
            
            let bioCategories = {
                0: `Hours in space: ${item.hoursInSpace}`, 
                1: `Active: ${item.active}`,
                2: "Skills: "
            }

            for ( index in item.skills ) {
                bioCategories[2] += `${item.skills[index]}, `
            }

            bioCategories[2] = bioCategories[2].slice( 0, bioCategories[2].length - 2 );

            li.innerHTML = `${bioCategories[i]}`;
            ul.appendChild( li );
        }
    })
})


