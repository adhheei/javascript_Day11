fetch("https://catfact.ninja/fact")
    .then((res)=> res.json())
    .then(txt => {console.log(txt)})
    .catch(() => console.log("api failed"))