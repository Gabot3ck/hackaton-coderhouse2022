const getData = async () => {

    try{

        const response = await fetch("https://github.com/Gabot3ck/hackaton-coderhouse2022/blob/main/app/js/data/dbUsers.json");
        const data = await response.json();
        return data;

    } catch(error){
        console.log("hubo un error");
    }

}

export {getData}