const SaveSharePanel = ({ plan }) => {
  const { useState } = React;

  const [isSaving, setIsSaving] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Handle save plan
  const handleSave = () => {
    setIsSaving(true);

    // Simulate API call to save plan
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);

      // Reset success message after a delay
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1500);
  };

  // Handle export to PDF/Doc
  const handleExport = (format) => {
    setIsExporting(true);

    // Simulate export process
    setTimeout(() => {
      setIsExporting(false);
      alert(`Export to ${format} feature coming soon!`);
    }, 1000);
  };

  // Handle share options
  const handleShare = () => {
    setShowShareOptions(!showShareOptions);

    if (!shareLink) {
      // Mock generating a share link
      setShareLink('https://nurserylesson.genius/share/p' + Math.floor(Math.random() * 1000000));
    }
  };

  // Handle copy link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink).then(
      () => {
        alert('Link copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy link: ', err);
      }
    );
  };

  // Handle email share
  const handleEmailShare = () => {
    const subject = `Nursery Lesson Plan: ${plan?.theme || 'Custom'} for Ages ${plan?.ageGroup || '3-5'}`;
    const body = `Check out this lesson plan I created: ${shareLink}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

  if (!plan) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-5" data-id="qn8ksiobe" data-path="components/SaveSharePanel.js">
      <h3 className="text-lg font-semibold text-gray-800 mb-4" data-id="lp1zq1psb" data-path="components/SaveSharePanel.js">Save & Share</h3>
      
      <div className="space-y-4" data-id="b3138nm6x" data-path="components/SaveSharePanel.js">
        {/* Save Section */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md" data-id="5lswrrn53" data-path="components/SaveSharePanel.js">
          <div className="flex items-center space-x-3" data-id="3aqto6t4f" data-path="components/SaveSharePanel.js">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center" data-id="u99psppno" data-path="components/SaveSharePanel.js">
              <i className="fas fa-save text-white" data-id="d8tm3x6mv" data-path="components/SaveSharePanel.js"></i>
            </div>
            <div data-id="l98z7klig" data-path="components/SaveSharePanel.js">
              <h4 className="font-medium text-gray-800" data-id="3ewf7l7mu" data-path="components/SaveSharePanel.js">Save to My Plans</h4>
              <p className="text-xs text-gray-500" data-id="fd6brp4ti" data-path="components/SaveSharePanel.js">Access anytime from your account</p>
            </div>
          </div>
          
          {isSaving ?
          <button className="btn-primary opacity-70 cursor-wait flex items-center space-x-2" disabled data-id="kbbhda60w" data-path="components/SaveSharePanel.js">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" data-id="qy9tbrwel" data-path="components/SaveSharePanel.js"></div>
              <span data-id="cl5ha07u0" data-path="components/SaveSharePanel.js">Saving...</span>
            </button> :
          saveSuccess ?
          <button className="bg-success text-white px-4 py-2 rounded-md flex items-center space-x-2" data-id="ep5a6hnv3" data-path="components/SaveSharePanel.js">
              <i className="fas fa-check" data-id="yjtk2ykj3" data-path="components/SaveSharePanel.js"></i>
              <span data-id="2ruyh9eeh" data-path="components/SaveSharePanel.js">Saved!</span>
            </button> :

          <button className="btn-primary" onClick={handleSave} data-id="0jt9xvq8z" data-path="components/SaveSharePanel.js">Save</button>
          }
        </div>
        
        {/* Export Section */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md" data-id="jgugytx4j" data-path="components/SaveSharePanel.js">
          <div className="flex items-center space-x-3" data-id="56lxwoguq" data-path="components/SaveSharePanel.js">
            <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center" data-id="hf7ekk02b" data-path="components/SaveSharePanel.js">
              <i className="fas fa-file-export text-secondary-dark" data-id="sj4sb173i" data-path="components/SaveSharePanel.js"></i>
            </div>
            <div data-id="ktzowuzr3" data-path="components/SaveSharePanel.js">
              <h4 className="font-medium text-gray-800" data-id="auz1wv7id" data-path="components/SaveSharePanel.js">Export Plan</h4>
              <p className="text-xs text-gray-500" data-id="861fdszoi" data-path="components/SaveSharePanel.js">Download for offline use</p>
            </div>
          </div>
          
          {isExporting ?
          <button className="btn-secondary opacity-70 cursor-wait flex items-center space-x-2" disabled data-id="ngya1ynre" data-path="components/SaveSharePanel.js">
              <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" data-id="2f1gc8u8f" data-path="components/SaveSharePanel.js"></div>
              <span data-id="q3y8d41uf" data-path="components/SaveSharePanel.js">Exporting...</span>
            </button> :

          <div className="relative inline-block" data-id="6bdqo967v" data-path="components/SaveSharePanel.js">
              <button
              className="btn-secondary flex items-center space-x-1"
              onClick={() => handleExport('PDF')} data-id="dhn0fijsn" data-path="components/SaveSharePanel.js">

                <i className="fas fa-file-pdf" data-id="z1b702jet" data-path="components/SaveSharePanel.js"></i>
                <span data-id="op2dkw5e7" data-path="components/SaveSharePanel.js">PDF</span>
              </button>
            </div>
          }
        </div>
        
        {/* Share Section */}
        <div className="p-3 bg-gray-50 rounded-md" data-id="uftz4d67v" data-path="components/SaveSharePanel.js">
          <div className="flex items-center justify-between mb-3" data-id="j52mu5sht" data-path="components/SaveSharePanel.js">
            <div className="flex items-center space-x-3" data-id="5cizprbh0" data-path="components/SaveSharePanel.js">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" data-id="q1kw3t7zd" data-path="components/SaveSharePanel.js">
                <i className="fas fa-share-alt text-gray-600" data-id="ecliiq3p4" data-path="components/SaveSharePanel.js"></i>
              </div>
              <div data-id="idzj49ogs" data-path="components/SaveSharePanel.js">
                <h4 className="font-medium text-gray-800" data-id="cnx7zfrnm" data-path="components/SaveSharePanel.js">Share Plan</h4>
                <p className="text-xs text-gray-500" data-id="dmko8ac0y" data-path="components/SaveSharePanel.js">Share with other educators</p>
              </div>
            </div>
            
            <button
              className="btn-secondary"
              onClick={handleShare} data-id="4hx542chx" data-path="components/SaveSharePanel.js">

              {showShareOptions ? 'Hide Options' : 'Share'}
            </button>
          </div>
          
          {showShareOptions &&
          <div className="mt-3 border-t border-gray-200 pt-3" data-id="fg2wuqp3i" data-path="components/SaveSharePanel.js">
              <div className="flex items-center mb-3" data-id="rxi6x09km" data-path="components/SaveSharePanel.js">
                <input
                type="text"
                value={shareLink}
                readOnly
                className="form-control flex-grow mr-2 text-sm" data-id="1a9icovg5" data-path="components/SaveSharePanel.js" />

                <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm flex-shrink-0"
                onClick={handleCopyLink} data-id="du21k55s1" data-path="components/SaveSharePanel.js">

                  <i className="fas fa-copy" data-id="0zb3p3cpg" data-path="components/SaveSharePanel.js"></i>
                </button>
              </div>
              
              <div className="flex space-x-2" data-id="9mf778fg4" data-path="components/SaveSharePanel.js">
                <button
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm flex items-center justify-center space-x-1"
                onClick={() => alert('Facebook sharing coming soon!')} data-id="edmh96fu8" data-path="components/SaveSharePanel.js">

                  <i className="fab fa-facebook-f" data-id="bduuzmga8" data-path="components/SaveSharePanel.js"></i>
                  <span data-id="p56s1j7dl" data-path="components/SaveSharePanel.js">Facebook</span>
                </button>
                <button
                className="flex-1 bg-sky-400 hover:bg-sky-500 text-white py-2 rounded-md text-sm flex items-center justify-center space-x-1"
                onClick={() => alert('Twitter sharing coming soon!')} data-id="6o5y0lhcv" data-path="components/SaveSharePanel.js">

                  <i className="fab fa-twitter" data-id="vg5xywiey" data-path="components/SaveSharePanel.js"></i>
                  <span data-id="x9ktyg5f8" data-path="components/SaveSharePanel.js">Twitter</span>
                </button>
                <button
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm flex items-center justify-center space-x-1"
                onClick={handleEmailShare} data-id="y6pgb57l6" data-path="components/SaveSharePanel.js">

                  <i className="fas fa-envelope" data-id="9bsqbh80a" data-path="components/SaveSharePanel.js"></i>
                  <span data-id="euywy7beb" data-path="components/SaveSharePanel.js">Email</span>
                </button>
              </div>
            </div>
          }
        </div>
        
        {/* Print Button */}
        <button
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700 font-medium flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
          onClick={() => window.print()} data-id="f2k5xcck6" data-path="components/SaveSharePanel.js">

          <i className="fas fa-print" data-id="9u4bhe0ni" data-path="components/SaveSharePanel.js"></i>
          <span data-id="b1en6c5xc" data-path="components/SaveSharePanel.js">Print Lesson Plan</span>
        </button>
      </div>
    </div>);

};