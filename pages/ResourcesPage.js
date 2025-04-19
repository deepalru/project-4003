const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-id="gz5fdwfsa" data-path="pages/ResourcesPage.js">
      <div className="text-center mb-10" data-id="guj7sxza4" data-path="pages/ResourcesPage.js">
        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="zal5n952j" data-path="pages/ResourcesPage.js">Resource Library</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="6flk25qks" data-path="pages/ResourcesPage.js">
          Browse our collection of educational resources to enhance your nursery lesson plans.
        </p>
      </div>
      
      {/* Featured Resources Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-6 md:p-8 mb-10" data-id="b1d55qrj5" data-path="pages/ResourcesPage.js">
        <div className="flex flex-col md:flex-row md:items-center" data-id="6jqlna3w5" data-path="pages/ResourcesPage.js">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8" data-id="j62ohe6b1" data-path="pages/ResourcesPage.js">
            <h2 className="text-2xl font-bold mb-3" data-id="7yz4sytlk" data-path="pages/ResourcesPage.js">Premium Resource Bundles</h2>
            <p className="text-white text-opacity-90 mb-4" data-id="9ksml6hgt" data-path="pages/ResourcesPage.js">
              Get access to our curated resource bundles with printables, video content, and activity guides organized by theme.
            </p>
            <button className="bg-white text-primary font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors" data-id="se8eywvdj" data-path="pages/ResourcesPage.js">
              Explore Premium Resources
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center" data-id="r4bj6bezx" data-path="pages/ResourcesPage.js">
            <img
              src="https://images.unsplash.com/photo-1629196914169-64080ad6e15a?w=500&auto=format"
              alt="Resource bundle preview"
              className="rounded-md shadow-lg w-full max-w-xs" data-id="r2ek9skkx" data-path="pages/ResourcesPage.js" />

          </div>
        </div>
      </div>
      
      {/* Resource Library */}
      <ResourceLibrary data-id="w3tsa8rtm" data-path="pages/ResourcesPage.js" />
      
      {/* Resource Categories */}
      <div className="mt-16" data-id="8r2sktduv" data-path="pages/ResourcesPage.js">
        <h2 className="text-2xl font-bold text-gray-800 mb-6" data-id="pjjrtgwcw" data-path="pages/ResourcesPage.js">Resource Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-id="rvrwb21r7" data-path="pages/ResourcesPage.js">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow" data-id="8vg3lsdha" data-path="pages/ResourcesPage.js">
            <div className="w-16 h-16 mx-auto bg-primary-light rounded-full flex items-center justify-center mb-3" data-id="r6s7rcp58" data-path="pages/ResourcesPage.js">
              <i className="fas fa-music text-white text-xl" data-id="m2pdipnlr" data-path="pages/ResourcesPage.js"></i>
            </div>
            <h3 className="font-semibold text-gray-800" data-id="yggpr4rtp" data-path="pages/ResourcesPage.js">Songs & Music</h3>
            <p className="text-gray-600 text-sm mt-1" data-id="zumr2klna" data-path="pages/ResourcesPage.js">50+ resources</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow" data-id="van0env2b" data-path="pages/ResourcesPage.js">
            <div className="w-16 h-16 mx-auto bg-secondary-light rounded-full flex items-center justify-center mb-3" data-id="yc7byjzhl" data-path="pages/ResourcesPage.js">
              <i className="fas fa-paint-brush text-secondary-dark text-xl" data-id="s6e4xz9kn" data-path="pages/ResourcesPage.js"></i>
            </div>
            <h3 className="font-semibold text-gray-800" data-id="ip3ync81k" data-path="pages/ResourcesPage.js">Arts & Crafts</h3>
            <p className="text-gray-600 text-sm mt-1" data-id="ulley5zd9" data-path="pages/ResourcesPage.js">75+ resources</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow" data-id="c7if97scc" data-path="pages/ResourcesPage.js">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3" data-id="sp2bpnaax" data-path="pages/ResourcesPage.js">
              <i className="fas fa-flask text-green-600 text-xl" data-id="4lzirtmun" data-path="pages/ResourcesPage.js"></i>
            </div>
            <h3 className="font-semibold text-gray-800" data-id="v0sp3b2ar" data-path="pages/ResourcesPage.js">STEM Activities</h3>
            <p className="text-gray-600 text-sm mt-1" data-id="5grhvf80w" data-path="pages/ResourcesPage.js">40+ resources</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow" data-id="2ugaj5sdi" data-path="pages/ResourcesPage.js">
            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3" data-id="25uw1zsis" data-path="pages/ResourcesPage.js">
              <i className="fas fa-book text-yellow-600 text-xl" data-id="48lfnnwau" data-path="pages/ResourcesPage.js"></i>
            </div>
            <h3 className="font-semibold text-gray-800" data-id="50nxblrt5" data-path="pages/ResourcesPage.js">Literacy</h3>
            <p className="text-gray-600 text-sm mt-1" data-id="050xsm0xy" data-path="pages/ResourcesPage.js">60+ resources</p>
          </div>
        </div>
      </div>
      
      {/* Resource Submission */}
      <div className="mt-16 bg-gray-50 rounded-lg p-6 md:p-8" data-id="pgqaxfhzc" data-path="pages/ResourcesPage.js">
        <div className="flex flex-col md:flex-row md:items-center" data-id="t9mu7g3xz" data-path="pages/ResourcesPage.js">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8" data-id="bc8n6ept3" data-path="pages/ResourcesPage.js">
            <h2 className="text-2xl font-bold text-gray-800 mb-3" data-id="wcb8l5d2r" data-path="pages/ResourcesPage.js">Share Your Resources</h2>
            <p className="text-gray-600 mb-4" data-id="x98pifpp6" data-path="pages/ResourcesPage.js">
              Are you a creator of educational content for early childhood? Submit your resources to our library and reach thousands of teachers.
            </p>
            <button className="btn-primary" data-id="eka8uikyj" data-path="pages/ResourcesPage.js">
              Submit a Resource
            </button>
          </div>
          <div className="md:w-1/3 text-center" data-id="944c6jkem" data-path="pages/ResourcesPage.js">
            <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-md flex items-center justify-center" data-id="2hy6ivkxe" data-path="pages/ResourcesPage.js">
              <i className="fas fa-cloud-upload-alt text-primary text-3xl" data-id="vux6mmgtk" data-path="pages/ResourcesPage.js"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="mt-16 mb-8 bg-white rounded-lg shadow-md p-6 md:p-8" data-id="wcgc4qug3" data-path="pages/ResourcesPage.js">
        <div className="text-center max-w-2xl mx-auto" data-id="e7u5ue098" data-path="pages/ResourcesPage.js">
          <h2 className="text-2xl font-bold text-gray-800 mb-3" data-id="3rylnpan6" data-path="pages/ResourcesPage.js">Get New Resources Weekly</h2>
          <p className="text-gray-600 mb-6" data-id="5aywezccb" data-path="pages/ResourcesPage.js">
            Subscribe to our newsletter and receive new teaching resources, activity ideas, and seasonal content every week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2" data-id="e8r2konrs" data-path="pages/ResourcesPage.js">
            <input
              type="email"
              placeholder="Your email address"
              className="form-control flex-grow" data-id="xx4bvv1zi" data-path="pages/ResourcesPage.js" />

            <button className="btn-primary sm:flex-shrink-0" data-id="r9tqfgwby" data-path="pages/ResourcesPage.js">
              Subscribe Free
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3" data-id="jrxv7lpd2" data-path="pages/ResourcesPage.js">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>);

};