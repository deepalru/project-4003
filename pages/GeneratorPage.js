const GeneratorPage = () => {
  const { useState, useEffect } = React;

  // State for the generated plan
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [savedPlans, setSavedPlans] = useState([]);

  // Load any saved plans from localStorage on component mount
  useEffect(() => {
    const localSavedPlans = localStorage.getItem('nurserySavedPlans');
    if (localSavedPlans) {
      setSavedPlans(JSON.parse(localSavedPlans));
    }
  }, []);

  // Handler for when a new plan is generated
  const handlePlanGenerated = (plan) => {
    setGeneratedPlan(plan);

    // Scroll to the plan
    setTimeout(() => {
      document.getElementById('generatedPlan')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handler for saving a plan
  const handleSavePlan = (plan) => {
    // Add a unique ID and timestamp
    const planToSave = {
      ...plan,
      id: 'plan_' + Date.now(),
      createdAt: new Date().toISOString()
    };

    // Update state
    const updatedPlans = [...savedPlans, planToSave];
    setSavedPlans(updatedPlans);

    // Save to localStorage
    localStorage.setItem('nurserySavedPlans', JSON.stringify(updatedPlans));
  };

  return (
    <div className="container mx-auto px-4 py-8" data-id="lthmjzjwq" data-path="pages/GeneratorPage.js">
      <div className="text-center mb-10" data-id="usozd5h8q" data-path="pages/GeneratorPage.js">
        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="3sbx5eekv" data-path="pages/GeneratorPage.js">Lesson Plan Generator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="yslw0jug5" data-path="pages/GeneratorPage.js">
          Customize your options below and let our AI create a perfectly tailored lesson plan for your nursery class.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="r64as2pny" data-path="pages/GeneratorPage.js">
        <div className="lg:col-span-2" data-id="e3pnsvuar" data-path="pages/GeneratorPage.js">
          <PlanGenerator onPlanGenerated={handlePlanGenerated} data-id="qjwl3djqj" data-path="pages/GeneratorPage.js" />
          
          {/* Generated Plan Section */}
          {generatedPlan &&
          <div id="generatedPlan" className="mt-10" data-id="0b1ipm7ui" data-path="pages/GeneratorPage.js">
              <LessonPlanDisplay plan={generatedPlan} onSave={handleSavePlan} data-id="cga78y4yy" data-path="pages/GeneratorPage.js" />
            </div>
          }
        </div>
        
        <div className="lg:col-span-1" data-id="ukd4c4ure" data-path="pages/GeneratorPage.js">
          {generatedPlan ?
          <SaveSharePanel plan={generatedPlan} data-id="60fc388j2" data-path="pages/GeneratorPage.js" /> :

          <div className="bg-white rounded-lg shadow-md p-6" data-id="1ecds95v8" data-path="pages/GeneratorPage.js">
              <h3 className="text-lg font-semibold text-gray-800 mb-4" data-id="qv8hk38pj" data-path="pages/GeneratorPage.js">
                How It Works
              </h3>
              
              <div className="space-y-4" data-id="mfcvdbcxc" data-path="pages/GeneratorPage.js">
                <div className="flex items-start space-x-3" data-id="q9z8onv8g" data-path="pages/GeneratorPage.js">
                  <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5" data-id="w8ci29nb4" data-path="pages/GeneratorPage.js">
                    <span className="text-white text-sm font-medium" data-id="u1hvynpot" data-path="pages/GeneratorPage.js">1</span>
                  </div>
                  <p className="text-gray-600" data-id="91bqfcipu" data-path="pages/GeneratorPage.js">
                    <span className="font-medium text-gray-800" data-id="ru48nts6g" data-path="pages/GeneratorPage.js">Select your preferences</span> - Choose a theme, age group, skills focus, and duration for your lesson plan.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3" data-id="2kvcqqnvu" data-path="pages/GeneratorPage.js">
                  <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5" data-id="g2vdhdf2g" data-path="pages/GeneratorPage.js">
                    <span className="text-white text-sm font-medium" data-id="ag6ybpjoc" data-path="pages/GeneratorPage.js">2</span>
                  </div>
                  <p className="text-gray-600" data-id="b8hbc26zl" data-path="pages/GeneratorPage.js">
                    <span className="font-medium text-gray-800" data-id="1ps8bhq14" data-path="pages/GeneratorPage.js">Add custom requests</span> - Optionally specify any special requirements or themes you'd like to include.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3" data-id="5zzz7qg97" data-path="pages/GeneratorPage.js">
                  <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5" data-id="mgv9agj3l" data-path="pages/GeneratorPage.js">
                    <span className="text-white text-sm font-medium" data-id="u3tfbod6e" data-path="pages/GeneratorPage.js">3</span>
                  </div>
                  <p className="text-gray-600" data-id="mtxfmc97g" data-path="pages/GeneratorPage.js">
                    <span className="font-medium text-gray-800" data-id="z3b3ivjpv" data-path="pages/GeneratorPage.js">Generate your plan</span> - Our AI will create a complete lesson plan with activities tailored to your specifications.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3" data-id="ck41gtouc" data-path="pages/GeneratorPage.js">
                  <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5" data-id="5tn85gtq5" data-path="pages/GeneratorPage.js">
                    <span className="text-white text-sm font-medium" data-id="mn7fknnsp" data-path="pages/GeneratorPage.js">4</span>
                  </div>
                  <p className="text-gray-600" data-id="0569vci1j" data-path="pages/GeneratorPage.js">
                    <span className="font-medium text-gray-800" data-id="6tu3ux2gk" data-path="pages/GeneratorPage.js">Save and share</span> - Download your plan as a PDF, print it, or share it with colleagues.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200" data-id="ue3ngm9fg" data-path="pages/GeneratorPage.js">
                <h4 className="font-medium text-gray-800 mb-2" data-id="zu714rs6i" data-path="pages/GeneratorPage.js">Popular Combinations</h4>
                <div className="space-y-2" data-id="fux777qqe" data-path="pages/GeneratorPage.js">
                  <button
                  className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors text-sm flex items-center"
                  onClick={() => document.getElementById('theme').value = 'Animals'} data-id="5oeybvgke" data-path="pages/GeneratorPage.js">

                    <span className="w-2 h-2 bg-primary-light rounded-full mr-2" data-id="fhmoy2xrb" data-path="pages/GeneratorPage.js"></span>
                    Animal Theme for Ages 3-4
                  </button>
                  <button
                  className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors text-sm flex items-center"
                  onClick={() => document.getElementById('theme').value = 'Numbers'} data-id="sob3ny238" data-path="pages/GeneratorPage.js">

                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" data-id="rxu0bzrx3" data-path="pages/GeneratorPage.js"></span>
                    Numbers Theme for Ages 4-5
                  </button>
                  <button
                  className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors text-sm flex items-center"
                  onClick={() => document.getElementById('theme').value = 'Seasons'} data-id="5jsb9letg" data-path="pages/GeneratorPage.js">

                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2" data-id="jgazjfv68" data-path="pages/GeneratorPage.js"></span>
                    Seasons Theme with STEM Focus
                  </button>
                </div>
              </div>
            </div>
          }
          
          {/* Recently Saved Plans */}
          {savedPlans.length > 0 &&
          <div className="bg-white rounded-lg shadow-md p-6 mt-6" data-id="4aoa8df9l" data-path="pages/GeneratorPage.js">
              <h3 className="text-lg font-semibold text-gray-800 mb-4" data-id="z8m5uvj9f" data-path="pages/GeneratorPage.js">
                Recently Saved Plans
              </h3>
              
              <div className="space-y-3" data-id="n5x0t75zg" data-path="pages/GeneratorPage.js">
                {savedPlans.slice(-3).reverse().map((plan) =>
              <div key={plan.id} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors" data-id="pxak01lfs" data-path="pages/GeneratorPage.js">
                    <h4 className="font-medium text-gray-800" data-id="t9sqxdqko" data-path="pages/GeneratorPage.js">{plan.theme} Lesson Plan</h4>
                    <p className="text-sm text-gray-600" data-id="b1h6mu3s4" data-path="pages/GeneratorPage.js">
                      For ages {plan.ageGroup} • {plan.duration} • {plan.skillsFocus}
                    </p>
                    <p className="text-xs text-gray-500 mt-1" data-id="d637jidtl" data-path="pages/GeneratorPage.js">
                      Saved {new Date(plan.createdAt).toLocaleDateString()}
                    </p>
                  </div>
              )}
              </div>
              
              <div className="mt-4 text-center" data-id="d0g9t86bi" data-path="pages/GeneratorPage.js">
                <a
                href="/saved-plans"
                className="text-primary text-sm font-medium hover:text-primary-dark transition-colors" data-id="3vm7pb7fb" data-path="pages/GeneratorPage.js">

                  View all saved plans
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </div>);

};