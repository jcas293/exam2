export default function Home() {

    return (
      <>
     
        <h1 className="m-5 text-3xl"> Welcome to my Animal Crossing Guide!</h1>
        <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

        <img className="m-5 ml-5" src="https://absoludicrousblog.wordpress.com/wp-content/uploads/2020/02/acnh.jpg" alt="Animal Crossing Image" />
        

        
        <h1 className="text-center text-xl font-bold underline m-4 text-indigo-800"> Animal Crossing Guide </h1>
        <p className='mx-10 my-2'>This website was created by me just because 
          I really enjoy Animal Crossing New Horzions. I wanted to give tips and tricks to 
          all those who are starting the game.</p>
          

          <h1 className="text-center text-xl font-bold underline m-4 text-indigo-800"> Under Construction! </h1>
          <p className='mx-10 my-2'>This website is currently a work in progress, 
            some things will be missing but by January 2025 everything should be up and running.</p>

          <h1 className="text-center text-xl font-bold underline m-4 text-indigo-800"> Start Here! </h1>
          <p className="mx-10 my-2">Please press <a href="/homepage" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">here</a> to go to this websites official homepage.</p>

       
        
      
  
      
  
  
      </>
  
  
    )
  }