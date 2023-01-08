import { createSlice } from "@reduxjs/toolkit";

function local(user){
    const items=[]
    for(let i in localStorage){
        if(i.startsWith(user)) items.push(JSON.parse(localStorage.getItem(i)))
    }
    return items
}

const initialState = {
    total: 0,
    user:"",
    car:[],

}


const CarSlice = createSlice({
    initialState,
    name: "CarSlice",
    reducers: {
        getLocalItem:(state,{payload})=>{
           const item=local(payload)
           state.car=item
        },
        addCar: (state, { payload }) => {
            const includes = state.car.find((elem) => elem.id == payload.id)
            if (includes) {
                const incCount=state.car.find((elem)=>elem.id==payload.id)
                incCount.count=incCount.count+1
                localStorage.setItem(`${state.user+ payload.id}`,JSON.stringify(incCount))

            }
            else {
                const item = {
                    ...payload,
                    count: 1,
                }
                state.car.push(item)
                localStorage.setItem(`${state.user+ payload.id}`,JSON.stringify(item))
            }
        },
        countInc: (state, { payload }) => {
            const getItem = state.car.find((elem) => elem.id === payload)
            getItem.count = getItem.count + 1
            localStorage.setItem(`${state.user+ payload}`,JSON.stringify(getItem))
        },
        countDec: (state, { payload }) => {
            const getItem = state.car.find((elem) => elem.id === payload)
            getItem.count = getItem.count - 1
            state.car=state.car.filter((elem)=>elem.count>0)
            localStorage.setItem(`${state.user+ payload}`,JSON.stringify(getItem))
        },
        totalPrice:(state,{payload})=>{
            state.total=payload
        },
        removeItem:(state,{payload})=>{
            state.car=state.car.filter((elem)=>elem.id!=payload)
            localStorage.removeItem(`${state.user+ payload}`)
        },
        setUser:(state,{payload})=>{
           state.user=payload
        }

    }
})


export const { addCar,countInc,countDec,totalPrice,removeItem,setUser,getLocalItem} = CarSlice.actions

export default CarSlice.reducer