"use client"
import SampleContext from "@/utils/sampleContext"
import { useContext } from "react"

const ClientCompo = ()=>{
    const data = useContext(SampleContext)
    return (
        <div>This is client component</div>
    )
}
export default ClientCompo