import Contador from "@/components/comunicacao/inditera/Contador";


export default function PaginaIndireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen" >
            <h1 className="text-5xl font-black mb-10">Comunicação Indireta</h1>
            <div className='flex gap-5'>
                <Contador />
                <Contador />
                <Contador />
            </div>
        </div>
    )
}