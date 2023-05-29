import './App.css';
import logo from './assets/icon1.png'
import user from './assets/icon.png'

function App() {
  return (
    <div className="flex h-screen">
        <div className="w-1/2 bg-purple-500 flex flex-col">
            <div className="h-1/5 mt-1">
                <ul>
                    <li className="flex">
                      <img src={logo} className="h-1/12 w-1/12 sm:mt-2 md:mt-4 lg:mt-4 ml-4 max-w-full"></img><p className="text-base sm:mt-2 md:mt-4 lg:mt-8 ml-2 text-white">Untitled UI</p></li>
                </ul>
            </div>
            <div className="h-1/2 flex flex-col pt-1.5 justify-center items-center">
                <p className="mt-10 text-xl text-center text-white">
                    We've been using Untitled to kick start 
                    every new project and can't imagine working without it
                </p>
                <ul className="flex flex-col items-center justify-center ">
                    <li className="flex items-center justify-center"><img src={user} className="w-1/4 sm:mt-4 md:mt-8 lg:mt-12 max-w-full h-auto "></img></li>
                    <li className="mt-5 text-sm md:text-sm lg:text-sm text-center mb-4 lg:mb-0 lg:mr-4 text-white">Tejas Srinivas</li>
                    <li className="mt-1 text-sm md:text-sm lg:text-sm text-center mb-4 lg:mb-0 lg:mr-4 text-white">Software Engineer - Intern</li>
                    <li className="flex items-center justify-center mt-1">
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </li>
                </ul>
            </div>
            <div className="h-1/5">
                <span className="absolute bottom-0 left-0 mt-8 text-sm text-white">&copy; Untitled Ui 2077</span>

            </div>
        </div>
        <div className="w-1/2 bg-white flex">
            <div className="w-full flex flex-col justify-center items-centers">
                <ul className="flex flex-col justify-center items-center pl-2">
                    <li ><img src={logo} className="h-20 w-20 pb-1 sm:mt-2 md:mt-4 lg:mt-8"></img></li>
                    <li className="text-2xl font-semibold">Sign In</li>
                    <li className="text-base text-gray-500">Welcome back! Please enter your details.</li>
                    <li className="pt-1 pb-1">
                        <form>
                            <input type="text" placeholder="Email" className="border-b w-full border-gray-400 px-4 py-2 focus:outline-none " />
                        </form>
                    </li>
                    <li className="pt-1 pb-1">
                        <form>
                            <input type="text" placeholder="Password" className="border-b w-full border-gray-400 px-4 py-2 focus:outline-none " />
                        </form>
                    </li>
                    <li className="pt-1 pb-1 w-1/3 h-1/2">
                        <form>
                            <button className="bg-purple-500 text-white w-full h-full">
                                Sign in
                            </button>
                        </form>
                    </li>
                    <li className="pt-1 pb-1 w-1/3 h-1/2">
                        <form>
                            <button className="flex items-center justify-center bg-white text-black w-full h-full py-2 px-4">
                                <i className="fab fa-google text-lg mr-2"></i>
                                <span>Sign in with Google</span>
                              </button>
                        </form>
                    </li>
                    <li className="pt-1 pb-1 w-1/3 h-1/2">
                        <form>
                            <button className="flex items-center justify-center bg-white text-black w-full h-full py-2 px-4">
                                <i className="fab fa-apple text-lg mr-2 "></i>
                                <span>Sign in with Apple ID</span>
                              </button>
                        </form>
                    </li>
                    <li>
                        Need an account?&nbsp;<a className="font-bold" target="_blank" href="">Create an account</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  );
}

export default App;


