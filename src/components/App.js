import { Routes, Route } from 'react-router-dom';

import Activity from './Activity';
import Layout from './Layout';
import About from './About';
import Contact from './Contact';
import Missing from './Missing';
// import Home from './Home';

import Paintings from './Paintings';
import Search from './Search';
// import AddPainting from './paintings/AddPainting';
import PaintingDisplay from './PaintingDisplay';

// import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activity />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="paintings">
          <Route index element={<Paintings />} />
          <Route path=":id" element={<PaintingDisplay />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="add" element={<AddPainting />} /> */}
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
