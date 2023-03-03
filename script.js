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

        const bio = ( document.createElement( "div" ));
        bio.className = "bio";

        const name = document.createElement( "h3" );
        name.innerHTML = item.firstName + " " + item.lastName;

        const ul = document.createElement( "ul" );

        container.appendChild( astronaut );
        astronaut.appendChild( bio );
        bio.appendChild( name );
        bio.appendChild();

    })
})


