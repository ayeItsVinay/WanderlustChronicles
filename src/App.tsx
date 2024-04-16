import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';
import { TitleSection } from './components/Titles'


//Array of structured customers
const customers = [
  {
    id: 1,
    name: "Harshit Reddy",
    smallDesc: "Age: 34, Occupation: Software Engineer. Tech enthusiast with a knack for solving complex problems.",
    longDesc: "Harshit has a passion for traveling, exploring diverse cultures, and capturing moments through his lens. His personal stories often include tales from his backpacking trips across Asia and his experiments with street photography."
  },
  {
    id: 2,
    name: "Ajay Samprath",
    smallDesc: "Age: 29, Occupation: Graphic Designer. Creative and artistic, with a love for minimalist designs.",
    longDesc: "Ajay is always on the move, seeking inspiration for he designs in the beauty of different landscapes. An avid photographer, he portfolio is a collection of vibrant stories from he travels, often reflecting he love for the mountains and nature."
  },
  {
    id: 3,
    name: "Kirthi Lokesh",
    smallDesc: "Age: 42, Occupation: Historian Architect. Academic with a deep appreciation for world history and civilizations.",
    longDesc: "Kirthi finds joy in visiting ancient ruins and historical landmarks. His travel anecdotes are filled with the thrill of discovery and insights into his photography of rare historical manuscripts and artifacts."
  },
  {
    id: 4,
    name: "Srinivas Gowda",
    smallDesc: "Age: 37, Occupation: Interior Architect. Combines functionality with aesthetics to create sustainable spaces.",
    longDesc: "Srinivas love for travel complements her architectural pursuits, as he studies the design of buildings across continents. He camera is a constant companion, capturing the essence of urban landscapes and the stories they tell."
  },
  {
    id: 5,
    name: "Mankikantha Gada",
    smallDesc: "Age: 31, Occupation: Executive Chef. Culinary artist who fuses traditional flavors with modern techniques.",
    longDesc: "Mankikantha's journey through the culinary landscapes of the world is marked by vibrant images of bustling markets and serene cafes. His travel stories are as much about food photography as they are about the people he meets and the meals they share."
  },
  {
    id: 6,
    name: "Varun Chahal",
    smallDesc: "Age: 26, Occupation: Environmentalist. Passionate about sustainability and green living.",
    longDesc: "Varun travels in pursuit of green innovation, he camera always at the ready to document eco-friendly solutions. He stories are a blend of adventure and he quest to make a difference, featuring the diverse people he meets on her journey."
  },
  {
    id: 7,
    name: "Venugopal V",
    smallDesc: "Age: 30, Occupation: Driven Entruprenuer. Motivated by innovation and leadership in the tech industry.",
    longDesc: "Venugopal's love for travel is parallel to he entrepreneurial spirit, capturing cutting-edge tech hubs and startups worldwide through he photography. He personal tales weave he business insights with the cultures he encounters."
  },
  {
    id: 8,
    name: "Kiran",
    smallDesc: "Age: 40, Occupation: Art Curator. Connoisseur of fine arts and modern sculptures.",
    longDesc: "Bhanu's journeys are a mission to uncover hidden art gems. His photography showcases the interplay between art and the environment, with narratives that delve into his profound experiences with artists and their creations."
  },
  {
    id: 9,
    name: "Rakesh R Shastri",
    smallDesc: "Age: 88, Occupation: Retired Vetaran. Storyteller with a focus on social issues and global trends.",
    longDesc: "Rakesh's travels serve her storytelling, as he documents life in different corners of the world. He camera captures poignant moments, while he travel stories reveal the resilience and diversity of human spirit he encounters."
  },
  {
    id: 10,
    name: "Viraj Chowdarapu",
    smallDesc: "Age: 35, Occupation: Marine Biologist. Dedicated to ocean conservation and marine life research.",
    longDesc: "Viraj's expeditions take him to the heart of the seas. His photography features stunning underwater scenes and close encounters with marine life. His narratives often reflect on the urgent need for conservation and the ocean's mysteries."
  }
  
]

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  return (

    <div className="parent">
      {/* <StarAnimation /> */}
      <TitleSection />
      <div className="app-container">
      
        <div className="app-left">
          <CustomerList customers={customers} onSelect={setSelectedCustomer} selectedCustomerId={selectedCustomer?.id} />
        </div>

        <div className="app-right">
          
          <CustomerDetails customer={selectedCustomer} />

        </div>
      </div>
    
      
    </div>

  );
};

export default App;
