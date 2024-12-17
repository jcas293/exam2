export default function Page(){
    return (
        <>

        <h1 className = "text-3xl m-5 ml-5"> Final exam </h1>
        <h2 className= "text-m m-5 ml-5"> Fill out the form below to create an account: </h2>

     <form className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-first-name">
        First Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-first-name" type="text" placeholder="Enter your first name"/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-last-name">
        Last Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-last-name" type="text" placeholder="Enter your last name"/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
        E-mail
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text" placeholder="Enter your email" />
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter your password" />
    </div>
  </div>
 
     <div className="m-5 ml-5 flex gap-10">
     <input type="radio" name="player_type" className="radio" defaultChecked />
     <label htmlFor="new"> New Player </label>
     <input type="radio" name="player_type" className="radio" />
     <label htmlFor="existing"> Existing Player </label>
     </div>


  <div>
    <label className="block text-gray-500 font-bold m-5 ml-5 mb-1 md:mb-0 pr-4 " htmlFor="frequency"> Frequency of notifications: 
    </label>
      <select className= "bg-gray-200 m-5 ml-5 md:w-2/3" name="Select frequency of emails" id="frequency">
        <option value= "daily">Daily</option>
        <option value ="weekly">Weekly</option>
        <option value = "monthly ">Monthly</option>
      </select>
  
    </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input className="mr-2 leading-tight" type="checkbox" />
      <span className="text-sm">
        Sign me up for the newsletter!
      </span>
    </label>







  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Sign Up
      </button>
    </div>
  </div>







</form>




























        </>
    );
}