export default function Page(){
    return(
        <>
        <h1 className="text-3xl m-5 ml-5"> Final Exam</h1>
        <form> 
         <label htmlFor="product" className= "ml-5">Product Description </label>
         <input type="text" name="product" id="product" className= "m-5 text-black bg-blue-200" />
        <br />
        
        <label for="cars">Choose a villager:</label>
<select name="villager" id="villager">
  <optgroup label="Boys">
    <option value="Bubbles">Bubbles</option>
    <option value="Chai">Chai</option>
  </optgroup>
  <optgroup label="Girls">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>


         <button type="button" className="ml-5 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
        </form>




        </>
    );
}