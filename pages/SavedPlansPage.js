const SavedPlansPage = () => {
  const { useState, useEffect } = React;
  const { Link } = ReactRouterDOM;

  // State for saved plans and filters
  const [savedPlans, setSavedPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Available filters
  const filters = [
  'All', 'Animals', 'Space', 'Seasons', 'ABCs',
  'Numbers', 'Colors', 'Transportation', 'Feelings'];


  // Load saved plans from localStorage on component mount
  useEffect(() => {
    const localSavedPlans = localStorage.getItem('nurserySavedPlans');
    if (localSavedPlans) {
      const parsedPlans = JSON.parse(localSavedPlans);
      setSavedPlans(parsedPlans);
      setFilteredPlans(parsedPlans);
    }
  }, []);

  // Filter plans based on selected filter and search query
  useEffect(() => {
    let filtered = [...savedPlans];

    // Apply theme filter
    if (selectedFilter !== 'All') {
      filtered = filtered.filter((plan) => plan.theme === selectedFilter);
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((plan) =>
      plan.theme.toLowerCase().includes(query) ||
      plan.skillsFocus.toLowerCase().includes(query) ||
      plan.ageGroup.toLowerCase().includes(query) ||
      plan.duration.toLowerCase().includes(query)
      );
    }

    // Sort by most recent first
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setFilteredPlans(filtered);
  }, [savedPlans, selectedFilter, searchQuery]);

  // Handle plan deletion
  const handleDeletePlan = (planId) => {
    if (window.confirm('Are you sure you want to delete this plan?')) {
      const updatedPlans = savedPlans.filter((plan) => plan.id !== planId);
      setSavedPlans(updatedPlans);
      localStorage.setItem('nurserySavedPlans', JSON.stringify(updatedPlans));

      // If the deleted plan is currently selected, clear it
      if (selectedPlan && selectedPlan.id === planId) {
        setSelectedPlan(null);
      }
    }
  };

  // Handle viewing a plan
  const handleViewPlan = (plan) => {
    setSelectedPlan(plan);

    // Scroll to the plan on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById('planDetails')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Handle clearing selected plan
  const handleClearSelection = () => {
    setSelectedPlan(null);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto px-4 py-8" data-id="qpwb812ml" data-path="pages/SavedPlansPage.js">
      <div className="text-center mb-10" data-id="wsiv6dhee" data-path="pages/SavedPlansPage.js">
        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="95n1v131j" data-path="pages/SavedPlansPage.js">My Saved Lesson Plans</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="le2k2ls1f" data-path="pages/SavedPlansPage.js">
          Access, edit, and organize all your saved lesson plans in one place.
        </p>
      </div>
      
      {savedPlans.length === 0 ?
      // No saved plans view
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center" data-id="wlj8u5xl5" data-path="pages/SavedPlansPage.js">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6" data-id="ggsn44jfn" data-path="pages/SavedPlansPage.js">
            <i className="fas fa-folder-open text-gray-400 text-3xl" data-id="icgcf0y7n" data-path="pages/SavedPlansPage.js"></i>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3" data-id="dxrsyy8oz" data-path="pages/SavedPlansPage.js">No Saved Plans Yet</h2>
          <p className="text-gray-600 mb-6" data-id="gjrm5z1al" data-path="pages/SavedPlansPage.js">
            You haven't saved any lesson plans yet. Generate a plan and save it to see it here.
          </p>
          <Link
          to="/generator"
          className="btn-primary inline-flex items-center space-x-2 px-6 py-3" data-id="3d3qtlmxy" data-path="pages/SavedPlansPage.js">

            <i className="fas fa-plus-circle" data-id="ol16my9td" data-path="pages/SavedPlansPage.js"></i>
            <span data-id="rot4rgga9" data-path="pages/SavedPlansPage.js">Create Your First Plan</span>
          </Link>
        </div> :

      // Saved plans view
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="lrwxgicog" data-path="pages/SavedPlansPage.js">
          {/* Plans list panel */}
          <div className="lg:col-span-1" data-id="ovw4jd44z" data-path="pages/SavedPlansPage.js">
            <div className="bg-white rounded-lg shadow-md p-5 mb-8" data-id="5oag7vm8o" data-path="pages/SavedPlansPage.js">
              <div className="mb-4" data-id="2q6ltrkl7" data-path="pages/SavedPlansPage.js">
                <div className="relative" data-id="bz9b9optb" data-path="pages/SavedPlansPage.js">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-id="qcym4dvsm" data-path="pages/SavedPlansPage.js">
                    <i className="fas fa-search text-gray-400" data-id="armmj92ar" data-path="pages/SavedPlansPage.js"></i>
                  </div>
                  <input
                  type="text"
                  className="form-control pl-10"
                  placeholder="Search plans..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} data-id="7gq3jzkvb" data-path="pages/SavedPlansPage.js" />

                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap gap-2" data-id="x3xddzam4" data-path="pages/SavedPlansPage.js">
                {filters.map((filter) =>
              <button
                key={filter}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedFilter === filter ?
                'bg-primary text-white' :
                'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
                }
                onClick={() => setSelectedFilter(filter)} data-id="0cprrcleg" data-path="pages/SavedPlansPage.js">

                    {filter}
                  </button>
              )}
              </div>
              
              <div className="border-t border-gray-200 pt-4" data-id="sb0pcslt7" data-path="pages/SavedPlansPage.js">
                <h3 className="font-medium text-gray-800 mb-2 flex justify-between items-center" data-id="tog906lvr" data-path="pages/SavedPlansPage.js">
                  <span data-id="zz57j1qzo" data-path="pages/SavedPlansPage.js">Your Plans ({filteredPlans.length})</span>
                  <Link
                  to="/generator"
                  className="text-primary text-sm hover:text-primary-dark transition-colors" data-id="esvayqlg7" data-path="pages/SavedPlansPage.js">

                    + New Plan
                  </Link>
                </h3>
                
                {filteredPlans.length > 0 ?
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2" data-id="ysxnbrd2u" data-path="pages/SavedPlansPage.js">
                    {filteredPlans.map((plan) =>
                <div
                  key={plan.id}
                  className={`p-3 rounded-md cursor-pointer transition-colors ${
                  selectedPlan && selectedPlan.id === plan.id ?
                  'bg-primary bg-opacity-10 border border-primary' :
                  'bg-gray-50 hover:bg-gray-100 border border-transparent'}`
                  }
                  onClick={() => handleViewPlan(plan)} data-id="uljr0r309" data-path="pages/SavedPlansPage.js">

                        <div className="flex justify-between items-start" data-id="y7duiu43j" data-path="pages/SavedPlansPage.js">
                          <h4 className="font-medium text-gray-800" data-id="j8adv46xf" data-path="pages/SavedPlansPage.js">{plan.theme}</h4>
                          <button
                      className="text-gray-400 hover:text-error p-1 -mr-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePlan(plan.id);
                      }} data-id="ka6wq5gqk" data-path="pages/SavedPlansPage.js">

                            <i className="fas fa-trash-alt" data-id="07brqag1j" data-path="pages/SavedPlansPage.js"></i>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600" data-id="e3ydhemi4" data-path="pages/SavedPlansPage.js">Ages {plan.ageGroup}</p>
                        <p className="text-sm text-gray-600" data-id="yc2vbqp7r" data-path="pages/SavedPlansPage.js">{plan.skillsFocus}</p>
                        <p className="text-xs text-gray-500 mt-1" data-id="l8mdh3cc3" data-path="pages/SavedPlansPage.js">
                          Saved on {formatDate(plan.createdAt)}
                        </p>
                      </div>
                )}
                  </div> :

              <div className="text-center py-8" data-id="qbp78yj25" data-path="pages/SavedPlansPage.js">
                    <p className="text-gray-500" data-id="i7ake9w78" data-path="pages/SavedPlansPage.js">No plans match your filters</p>
                    <button
                  className="text-primary text-sm mt-2"
                  onClick={() => {
                    setSelectedFilter('All');
                    setSearchQuery('');
                  }} data-id="a047ovvol" data-path="pages/SavedPlansPage.js">

                      Clear filters
                    </button>
                  </div>
              }
              </div>
            </div>
            
            {/* Bulk actions panel - Desktop only */}
            <div className="hidden lg:block bg-white rounded-lg shadow-md p-5" data-id="qdh7dkt51" data-path="pages/SavedPlansPage.js">
              <h3 className="font-medium text-gray-800 mb-4" data-id="u4a4cvmuq" data-path="pages/SavedPlansPage.js">Bulk Actions</h3>
              <div className="space-y-2" data-id="50pht28gi" data-path="pages/SavedPlansPage.js">
                <button
                className="w-full text-left p-2 flex items-center text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                disabled={filteredPlans.length === 0} data-id="555ir838s" data-path="pages/SavedPlansPage.js">

                  <i className="fas fa-download w-6" data-id="f8sni63op" data-path="pages/SavedPlansPage.js"></i>
                  <span data-id="7fs6q0v5j" data-path="pages/SavedPlansPage.js">Export All as ZIP</span>
                </button>
                <button
                className="w-full text-left p-2 flex items-center text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                disabled={filteredPlans.length === 0} data-id="6crw3josv" data-path="pages/SavedPlansPage.js">

                  <i className="fas fa-file-pdf w-6" data-id="cp73y8z7x" data-path="pages/SavedPlansPage.js"></i>
                  <span data-id="yaj7nmwz0" data-path="pages/SavedPlansPage.js">Compile as PDF Book</span>
                </button>
                <button
                className="w-full text-left p-2 flex items-center text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                disabled={filteredPlans.length === 0} data-id="5urql7vpi" data-path="pages/SavedPlansPage.js">

                  <i className="fas fa-print w-6" data-id="hwnm1gz8x" data-path="pages/SavedPlansPage.js"></i>
                  <span data-id="dl06u2np3" data-path="pages/SavedPlansPage.js">Print All Selected</span>
                </button>
                <div className="border-t border-gray-200 my-2 pt-2" data-id="o60xoke0a" data-path="pages/SavedPlansPage.js">
                  <button
                  className="w-full text-left p-2 flex items-center text-error hover:bg-red-50 rounded-md transition-colors"
                  disabled={filteredPlans.length === 0} data-id="sprchc8ku" data-path="pages/SavedPlansPage.js">

                    <i className="fas fa-trash-alt w-6" data-id="g4d4yahm9" data-path="pages/SavedPlansPage.js"></i>
                    <span data-id="g5wura7l8" data-path="pages/SavedPlansPage.js">Delete All</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Plan details panel */}
          <div id="planDetails" className="lg:col-span-2" data-id="nyp25rv5y" data-path="pages/SavedPlansPage.js">
            {selectedPlan ?
          <div data-id="aprwtc32f" data-path="pages/SavedPlansPage.js">
                <div className="bg-white rounded-lg shadow-md mb-6" data-id="1dctxlb9s" data-path="pages/SavedPlansPage.js">
                  {/* Mobile Back Button */}
                  <div className="lg:hidden p-4 border-b border-gray-200" data-id="2m1040707" data-path="pages/SavedPlansPage.js">
                    <button
                  className="flex items-center text-gray-600 hover:text-gray-800"
                  onClick={handleClearSelection} data-id="qdg5d0g8m" data-path="pages/SavedPlansPage.js">

                      <i className="fas fa-arrow-left mr-2" data-id="rz71xmwd9" data-path="pages/SavedPlansPage.js"></i>
                      <span data-id="0gcnllsw2" data-path="pages/SavedPlansPage.js">Back to plans</span>
                    </button>
                  </div>
                  
                  {/* Plan Display */}
                  <LessonPlanDisplay plan={selectedPlan} data-id="p9c7p6jbk" data-path="pages/SavedPlansPage.js" />
                </div>
              </div> :

          <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center h-96" data-id="obdpzp5ax" data-path="pages/SavedPlansPage.js">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4" data-id="7dgenomi1" data-path="pages/SavedPlansPage.js">
                  <i className="fas fa-file-alt text-gray-400 text-2xl" data-id="nf0rbdwkp" data-path="pages/SavedPlansPage.js"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2" data-id="qc7xo8jv6" data-path="pages/SavedPlansPage.js">Select a Plan to View</h3>
                <p className="text-center text-gray-600 mb-6 max-w-md" data-id="4qcruy6bz" data-path="pages/SavedPlansPage.js">
                  Click on any plan from your saved collection to view its details, edit, or share.
                </p>
                <Link
              to="/generator"
              className="btn-primary inline-flex items-center space-x-2" data-id="xhki3tydg" data-path="pages/SavedPlansPage.js">

                  <i className="fas fa-plus-circle" data-id="1shbt1i21" data-path="pages/SavedPlansPage.js"></i>
                  <span data-id="rulxyyyjf" data-path="pages/SavedPlansPage.js">Create New Plan</span>
                </Link>
              </div>
          }
          </div>
        </div>
      }
    </div>);

};