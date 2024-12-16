export default function Page(){
    return (
        <>

        <h1 className="text-3xl m-5 ml-5"> Final Exam</h1>
        <h2 className = "text-m m-5 ml-5 "> Fill out the form below if you want to be notified whenever a new post appears!</h2>

        <form> 
        <label htmlFor="name" className="ml-5 m-5 ">
        Name: 
       <input type="text" className="input input-bordered input-primary input-sm w-full max-w-xs" placeholder="Enter your name" />
      </label>
      <label htmlFor="email" className="ml-5">
       Email: 
     <input type="text" className="input input-bordered input-primary input-sm w-full max-w-xs" placeholder="Enter your email" />

      </label>

         <label htmlFor="product" className= "ml-5">Enter your name: </label>
         <input type="text" placeholder="Type name here" className="input input-bordered input-primary input-sm w-full max-w-xs" />
        <br />
        <button className="btn btn-accent">Submit</button>
        

      </form>


        </>
    );
}