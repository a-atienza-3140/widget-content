import './App.css'

function App() {
  const params = new URLSearchParams(window.location.search);
  const brand = params.get('brand');

  return (
    <div className="bg-black w-full h-9 flex justify-center items-center hover:cursor-pointer">
      <p className="text-white  text-sm" onClick={() => window.open("https://www.google.com/")}>
        Werken bij De Republiek? Solliciteer nu  {brand ? `by ${brand}` : ''}
      </p>
    </div>
  )
}

export default App
