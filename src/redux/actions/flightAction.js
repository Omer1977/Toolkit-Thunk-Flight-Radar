import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constant";
import axios from "axios";


export const getFlights = createAsyncThunk( 'flight/getFlight', async () => {

    const res = await axios.request(options)

    const refinedData = res.data.aircraft.map((i) => ({
        id: i[0],
        code: i[1],
        lat: i[2],
        lng: i[3]
    }))

    return refinedData
} )