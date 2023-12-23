// api gives us gender
function gender(){
    // input name
    const name=document.querySelector("#name").value;
    console.log(name);
    const url=`https://api.genderize.io?name=${name}`;

    // fetch the gender
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{
        const genders=data.gender;
        // now add this value to our div
        const result=document.querySelector("#result");
        result.textContent=`Gender of ${name} => ${genders}`;
        const imgElement = document.querySelector("#img");
        if (genders.toLowerCase() === "male") {
            imgElement.setAttribute("src", "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800");
        } else if (genders.toLowerCase() === "female") {
            imgElement.setAttribute("src", "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800");
        }
    })
}
document.querySelector("#btn").addEventListener("click",gender);










