import react from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const BookDetails = () => {
    return(
      // <div class="container mx-auto px-4 max-w-xl">
      //   <div class="w-screen h-screen flex justify-center items-center">
      //     <div class="grid grid-rows-3 grid-flow-col gap-4">
      //       <div class="row-span-3">
      //         <div class="drop-shadow-xl">
      //           <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-book-cover-template-design-c0aa3907896e0129750f7475ee200582_screen.jpg?ts=1637011190" alt="Man looking at item at a store"/>
      //         </div>           
      //       </div>
      //       <div class="col-span-2">
             
      //           <p class="text-4xl">Your Simple Book Cover</p>
          
             
      //           <p class="font-sans max">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            
      //       </div>
      //       <div class="row-span-2 col-span-2">
      //       </div>
      //     </div>
      //   </div>
      // </div>

      // <div class="bg-slate-800">
     
      // </div>

      <div class="h-screen flex  py-40 px-16 sm:px-6 lg:px-8 bg-emerald-50">
          <div class="flex align-middle max-w-full min-w-md m-7 -mt-5">
          <div class="drop-shadow-[0_10px_10px_rgba(0,0,0,0.35)]">
            <img class="h-30 w-full object-cover md:h-auto md:w-50" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-book-cover-template-design-c0aa3907896e0129750f7475ee200582_screen.jpg?ts=1637011190" alt="Man looking at item at a store"/>
          </div>
          <div class="ml-6">
            <p class="text-5xl not-italic font-medium ">Your Simple Book Cover</p>
            <p class="text-xl not-italic mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis labore maxime dolor, sequi mollitia modi nesciunt debitis et? Commodi laudantium provident ipsa, tempore exercitationem nulla accusantium numquam dolorem reiciendis velit.</p>
            <p class="text-xl not-italic mt-4"><span class="font-medium">PUBLISHER</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ken Adams</p>
            <p class="text-xl not-italic  mt-2"><span class="font-medium">FIRST PUBLISH</span>&nbsp;&nbsp;3 April 2022</p>
            <p class="text-xl not-italic  mt-2"><span class="font-medium">ISBN</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;122345098728</p>
            <p class="text-xl not-italic  mt-2"><span class="font-medium">LANGUAGE</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</p>
            <p class="text-xl not-italic  mt-2"><span class="font-medium">PAGES</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;250</p>
            <div class="flex mt-10">
            <div>
            <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to Read
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
            </div>

            <div class="ml-7">
            <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Preview
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
            </div>
            <div class="ml-7">
            <a
                  href="peminjaman"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Form Peminjaman
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
   
}

export default BookDetails;