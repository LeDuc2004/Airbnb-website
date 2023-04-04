import { configureStore } from "@reduxjs/toolkit"
import { khungcanhSlide } from "./khungcanhSlide"
import {userSlide} from "../components/reduxuser"
import { diSlide } from "../chuyendi/diSlide"
import { hireSlide } from "../listhire/hireSlide"


const store = configureStore({
    reducer:{
        khungcanhList:khungcanhSlide.reducer,
        quanliuser:userSlide.reducer,
        listphong:diSlide.reducer,
        listHire:hireSlide.reducer
        
        
    }
})

export default store