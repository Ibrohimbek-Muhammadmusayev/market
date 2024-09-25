import Image from "next/image";

export default function Loading(){
    return (
        <div className="flex justify-center items-center h-screen">
            <Image
                src="/loading.gif"
                alt="loading"
                width={250}
                height={250}
            />
        </div>
    )
}