let loader=document.getElementById("loader")
const url="https://bush-linen-makemake.glitch.me/emp"
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '58c60aeccbmshea9b19b4ebebea6p12e717jsn052bbe387998',
		'x-rapidapi-host': 'linkedin-job-search-api.p.rapidapi.com'
	}
};

async function getData()
{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayData(result)
    } catch (err) {
        console.error(err);
    }
}
let container=document.createElement("div")
container.className="container"
async function displayData(emp)
{
    for(let obj of emp)
    {
        let item=document.createElement("div")
        item.className="item"
        item.innerHTML=`
        <p><b>Title : </b>${obj.title}</p>
        <p><b>Organization : </b>${obj.organization}</p>

        <img src="${obj.organization_logo}">
        <a href="${obj.url}" target="_blank">APPLY</a>
        
         
        





        `
        container.appendChild(item)
        
    }
    loader.remove()
    document.body.appendChild(container)
}
getData()