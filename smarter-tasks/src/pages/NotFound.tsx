const NotFound = () =>{
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Smarter Tasks</h1>
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8"> 404 Page not Found</h2>
            <a href="/home" className="w-full flex justify-center     bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray">  Go Back to home </a>
            </div>
            
        </div>
    )
}
export default NotFound;