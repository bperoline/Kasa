import listeapropos from "@/assets/Api/apropos.json";

let GetAllApropos = () => {
    return listeapropos;
}

export const AproposService = {
    GetAllApropos,
}

export default AproposService