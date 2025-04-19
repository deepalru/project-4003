const LessonPlanDisplay = ({ plan, onSave }) => {
  const { useState } = React;

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!plan) return null;

  // Handle plan saving
  const handleSave = () => {
    setIsSaving(true);

    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);

      // Call the parent's onSave callback
      if (onSave) onSave(plan);

      // Reset save message after a delay
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1000);
  };

  // Handle print functionality
  const handlePrint = () => {
    window.print();
  };

  // Handle share as PDF (Mock functionality)
  const handleSharePDF = () => {
    alert('Export to PDF feature coming soon!');
  };

  // Handle email share (Mock functionality)
  const handleEmailShare = () => {
    alert('Email sharing feature coming soon!');
  };

  return (
    <div className="printable-plan bg-white rounded-lg shadow-md p-6 mb-8" data-id="8mwwx6nd4" data-path="components/LessonPlanDisplay.js">
      {/* Plan Header */}
      <div className="border-b border-gray-200 pb-4 mb-6" data-id="d86niyvjl" data-path="components/LessonPlanDisplay.js">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center" data-id="jd64nni3z" data-path="components/LessonPlanDisplay.js">
          <div data-id="06cqge72w" data-path="components/LessonPlanDisplay.js">
            <h2 className="text-2xl font-bold text-gray-800" data-id="i6pqmffp3" data-path="components/LessonPlanDisplay.js">{plan.theme} Lesson Plan</h2>
            <p className="text-gray-600" data-id="6281ilyxg" data-path="components/LessonPlanDisplay.js">
              For ages {plan.ageGroup} • {plan.duration} • Focus: {plan.skillsFocus}
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2 no-print" data-id="3ysfv26by" data-path="components/LessonPlanDisplay.js">
            {isSaving ?
            <button
              className="btn-secondary flex items-center space-x-2 opacity-70"
              disabled data-id="71vni8cla" data-path="components/LessonPlanDisplay.js">

                <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" data-id="f0a16zw41" data-path="components/LessonPlanDisplay.js"></div>
                <span data-id="fqz2eld29" data-path="components/LessonPlanDisplay.js">Saving...</span>
              </button> :
            saveSuccess ?
            <button
              className="bg-success text-white px-4 py-2 rounded-md flex items-center space-x-2" data-id="xnukrzpsm" data-path="components/LessonPlanDisplay.js">

                <i className="fas fa-check" data-id="x7z7vovp3" data-path="components/LessonPlanDisplay.js"></i>
                <span data-id="wiae0t8gk" data-path="components/LessonPlanDisplay.js">Saved!</span>
              </button> :

            <button
              className="btn-secondary flex items-center space-x-2"
              onClick={handleSave} data-id="py5hm8a6h" data-path="components/LessonPlanDisplay.js">

                <i className="fas fa-save" data-id="9stvk87v4" data-path="components/LessonPlanDisplay.js"></i>
                <span data-id="lb4o7vkmu" data-path="components/LessonPlanDisplay.js">Save Plan</span>
              </button>
            }
            
            <div className="relative group" data-id="aamrvvg5l" data-path="components/LessonPlanDisplay.js">
              <button className="btn-secondary flex items-center space-x-2" data-id="f3bwcdiu0" data-path="components/LessonPlanDisplay.js">
                <i className="fas fa-share-alt" data-id="wozn74b64" data-path="components/LessonPlanDisplay.js"></i>
                <span data-id="bvlal9sbd" data-path="components/LessonPlanDisplay.js">Share</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 invisible group-hover:visible transition-all z-10" data-id="kr8wwrn9j" data-path="components/LessonPlanDisplay.js">
                <div className="py-1" data-id="2k6zqa36d" data-path="components/LessonPlanDisplay.js">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    onClick={handlePrint} data-id="8d1x7cr09" data-path="components/LessonPlanDisplay.js">

                    <i className="fas fa-print w-5" data-id="sf730hd7h" data-path="components/LessonPlanDisplay.js"></i>
                    <span data-id="14ej92hw5" data-path="components/LessonPlanDisplay.js">Print</span>
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    onClick={handleSharePDF} data-id="qrel4kpf9" data-path="components/LessonPlanDisplay.js">

                    <i className="fas fa-file-pdf w-5" data-id="ee8twpsxg" data-path="components/LessonPlanDisplay.js"></i>
                    <span data-id="e28dirtcp" data-path="components/LessonPlanDisplay.js">Export as PDF</span>
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    onClick={handleEmailShare} data-id="snifcnebp" data-path="components/LessonPlanDisplay.js">

                    <i className="fas fa-envelope w-5" data-id="zkdnmsiu7" data-path="components/LessonPlanDisplay.js"></i>
                    <span data-id="yvfr9cfkp" data-path="components/LessonPlanDisplay.js">Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Circle Time Section */}
      <div className="mb-8" data-id="psz0gazj0" data-path="components/LessonPlanDisplay.js">
        <div className="flex items-center mb-4" data-id="8re4bdzj6" data-path="components/LessonPlanDisplay.js">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-3" data-id="vdt351sr5" data-path="components/LessonPlanDisplay.js">
            <i className="fas fa-circle text-white" data-id="wxp4dkmsv" data-path="components/LessonPlanDisplay.js"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800" data-id="62snudzij" data-path="components/LessonPlanDisplay.js">Circle Time</h3>
        </div>
        
        <div className="ml-13 pl-10" data-id="22jzji2op" data-path="components/LessonPlanDisplay.js">
          <div className="bg-gray-50 rounded-lg p-4 mb-4" data-id="q193j4jqu" data-path="components/LessonPlanDisplay.js">
            <div className="flex items-start" data-id="b9xzk74ir" data-path="components/LessonPlanDisplay.js">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3 mt-1" data-id="yvoi9zofg" data-path="components/LessonPlanDisplay.js">
                <i className="fas fa-music text-white text-sm" data-id="fa11599k9" data-path="components/LessonPlanDisplay.js"></i>
              </div>
              <div data-id="35hlzqc14" data-path="components/LessonPlanDisplay.js">
                <h4 className="font-semibold text-gray-800" data-id="lujmw42sr" data-path="components/LessonPlanDisplay.js">Song</h4>
                <p className="text-gray-700" data-id="ki3wxqk2k" data-path="components/LessonPlanDisplay.js">{plan.circleTime.song}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4" data-id="gry63vx59" data-path="components/LessonPlanDisplay.js">
            <div className="flex items-start" data-id="skv8czeuz" data-path="components/LessonPlanDisplay.js">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3 mt-1" data-id="r9c65bpl3" data-path="components/LessonPlanDisplay.js">
                <i className="fas fa-comments text-white text-sm" data-id="asi0jc16f" data-path="components/LessonPlanDisplay.js"></i>
              </div>
              <div data-id="u1luonsir" data-path="components/LessonPlanDisplay.js">
                <h4 className="font-semibold text-gray-800" data-id="era9dsvm7" data-path="components/LessonPlanDisplay.js">Discussion Question</h4>
                <p className="text-gray-700" data-id="ssi9dpuqg" data-path="components/LessonPlanDisplay.js">{plan.circleTime.discussion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Activities Section */}
      <div className="mb-8" data-id="brq4kd59r" data-path="components/LessonPlanDisplay.js">
        <div className="flex items-center mb-4" data-id="hq3rwtp3z" data-path="components/LessonPlanDisplay.js">
          <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center mr-3" data-id="og52fdgbg" data-path="components/LessonPlanDisplay.js">
            <i className="fas fa-paint-brush text-secondary-dark" data-id="vewm351ww" data-path="components/LessonPlanDisplay.js"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800" data-id="s99u4f1i5" data-path="components/LessonPlanDisplay.js">Activities</h3>
        </div>
        
        <div className="ml-13 pl-10" data-id="fsdnp3v6u" data-path="components/LessonPlanDisplay.js">
          {plan.activities.map((activity, index) =>
          <div
            key={index}
            className="activity-card bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-secondary" data-id="arse8dgf1" data-path="components/LessonPlanDisplay.js">

              <h4 className="font-semibold text-gray-800 text-lg mb-2" data-id="gbdpujmyp" data-path="components/LessonPlanDisplay.js">
                Activity {index + 1}: {activity.title}
              </h4>
              <div className="flex flex-wrap text-sm mb-3" data-id="5ki2i4o4s" data-path="components/LessonPlanDisplay.js">
                <span className="bg-secondary-light text-secondary-dark rounded-full px-3 py-1 mr-2 mb-2" data-id="wl4qqnz9j" data-path="components/LessonPlanDisplay.js">
                  {activity.type}
                </span>
                {activity.skills.map((skill, i) =>
              <span
                key={i}
                className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2" data-id="y7sml8xec" data-path="components/LessonPlanDisplay.js">

                    {skill}
                  </span>
              )}
              </div>
              
              <div className="mb-3" data-id="ixet05mes" data-path="components/LessonPlanDisplay.js">
                <h5 className="font-medium text-gray-700 mb-1" data-id="y31nm7ure" data-path="components/LessonPlanDisplay.js">Materials Needed:</h5>
                <ul className="list-disc pl-5 text-gray-600" data-id="stn7p5iva" data-path="components/LessonPlanDisplay.js">
                  {activity.materials.map((material, i) =>
                <li key={i} data-id="07z7wt5hn" data-path="components/LessonPlanDisplay.js">{material}</li>
                )}
                </ul>
              </div>
              
              <div data-id="rm1af17lk" data-path="components/LessonPlanDisplay.js">
                <h5 className="font-medium text-gray-700 mb-1" data-id="ndaq0z0rx" data-path="components/LessonPlanDisplay.js">Steps:</h5>
                <ol className="list-decimal pl-5 text-gray-600" data-id="25ucgxqln" data-path="components/LessonPlanDisplay.js">
                  {activity.steps.map((step, i) =>
                <li key={i} data-id="rp0k1utpo" data-path="components/LessonPlanDisplay.js">{step}</li>
                )}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Closing Section */}
      <div className="mb-8" data-id="54p2ka7ys" data-path="components/LessonPlanDisplay.js">
        <div className="flex items-center mb-4" data-id="8ugggz8j1" data-path="components/LessonPlanDisplay.js">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-3" data-id="xorkxcbqm" data-path="components/LessonPlanDisplay.js">
            <i className="fas fa-star text-white" data-id="2r5ea67pu" data-path="components/LessonPlanDisplay.js"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800" data-id="2iwv9xqmu" data-path="components/LessonPlanDisplay.js">Closing</h3>
        </div>
        
        <div className="ml-13 pl-10" data-id="z59l9szo8" data-path="components/LessonPlanDisplay.js">
          <div className="bg-gray-50 rounded-lg p-4" data-id="fyeexqp2a" data-path="components/LessonPlanDisplay.js">
            <div className="flex items-start" data-id="01b6803nk" data-path="components/LessonPlanDisplay.js">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3 mt-1" data-id="dzrvlgbxy" data-path="components/LessonPlanDisplay.js">
                <i className="fas fa-question text-white text-sm" data-id="0xkzro6ii" data-path="components/LessonPlanDisplay.js"></i>
              </div>
              <div data-id="gnband41e" data-path="components/LessonPlanDisplay.js">
                <h4 className="font-semibold text-gray-800" data-id="k3jmfar1j" data-path="components/LessonPlanDisplay.js">Reflection Question</h4>
                <p className="text-gray-700" data-id="1kbdiblr0" data-path="components/LessonPlanDisplay.js">{plan.closing.reflection}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resources Section */}
      <div className="no-print" data-id="408f5fed8" data-path="components/LessonPlanDisplay.js">
        <div className="flex items-center mb-4" data-id="kevhox4f5" data-path="components/LessonPlanDisplay.js">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3" data-id="25av3g5xq" data-path="components/LessonPlanDisplay.js">
            <i className="fas fa-link text-gray-600" data-id="jmjmztaqe" data-path="components/LessonPlanDisplay.js"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800" data-id="vjfw6onf0" data-path="components/LessonPlanDisplay.js">Additional Resources</h3>
        </div>
        
        <div className="ml-13 pl-10" data-id="8wnuscxjg" data-path="components/LessonPlanDisplay.js">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="yx2i4hy1n" data-path="components/LessonPlanDisplay.js">
            {plan.resources.map((resource, index) =>
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-3 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow" data-id="52ttf7pku" data-path="components/LessonPlanDisplay.js">

                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0" data-id="dgjwsdaig" data-path="components/LessonPlanDisplay.js">
                  <i className={`fas ${resource.type === 'Video' ? 'fa-video' : resource.type === 'Printable' ? 'fa-file-pdf' : 'fa-book'} text-gray-500 text-sm`} data-id="sspojbi4i" data-path="components/LessonPlanDisplay.js"></i>
                </div>
                <div data-id="4cezjr90t" data-path="components/LessonPlanDisplay.js">
                  <h4 className="font-semibold text-gray-800 text-sm" data-id="x1vz4yx47" data-path="components/LessonPlanDisplay.js">{resource.title}</h4>
                  <p className="text-primary text-xs" data-id="8h4hytqlx" data-path="components/LessonPlanDisplay.js">{resource.type}</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>);

};