
function NotFound() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="text-center">
        <img src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png" alt="Not Found" className="mx-auto mb-8" width={400} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <a href="/" className="text-lg text-blue-500 hover:text-blue-700">Go back to homepage</a>
      </div>
    </div>
  );
}

export default NotFound;
