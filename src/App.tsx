import './App.css'


function App() {
  const params = new URLSearchParams(window.location.search);
  const brand = params.get('brand');

  const openTypeform = () => {
    // Check if iframe container exists
    let iframeContainer = document.getElementById('typeform-iframe-container');

    if (!iframeContainer) {
      // Create container
      iframeContainer = document.createElement('div');
      iframeContainer.id = 'typeform-iframe-container';
      Object.assign(iframeContainer.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      });

      // Create iframe
      const iframe = document.createElement('iframe');
      iframe.src = 'https://form.typeform.com/to/JllDnENR';
      Object.assign(iframe.style, {
        width: '80%',
        height: '80%',
        border: 'none',
      });
      iframeContainer.appendChild(iframe);

      // Create close button
      const closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      Object.assign(closeButton.style, {
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
      });
      closeButton.onclick = () => {
        document.body.removeChild(iframeContainer as Node);
      };
      iframeContainer.appendChild(closeButton);

      // Append container to body
      document.body.appendChild(iframeContainer);
    }
  };

  return (
    <div
      className="bg-black w-full h-9 flex justify-center items-center hover:cursor-pointer"
      onClick={openTypeform}
    >
      <p className="text-white text-sm">
        Werken bij De Republiek? Solliciteer nu {brand ? `by ${brand}` : ''}
      </p>
    </div>
  );
}

export default App;

