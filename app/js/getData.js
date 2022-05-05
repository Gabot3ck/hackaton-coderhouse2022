const getData = async () => {

    try{

        const response = await fetch("/app/js/data/dbUsers.json");
        const data = await response.json();
        return data;

    } catch(error){
        console.log("Hubo un error", error);
    }

}

export {getData}