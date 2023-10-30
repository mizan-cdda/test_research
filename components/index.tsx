
"use client"
import ClientCompo from '@/components/ClientCompo'
import ServerCompo, { fetchData } from '@/components/ServerCompo'
import SampleContext from '@/utils/sampleContext'
import ServerWrapper from './ServerWrapper'

export default function Index({data, children}) {
    // const data = "this is sample data"
    return (
        <SampleContext.Provider value={data}>
            <button onClick={fetchData}>Click me hard!</button>
            <ClientCompo />
            {children}
        </SampleContext.Provider>
    )
}
