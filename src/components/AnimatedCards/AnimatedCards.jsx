// import React, { useState } from 'react';
// import './AnimatedCards.css';

// const cardsData = [
//   {
//     title: 'Products',
//     description: 'Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
//         <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
//       </svg>
//     )
//   },
//   {
//     title: 'Categories',
//     description: 'Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
//         <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
//         <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
//         <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
//         <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
//       </svg>
//     )
//   }
// ];

// const AnimatedCards = () => {
//   const [lightMode, setLightMode] = useState(false);

//   return (
//     <div className={`animated-cards ${lightMode ? 'light toggle' : ''}`}>
//       <label className="day-night">
//         <input type="checkbox" checked={lightMode} onChange={() => setLightMode(prev => !prev)} />
//         <div />
//       </label>

//       <div className="grid">
//         {cardsData.map((card, idx) => (
//           <div className="card" key={idx}>
//             <span className="icon">{card.icon}</span>
//             <h4>{card.title}</h4>
//             <p>{card.description}</p>
//             <div className="shine" />
//             <div className="background">
//               <div className="tiles">
//                 {Array.from({ length: 10 }).map((_, i) => (
//                   <div key={i} className={`tile tile-${i + 1}`} />
//                 ))}
//               </div>
//               <div className="line line-1" />
//               <div className="line line-2" />
//               <div className="line line-3" />
//             </div>
//           </div>
//         ))}
//       </div>

//       <a className="twitter" target="_top" href="https://twitter.com/aaroniker_me">
//         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72">
//           <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"/>
//         </svg>
//       </a>
//     </div>
//   );
// };

// export default AnimatedCards;









import React, { useState } from 'react';
import './AnimatedCards.css';

const cardsData = [
  {
    title: '1/2 BHK',
    description:
      'Cozy one- or two‑bedroom units perfect for solo dwellers or couples, with all basic amenities included.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l9-9 9 9M4 10v10h16V10" />
        <path d="M9 21V9h6v12" />
      </svg>
    )
  },
  {
    title: '3/4 BHK',
    description:
      'Spacious three- and four‑bedroom flats ideal for families or roommates who want extra room to spread out.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12l1-2h14l1 2v8H4v-8z" />
        <path d="M12 3v4" />
        <path d="M8 7h8" />
      </svg>
    )
  },
  {
    title: 'For Family',
    description:
      'PG rooms with family‑friendly environment, communal kitchen, and safety features—perfect for everyone from kids to grandparents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21v-2a4.5 4.5 0 0 1 9 0v2" />
      </svg>
    )
  },
  {
    title: 'For Bachelors',
    description:
      'Modern, no‑frills rooms tailored for working professionals and students—fast Wi‑Fi, co‑working spaces, and 24/7 security.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-8 0v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    title: 'Furnished',
    description:
      'Ready‑to‑move rooms with beds, wardrobes, study tables, and more—just bring your suitcase and settle right in.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    )
  },
  {
    title: 'Unfurnished',
    description:
      'Bare rooms for those who prefer to bring their own furniture or customize the layout completely.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M4 10h16M10 6v4" />
      </svg>
    )
  }
];

export default function AnimatedCards() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={`animated-cards ${lightMode ? 'light toggle' : ''}`}>
      <div className="grid">
        {cardsData.map((card, idx) => (
          <div className="card" key={idx}>
            <span className="icon">{card.icon}</span>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <div className="shine" />
            <div className="background">
              <div className="tiles">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`tile tile-${i + 1}`} />
                ))}
              </div>
              <div className="line line-1" />
              <div className="line line-2" />
              <div className="line line-3" />
            </div>
          </div>
        ))}
      </div>

      <a
        className="twitter"
        target="_top"
        href="https://twitter.com/aaroniker_me"
        rel="noopener noreferrer"
      >
        <svg width="32" height="32" viewBox="0 0 72 72" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06…"/>
        </svg>
      </a>
    </div>
  );
}
