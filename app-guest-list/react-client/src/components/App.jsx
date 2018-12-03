import { useState } from 'react';

const App = (props) => {

  const [view, setView] = useState('menu');

  useEffect(() => {
    // this function is called after render
  });

  render() {
    return (
      <div></div>
    );
  }
}

export default App;