const App = () => {
  const { BrowserRouter, Routes, Route } = ReactRouterDOM;

  return (
    <BrowserRouter data-id="lkvha520t" data-path="app.js">
      <div className="flex flex-col min-h-screen" data-id="nudftmhgk" data-path="app.js">
        <Navbar data-id="5lkjuyj9n" data-path="app.js" />
        <main className="flex-grow" data-id="2eef7vgd6" data-path="app.js">
          <Routes data-id="o61m3b6t6" data-path="app.js">
            <Route path="/" element={<HomePage data-id="ok2vcuuif" data-path="app.js" />} data-id="cg0ouxv9m" data-path="app.js" />
            <Route path="/generator" element={<GeneratorPage data-id="ls1116v1t" data-path="app.js" />} data-id="t5fz1og5s" data-path="app.js" />
            <Route path="/resources" element={<ResourcesPage data-id="fru9cwat5" data-path="app.js" />} data-id="ilj85ufdn" data-path="app.js" />
            <Route path="/saved-plans" element={<SavedPlansPage data-id="69witclmm" data-path="app.js" />} data-id="cwpq0ume9" data-path="app.js" />
          </Routes>
        </main>
        <Footer data-id="zy4r6cvu0" data-path="app.js" />
      </div>
    </BrowserRouter>);

};

// Mount the app
ReactDOM.render(<App data-id="ruayiix3h" data-path="app.js" />, document.getElementById('root'));