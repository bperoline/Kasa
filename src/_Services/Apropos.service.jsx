import listeapropos from "@/assets/api/apropos.json";

let GetAllApropos = () => {
    return listeapropos;
}

export const AproposService = {
    GetAllApropos,
}

export default AproposService