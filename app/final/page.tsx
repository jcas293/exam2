export default function Page(){
    return(
        <>
        <h1 className="text-3xl"> Final Exam</h1>
        <form> 
         <label htmlFor="product">Product Description </label>
         <input type="text" name="product" id="product" className= "text-black bg-blue-200" />
        
       
         <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
        </form>




        </>
    );
}