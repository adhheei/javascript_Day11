

try{
    const res = await fetch("https://catfact.ninja/fact")
    const data = await res.json()
    console.log(data)
}catch(error){
    console.log("Api Failed!")
}