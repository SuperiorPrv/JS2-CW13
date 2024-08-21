import { Display } from "./dom.js";

const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Back_3";

async function PostData(Obj) {
    try {
        const response = await axios.post(API,Obj);
        GetData();
    } catch (error) {
        console.error(error);
        
    }
}

async function GetData() {
    try {
        const {data:Data} = await axios.get(API);
        Display(Data);
    } catch (error) {
        console.error(error);
    }
}

export { GetData , PostData };