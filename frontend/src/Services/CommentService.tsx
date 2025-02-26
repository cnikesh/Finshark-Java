import axios from "axios";
import {handleError} from "../Helpers/ErrorHandler"
import { CommentGet, CommentPost } from "../Models/Comment";

const api = "http://localhost:5185/api/comment/";

export const CommentPostApi = async (title: string, content: string, symbol: string) => {
    try{
        const data = await axios.post<CommentPost>(api + `${symbol}`, {
            title: title,
            content: content
        })
        return data;
    }catch(error){
        handleError(error);
    }
}

export const CommentGetApi = async (symbol: string) => {
    try{
        const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`)
        return data;
    }catch(error){
        handleError(error);
    }
}