import * as PlayerRepository from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helper";


export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers()

    let response = null

    if(data) {
        response = await ok(data)
    }
    else {
        response = await noContent()
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findAllPlayerById(id)
    let response = null

    if (data){
        response = ok(data);
    } else {
        response = noContent()
    }
    return response;
}