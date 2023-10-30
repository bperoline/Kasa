import listelogements from "@/assets/Api/logements.json";

let GetAllLogement = () => {
    return listelogements;
}

let GetOneLogement = async (id) => {

    let idlogement = await listelogements.find((logement) => logement.id === id)
    return idlogement
}

export const LogementService = {
    GetAllLogement,
    GetOneLogement
}

export default LogementService