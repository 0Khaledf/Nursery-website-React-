import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Main from './components/Main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Plants from './components/Plants'
import { createContext } from 'react';
import N404 from './components/N404'
import Checkout from './components/Checkout'
import im1 from './assets/download (1).jpeg';
import im2 from './assets/download (2).jpeg';
import im3 from './assets/download (3).jpeg';
import im4 from './assets/download (4).jpeg';
import im5 from './assets/download (5).jpeg';
import im6 from './assets/download (6).jpeg';
import im7 from './assets/download (7).jpeg';
import im8 from './assets/download (8).jpeg';
export const AppContext = createContext();
const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    type: "Tropical Foliage",
    price: 45,
    light: "Bright, indirect light",
    water: "Weekly, let soil dry between",
    description: "Iconic split-leaf plant perfect for modern interiors.",
    imageUrl: im1,
    active: true,
    sale:false,
  count:0},

  {
    id: 2,
    name: "Peace Lily",
    type: "Flowering Houseplant",
    price: 25,
    light: "Low to medium light",
    water: "Keep soil moist",
    description: "Purifies air and blooms elegant white flowers.",
    imageUrl: im2,
    active: true,
    sale:true,
    count:0
},
  {
    id: 3,
    name: "Echeveria 'Lola'",
    type: "Succulent",
    price: 12,
    light: "Full sun",
    water: "Sparse (every 2-3 weeks)",
    description: "Rosette-shaped with pink edges. Drought-tolerant.",
    imageUrl: im3,
    active: true,
    sale:false,
    count:0
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    type: "Tree",
    price: 65,
    light: "Bright, indirect light",
    water: "Every 1-2 weeks",
    description: "Trendy tree with large, violin-shaped leaves.",
    imageUrl: im4,
    active: true,
    sale:false,
    count:0
},
  {
    id: 5,
    name: "Orchid (Phalaenopsis)",
    type: "Flowering Plant",
    price: 30,
    light: "Medium, indirect light",
    water: "Weekly (ice cubes or soak)",
    description: "Elegant blooms lasting months. Thrives in humidity.",
    imageUrl: im5,
    active: true,
    sale:true,
    count:0
},
  {
    id: 6,
    name: "Snake Plant",
    type: "Succulent",
    price: 20,
    light: "Low to bright light",
    water: "Monthly (hard to kill!)",
    description: "Tall, sword-like leaves. Perfect for beginners.",
    imageUrl: im6,
    active: true,
    sale:false,
    count:0 },
  {
    id: 7,
    name: "Pothos 'Golden'",
    type: "Vining Plant",
    price: 15,
    light: "Low to bright light",
    water: "Every 1-2 weeks",
    description: "Trailing vines with heart-shaped leaves. Easy to propagate.",
    imageUrl: im7,
    active: true,
    sale:true,
    count:0},
  {
    id: 8,
    name: "Rubber Plant",
    type: "Foliage",
    price: 35,
    light: "Bright, indirect light",
    water: "Every 1-2 weeks",
    description: "Glossy burgundy or green leaves. Air-purifying.",
    imageUrl: im8,
    active: true,
    sale:false,
    count:0}
];
function App() {
  const [total, setTotal] = useState(0);
  const [objects, setObjects] = useState([]);
  const [objectsp,setObjectsp]=useState(plants);
  // Create a shared state object
  const sharedState = {
    objectsp,
    setObjectsp,
    total,
    setTotal,
    objects,
    setObjects
  };
 // const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {
      path: '/',
      element:<Layout />,
      errorElement:<N404 />,
      children:
      [
        {path: '/',
      element: <Main />,
      errorElement: <N404 />
    },
    {
      path:'plants',
      element: <Plants />,
      errorElement: <N404 />
    }
    ,{
      path: 'checkout',
      element: <Checkout />,
      errorElement: <N404 />
    }
      ]
    }
  ])
  return (
  <AppContext.Provider value={sharedState}>
    {/* Wrap your application in the context provider */}
    <RouterProvider router={router}/>
  </AppContext.Provider>
  )
}

export default App
