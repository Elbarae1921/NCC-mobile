import axios from 'axios';

import { Person } from "./types/PersonType";
import { WeatherStatsParams } from './types/WeatherType';

const API = "https://national-catastrophe-center.herokuapp.com/api";

interface LoginFeedback {
    tokenOrError: string;
    isSuccessful: boolean;
}

export const checkin = async (firstName: string, familyName: string, city: String): Promise<Person | string>  => {
    try {
        const request = await axios.post(`${API}/checkin`, {firstName, familyName, city}, { headers: {"Content-Type": "application/json"} });
        const data = request.data;
        if(data.errors) 
            return data.errors[0].msg as string;
        return data;
    } catch(error) {
        return "Network/Server Error.";
    }
}

export const find = async (firstName: string, familyName: string, city: String): Promise<Person[] | string>  => {
    try {
        const request = await axios.get(`${API}/checkin?firstName=${firstName}&familyName=${familyName}&city=${city}`,);
        const data = request.data;
        if(data.errors) 
            return data.errors[0].msg as string;
        return data.persons;
    } catch(error) {
        return "Network/Server Error.";
    }
}

export const partnerLogin = async (email: string, password: string): Promise<LoginFeedback>  => {
    try {
        const request = await axios.post(`${API}/organization/login`, {email, password}, { headers: {"Content-Type": "application/json"} });
        const data = request.data;
        if(data.errors) 
            return { tokenOrError: data.errors[0].msg, isSuccessful: false };

        return { tokenOrError: data.key, isSuccessful: true };
    } catch(error) {
        return {tokenOrError: "Network/Server Error.", isSuccessful: false};
    }
}

export const partnerRegister = async (email: string, name: string, phone: string, password: string): Promise<LoginFeedback>  => {
    try {
        const request = await axios.post(`${API}/organization/register`, {email, name, phone, password}, { headers: {"Content-Type": "application/json"} });
        const data = request.data;
        if(data.errors) 
            return { tokenOrError: data.errors[0].msg, isSuccessful: false };

        return { tokenOrError: data.key, isSuccessful: true };
    } catch(error) {
        return {tokenOrError: "Network/Server Error.", isSuccessful: false};
    }
}

export const weather = async (city: string): Promise<string | WeatherStatsParams>  => {
    try {
        const request = await axios.get(`${API}/weather?city=${city}`);
        const data = request.data;
        if(data.errors) 
            return data.errors[0].msg as string;
        return {
            request: data.data.request[0],
            weather: data.data.weather.map((w: any) => {return {weatherCode: w.hourly[0].weatherCode, avgTemp: w.avgtempC, date: w.date}})
        }
    } catch(error) {
        return "Network/Server Error.";
    }
}