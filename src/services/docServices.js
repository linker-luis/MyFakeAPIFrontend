import { apiPublic } from "./services";

export const getDocList = async () => {
    try {
        const res = await apiPublic.get('/api/docs/')
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getDocDetails = async (slug) => {
    try {
        const res = await apiPublic(`/api/docs/${slug}/`)
        return res
    } catch (error) {
        console.log(error)
    }
}