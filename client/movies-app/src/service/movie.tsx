import IDataList from "../model/IDataList";
import axios from "axios";
// const baseUrl = process.env.REACT_APP_baseUrl2;

const baseUrl = "http://localhost:4000/";

export const getAllMovie = async (data: string) =>
    await axios.get<IDataList[]>(`${baseUrl}${data}`);
export const getMovieSearch = async (current: string, searchValue: string) =>
    await axios.get<IDataList[]>(`${baseUrl}${current}?title_like=${searchValue}`);
export const getFavouriteMovies = async () =>
    await axios.get<IDataList[]>(`${baseUrl}favourite`);
export const addToFavMovie = async (movie: IDataList) =>
    await axios.post(`${baseUrl}favourite`, movie);
export const removeFromFavourite = async (id: string) =>
    await axios.delete(`${baseUrl}favourite/${id}`);