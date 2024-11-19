import Link from "next/link";

export default function Page() {
  return (
    <>
    
   <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
  <div className="rounded-lg bg-violet-300 p-8 text-center shadow-xl">
    <h1 className="mb-4 text-4xl font-bold">404</h1>
    <p className="text-black-600">Looks Like you got lost! The page you are looking for could not be found.</p>
    <Link href="/homepage" className="mt-4 inline-block rounded bg-pink-400 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </Link>
    </div>
    </div>

    

    </>


  )
}