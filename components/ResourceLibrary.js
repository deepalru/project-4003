const ResourceLibrary = () => {
  const { useState } = React;

  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Resource categories
  const categories = [
  'All', 'Songs', 'Printables', 'Videos', 'Activities',
  'Books', 'Crafts', 'Games', 'Science'];


  // Resource data
  const resources = [
  {
    id: 1,
    title: 'Alphabet Flash Cards',
    category: 'Printables',
    ageRange: '3-5',
    description: 'Colorful alphabet flash cards with images for each letter. Perfect for letter recognition activities.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Morning Circle Time Songs',
    category: 'Songs',
    ageRange: '2-5',
    description: 'Collection of 10 popular songs to start your day with engaging music and movement.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'Weather Chart Printable',
    category: 'Printables',
    ageRange: '3-5',
    description: 'Interactive weather chart for daily classroom use. Includes all weather types and seasons.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514632595-4944383f2737?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Five Little Ducks Video',
    category: 'Videos',
    ageRange: '2-4',
    description: 'Animated video of the classic counting song with cute duck animations.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551601651-bc60f254d532?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'Seasons Sorting Activity',
    category: 'Activities',
    ageRange: '3-5',
    description: 'Printable sorting cards for learning about seasonal changes and weather patterns.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'Space Theme Counting Cards',
    category: 'Printables',
    ageRange: '4-5',
    description: 'Space-themed counting cards 1-20 with astronauts, planets, and rockets.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 7,
    title: 'Storytime: The Very Hungry Caterpillar',
    category: 'Videos',
    ageRange: '2-5',
    description: 'Read-aloud video of the classic children\'s book with animated elements.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1529473814998-077b4fec6770?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 8,
    title: 'Animal Movement Cards',
    category: 'Games',
    ageRange: '2-5',
    description: 'Printable cards for active play. Children imitate the animals shown on the cards.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 9,
    title: 'Color Mixing Science Experiment',
    category: 'Science',
    ageRange: '3-5',
    description: 'Simple science experiment teaching color theory with detailed teacher instructions.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 10,
    title: 'Emotion Faces Craft',
    category: 'Crafts',
    ageRange: '3-5',
    description: 'Creative craft activity for learning about emotions and facial expressions.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 11,
    title: 'Transportation Theme Song Collection',
    category: 'Songs',
    ageRange: '2-4',
    description: 'Collection of songs about cars, trains, planes, and boats with movement suggestions.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?w=500&auto=format',
    downloadUrl: '#'
  },
  {
    id: 12,
    title: 'Fine Motor Skills Activities Guide',
    category: 'Activities',
    ageRange: '2-5',
    description: 'Comprehensive guide with 20 activities to develop fine motor skills in young children.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1617581629397-a72507c3de82?w=500&auto=format',
    downloadUrl: '#'
  }];


  // Filter resources based on active filter and search query
  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeFilter === 'All' || resource.category === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Handle resource download (mock functionality)
  const handleDownload = (e, resourceId) => {
    e.preventDefault();
    alert('Download functionality coming soon!');
  };

  return (
    <div data-id="5kh3femwp" data-path="components/ResourceLibrary.js">
      {/* Resource Library Header */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8" data-id="rf3nue6ub" data-path="components/ResourceLibrary.js">
        <h2 className="text-2xl font-bold text-gray-800 mb-2" data-id="mg383q8kn" data-path="components/ResourceLibrary.js">Resource Library</h2>
        <p className="text-gray-600 mb-6" data-id="qvnufph9z" data-path="components/ResourceLibrary.js">
          Access our collection of educational resources to enhance your lesson plans.
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4" data-id="k1ipegr32" data-path="components/ResourceLibrary.js">
          <div className="relative w-full md:w-1/2" data-id="t29lygq39" data-path="components/ResourceLibrary.js">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-id="91lrquxdh" data-path="components/ResourceLibrary.js">
              <i className="fas fa-search text-gray-400" data-id="devf6xq0v" data-path="components/ResourceLibrary.js"></i>
            </div>
            <input
              type="text"
              className="form-control pl-10"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} data-id="iqjkx4s9m" data-path="components/ResourceLibrary.js" />

          </div>
          
          <div className="flex flex-wrap gap-2" data-id="dumm03hdw" data-path="components/ResourceLibrary.js">
            {categories.map((category) =>
            <button
              key={category}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category ?
              'bg-primary text-white' :
              'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
              }
              onClick={() => setActiveFilter(category)} data-id="9mwu7wazg" data-path="components/ResourceLibrary.js">

                {category}
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Resource Grid */}
      {filteredResources.length > 0 ?
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="1hb5rcbhb" data-path="components/ResourceLibrary.js">
          {filteredResources.map((resource) =>
        <div
          key={resource.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" data-id="btvp54336" data-path="components/ResourceLibrary.js">

              <div
            className="h-48 overflow-hidden bg-gray-100"
            style={{
              backgroundImage: `url(${resource.thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} data-id="sh6ig9gcy" data-path="components/ResourceLibrary.js">

              </div>
              
              <div className="p-4" data-id="h81db0mjh" data-path="components/ResourceLibrary.js">
                <div className="flex justify-between items-start mb-2" data-id="6e3kgra9g" data-path="components/ResourceLibrary.js">
                  <span className="bg-primary-light text-primary text-xs font-semibold px-2 py-1 rounded" data-id="cqjn2vbx2" data-path="components/ResourceLibrary.js">
                    {resource.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded" data-id="no241wujr" data-path="components/ResourceLibrary.js">
                    Ages {resource.ageRange}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-800 mb-2" data-id="j5vh3rma7" data-path="components/ResourceLibrary.js">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4" data-id="hfivjigai" data-path="components/ResourceLibrary.js">{resource.description}</p>
                
                <div className="flex justify-end" data-id="4sgwo15lz" data-path="components/ResourceLibrary.js">
                  <a
                href={resource.downloadUrl}
                className="btn-primary text-sm py-1.5 flex items-center space-x-1"
                onClick={(e) => handleDownload(e, resource.id)} data-id="bah3d2we3" data-path="components/ResourceLibrary.js">

                    <i className="fas fa-download" data-id="nieoduu8u" data-path="components/ResourceLibrary.js"></i>
                    <span data-id="rdx0zh7my" data-path="components/ResourceLibrary.js">Download</span>
                  </a>
                </div>
              </div>
            </div>
        )}
        </div> :

      <div className="bg-white rounded-lg shadow-md p-8 text-center" data-id="zasf2mds1" data-path="components/ResourceLibrary.js">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" data-id="2jupaq7if" data-path="components/ResourceLibrary.js">
            <i className="fas fa-search text-gray-400 text-xl" data-id="sfc6o4occ" data-path="components/ResourceLibrary.js"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2" data-id="uxt5hnqg6" data-path="components/ResourceLibrary.js">No resources found</h3>
          <p className="text-gray-600" data-id="cocwxjrfr" data-path="components/ResourceLibrary.js">
            Try adjusting your search query or filter to find more resources.
          </p>
        </div>
      }
    </div>);

};