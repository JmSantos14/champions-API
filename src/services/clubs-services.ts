import * as repositories from "../repositories/clubs-repository"
import * as httpResponse from "../utils/http-helper"


export const getClubService = async () => {
    const data = await repositories.findAllClubs()
    const response = httpResponse.ok(data)
    return response
}