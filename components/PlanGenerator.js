const PlanGenerator = ({ onPlanGenerated }) => {
  const { useState } = React;

  // Form state
  const [theme, setTheme] = useState('Animals');
  const [ageGroup, setAgeGroup] = useState('3-4');
  const [skillsFocus, setSkillsFocus] = useState('All Skills');
  const [duration, setDuration] = useState('1 hour');
  const [customTopic, setCustomTopic] = useState('');
  const [customRequest, setCustomRequest] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  // Available options for form
  const themeOptions = [
  'Animals', 'Space', 'Seasons', 'ABCs', 'Numbers',
  'Colors', 'Transportation', 'Feelings'];


  const ageGroupOptions = ['2-3', '3-4', '4-5'];

  const skillsFocusOptions = [
  'All Skills', 'Fine Motor Skills', 'Gross Motor Skills',
  'Cognitive Development', 'Social-Emotional', 'Literacy',
  'STEM', 'Creativity', 'Sensory Development'];


  const durationOptions = [
  '30 mins', '1 hour', 'half day', 'full day'];


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all required fields are filled
    if (!theme || !ageGroup || !skillsFocus || !duration) {
      setError('Please fill in all required fields');
      return;
    }

    setError(null);
    setIsGenerating(true);

    try {
      // Call the Gemini API via mockGenerator
      const generatedPlan = await mockGenerator.generateLessonPlan(
        theme,
        ageGroup,
        skillsFocus,
        duration,
        customRequest
      );

      // Pass the generated plan to the parent component
      onPlanGenerated(generatedPlan);
    } catch (err) {
      setError('Error generating lesson plan. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Form reset
  const handleReset = () => {
    setTheme('Animals');
    setAgeGroup('3-4');
    setSkillsFocus('All Skills');
    setDuration('1 hour');
    setCustomTopic('');
    setCustomRequest('');
    setError(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-id="mj20a9z1l" data-path="components/PlanGenerator.js">
      <h2 className="text-2xl font-bold text-gray-800 mb-6" data-id="41n62gog4" data-path="components/PlanGenerator.js">Create Your Lesson Plan</h2>
      
      {error &&
      <div className="bg-red-50 text-error p-3 rounded-md mb-4 flex items-center" data-id="tjn58rvtv" data-path="components/PlanGenerator.js">
          <i className="fas fa-exclamation-circle mr-2" data-id="8hsc60yth" data-path="components/PlanGenerator.js"></i>
          <p data-id="4s0rersi5" data-path="components/PlanGenerator.js">{error}</p>
        </div>
      }
      
      <form onSubmit={handleSubmit} data-id="82uhrnmpx" data-path="components/PlanGenerator.js">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="i5rtrb34x" data-path="components/PlanGenerator.js">
          {/* Theme Selection */}
          <div data-id="n4n4iomlx" data-path="components/PlanGenerator.js">
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1" data-id="94p7cla7u" data-path="components/PlanGenerator.js">
              Theme
            </label>
            <select
              id="theme"
              className="form-control"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              disabled={isGenerating} data-id="abmqcysb3" data-path="components/PlanGenerator.js">

              {themeOptions.map((option) =>
              <option key={option} value={option} data-id="1x5ba0mkp" data-path="components/PlanGenerator.js">{option}</option>
              )}
            </select>
          </div>
          
          {/* Age Group */}
          <div data-id="z58760l99" data-path="components/PlanGenerator.js">
            <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1" data-id="wvnr0fpmh" data-path="components/PlanGenerator.js">
              Age Group
            </label>
            <select
              id="ageGroup"
              className="form-control"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              disabled={isGenerating} data-id="0icdffvh5" data-path="components/PlanGenerator.js">

              {ageGroupOptions.map((option) =>
              <option key={option} value={option} data-id="9emlba1wi" data-path="components/PlanGenerator.js">{option} years</option>
              )}
            </select>
          </div>
          
          {/* Skills Focus */}
          <div data-id="ultb2ls9v" data-path="components/PlanGenerator.js">
            <label htmlFor="skillsFocus" className="block text-sm font-medium text-gray-700 mb-1" data-id="cwbjgluas" data-path="components/PlanGenerator.js">
              Skills Focus
            </label>
            <select
              id="skillsFocus"
              className="form-control"
              value={skillsFocus}
              onChange={(e) => setSkillsFocus(e.target.value)}
              disabled={isGenerating} data-id="jvuy7d403" data-path="components/PlanGenerator.js">

              {skillsFocusOptions.map((option) =>
              <option key={option} value={option} data-id="orhlsmi7k" data-path="components/PlanGenerator.js">{option}</option>
              )}
            </select>
          </div>
          
          {/* Duration */}
          <div data-id="gwjssegk1" data-path="components/PlanGenerator.js">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1" data-id="y9zk79l39" data-path="components/PlanGenerator.js">
              Duration
            </label>
            <select
              id="duration"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              disabled={isGenerating} data-id="s8h19dau8" data-path="components/PlanGenerator.js">

              {durationOptions.map((option) =>
              <option key={option} value={option} data-id="1y474u0qy" data-path="components/PlanGenerator.js">{option}</option>
              )}
            </select>
          </div>
        </div>
        
        {/* Custom Topic Field */}
        <div className="mt-6" data-id="custom-topic-container" data-path="components/PlanGenerator.js">
          <label htmlFor="customTopic" className="block text-sm font-medium text-gray-700 mb-1" data-id="rq6g1ksh5" data-path="components/PlanGenerator.js">
            Custom Topic (Optional)
          </label>
          <input
            type="text"
            id="customTopic"
            className="form-control"
            placeholder="Example: 'Dinosaurs' or 'Ocean Animals'"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            disabled={isGenerating} data-id="5jo4cr33n" data-path="components/PlanGenerator.js" />

        </div>
        
        {/* Custom Request */}
        <div className="mt-6" data-id="vemd2xsz0" data-path="components/PlanGenerator.js">
          <label htmlFor="customRequest" className="block text-sm font-medium text-gray-700 mb-1" data-id="o5798bsyi" data-path="components/PlanGenerator.js">
            Custom Request (Optional)
          </label>
          <textarea
            id="customRequest"
            className="form-control h-24"
            placeholder="Example: 'Dinosaur-themed math activity' or 'Activities for children who love outer space'"
            value={customRequest}
            onChange={(e) => setCustomRequest(e.target.value)}
            disabled={isGenerating} data-id="3rw84lrpg" data-path="components/PlanGenerator.js">
          </textarea>
        </div>
        
        {/* Advanced Input Options */}
        <div className="mt-6 border-t border-gray-200 pt-6" data-id="nom0b0ar8" data-path="components/PlanGenerator.js">
          <div className="flex items-center space-x-2 mb-4" data-id="2moibm69z" data-path="components/PlanGenerator.js">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center" data-id="85mqidaq7" data-path="components/PlanGenerator.js">
              <i className="fas fa-microphone text-gray-500" data-id="b0y2iakak" data-path="components/PlanGenerator.js"></i>
            </div>
            <h3 className="text-md font-semibold text-gray-700" data-id="yashmvles" data-path="components/PlanGenerator.js">Advanced Input Options</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="0z9ri4evw" data-path="components/PlanGenerator.js">
            {/* Voice Input - Mock UI */}
            <button
              type="button"
              className="flex items-center justify-center space-x-2 p-3 border-2 border-dashed border-gray-300 rounded-md hover:border-primary transition-colors"
              disabled={isGenerating} data-id="ccgh7byu8" data-path="components/PlanGenerator.js">

              <i className="fas fa-microphone text-gray-500" data-id="d5knn9hf4" data-path="components/PlanGenerator.js"></i>
              <span className="text-gray-600" data-id="xemowee1z" data-path="components/PlanGenerator.js">Voice Input (Coming Soon)</span>
            </button>
            
            {/* Image Upload - Mock UI */}
            <button
              type="button"
              className="flex items-center justify-center space-x-2 p-3 border-2 border-dashed border-gray-300 rounded-md hover:border-primary transition-colors"
              disabled={isGenerating} data-id="yal4a78gt" data-path="components/PlanGenerator.js">

              <i className="fas fa-camera text-gray-500" data-id="itqcs55zf" data-path="components/PlanGenerator.js"></i>
              <span className="text-gray-600" data-id="rnri2qjmt" data-path="components/PlanGenerator.js">Image Upload (Coming Soon)</span>
            </button>
          </div>
        </div>
        
        {/* Form Buttons */}
        <div className="mt-8 flex items-center justify-between" data-id="ynffceoqg" data-path="components/PlanGenerator.js">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            onClick={handleReset}
            disabled={isGenerating} data-id="gsnlp2y29" data-path="components/PlanGenerator.js">

            Reset Form
          </button>
          
          <button
            type="submit"
            className="btn-primary flex items-center space-x-2 px-6"
            disabled={isGenerating} data-id="sy2p398a8" data-path="components/PlanGenerator.js">

            {isGenerating ?
            <div className="flex items-center space-x-2" data-id="zjt2zii9i" data-path="components/PlanGenerator.js">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" data-id="nfzb6tazc" data-path="components/PlanGenerator.js"></div>
                <span data-id="py4xfjl4x" data-path="components/PlanGenerator.js">Generating...</span>
              </div> :

            <div className="flex items-center space-x-2" data-id="bgtjozjrd" data-path="components/PlanGenerator.js">
                <i className="fas fa-magic" data-id="8y8t04nol" data-path="components/PlanGenerator.js"></i>
                <span data-id="8o03m2czz" data-path="components/PlanGenerator.js">Generate Plan</span>
              </div>
            }
          </button>
        </div>
      </form>
    </div>);

};