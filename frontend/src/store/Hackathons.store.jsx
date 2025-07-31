import {create} from 'zustand'


export const useHackathonsStore = create((set) => ({
    hackathons: [],
    Loading : false,
    setHackathons: async ()=>{

        const result = await fetch('http://localhost:3001/api/Hackathons/getforhomepage');
        const data = await result.json();
        if(!data){
            return "error data not found"
        }
        set({Loading:true})
        set({hackathons:data.data})
    }
}))