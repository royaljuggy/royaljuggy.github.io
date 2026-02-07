import { useState } from 'react';
import { Trophy, Music, Gamepad2, Tv, Award, Play, Star, Heart, X, Info, Library } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState<null | {
    id: string;
    title: string;
    description: string;
    details: string[];
    color: string;
    icon: any;
    playlistUrl?: string;
  }>(null);

  const hobbies = [
    {
      id: 'anime',
      title: 'Anime & Shows',
      type: 'Anime',
      description: "Deeply into shows like Re:Zero, Violet Evergarden, and the Fate series.",
      details: [
        "I'm a huge fan of Re:Zero, Violet Evergarden, and the Fate series.",
        "I love the thrill of finding 'hidden gems'; shows that aren't mainstream but have amazing stories.",
        "Favorite genres include Isekai, Action, and Romance.",
        "Always down to trade MyAnimeList profiles if you're interested!"
      ],
      color: 'pink',
      icon: Tv,
      tags: ['Isekai', 'Action', 'Romance'],
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'gaming',
      title: 'Competitive Play',
      type: 'Gaming',
      description: 'Mainly playing CS:GO, League of Legends, and Fate/Grand Order.',
      details: [
        "My CS:GO inventory is valued at over $3,000 CAD; I spent a lot of time in the trading scene.",
        "I play League of Legends regularly, though I try to keep it casual for my sanity.",
        "Pokémon GO is my favorite way to make daily walks more interesting.",
        "Fate/Grand Order is my go-to gacha game for when I need that Fate fix."
      ],
      color: 'purple',
      icon: Gamepad2,
      span: 'md:col-span-2',
      stat: { label: 'CS:GO Inv Value', value: '$3,000+' }
    },
    {
      id: 'collecting',
      title: 'The Collection',
      type: 'Collecting',
      description: 'Rare Pokemon cards, K-pop photocards, and anime figurines.',
      details: [
        "I love collecting rare K-pop photocards and have a large album collection.",
        "I collect Pokemon TCG cards, focusing on rare and interesting finds.",
        "I have a large collection of high-quality anime figurines that I've built up over the years.",
        "There's something amazing about finding a rare item and adding it to the shelf."
      ],
      color: 'amber',
      icon: Library,
      span: 'md:col-span-2',
      badge: 'Rare Photocard Hunter'
    },
    {
      id: 'music',
      title: 'The "Tokyo" Playlist',
      type: 'Music',
      description: 'Mostly K-pop (NMIXX #1) with a nice portion of J-pop.',
      details: [
        "My favorite group of all time is NMIXX; I was in the top 3,000 listeners globally on Spotify in 2025!",
        "I've traveled for concerts: IVE (Chicago), aespa (Chicago), NMIXX (Tokyo & Toronto), TWICE (Orlando), and LE SSERAFIM (Chicago).",
        "I love collecting rare K-pop photocards and have a large album collection.",
        "My 'Tokyo' playlist is a 55+ hour mix of K-pop, J-pop, and Anime hits.",
        "I'm always happy to share some recommendations if you're interested in the scene!"
      ],
      color: 'orange',
      icon: Music,
      span: 'md:col-span-2',
      hasPlay: true,
      playlistUrl: 'https://open.spotify.com/playlist/4Uv0QPBkqs9xjaxpM21KTt?si=4c882a96d4184c19',
      stat: { label: '2025 Spotify Rank', value: 'Top 3000' }
    },
    {
      id: 'sports',
      title: 'Curling Captain',
      type: 'Sports',
      description: '2x Provincial Qualifier and former High School Captain.',
      details: [
        "I played as both vice-captain and captain for my high school curling team.",
        "We won regionals and qualified for the provincial level twice.",
        "I'm a massive Toronto Raptors fan; never miss a game if I can help it.",
        "Being a Leafs fan is a tragic tale, but I'm still here through thick and thin."
      ],
      color: 'blue',
      icon: Trophy,
      span: 'md:col-span-1',
      badge: '2x Provincial Qualifier'
    },
    {
      id: 'awards',
      title: 'Distinctions',
      type: 'Awards',
      description: 'Achievements from DECA and Startup Brampton.',
      details: [
        "Placed Top 18 in all of Ontario for DECA Personal Financial Literacy in 2020.",
        "Earned Top 3 in the Peel Region for DECA in 2019.",
        "Won 2nd Place at Peel Startup Brampton for my entrepreneurial pitch.",
        "Consistently balanced these activities while taking a full 5-course load."
      ],
      color: 'gray',
      icon: Award,
      span: 'md:col-span-1'
    }
  ];

  const colorClasses: Record<string, string> = {
    pink: 'bg-pink-50 border-pink-200 text-pink-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    gray: 'bg-gray-50 border-gray-300 text-gray-800',
  };

  return (
    <div className="space-y-12 pb-20 relative">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Beyond the Code</h1>
        <p className="text-xl text-gray-500">Click on a card to learn more about my story.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <motion.div
              key={hobby.id}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedHobby(hobby as any)}
              className={`${hobby.span} ${colorClasses[hobby.color || 'gray']} rounded-3xl p-6 border-2 cursor-pointer hover:shadow-xl transition-all relative group flex flex-col justify-between overflow-hidden`}
            >
              {/* Subtle Background Pattern */}
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity text-current">
                {Icon && <Icon className="w-32 h-32" />}
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="font-bold uppercase tracking-wider text-[10px]">{hobby.type}</span>
                  </div>
                  <Info className="w-4 h-4 text-current opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hobby.title}</h3>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">{hobby.description}</p>
                </div>

                {hobby.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {hobby.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-white border border-current/20 text-[10px] font-bold rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative z-10 mt-6 flex items-center justify-between">
                {hobby.stat && (
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl shadow-sm border border-current/20">
                    <span className="font-bold block text-sm">{hobby.stat.value}</span>
                    <span className="text-[8px] uppercase font-bold tracking-tighter opacity-70">{hobby.stat.label}</span>
                  </div>
                )}
                
                {hobby.badge && (
                  <div className="flex items-center gap-1 text-[10px] font-bold bg-white/90 border border-current/20 px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 fill-current" />
                    {hobby.badge}
                  </div>
                )}

                {hobby.hasPlay && (
                  <div className="relative group/play">
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(hobby.playlistUrl, '_blank');
                      }}
                      className="bg-orange-600 p-3 rounded-2xl text-white shadow-md hover:scale-110 transition-transform"
                    >
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <div className="absolute bottom-full mb-2 right-0 opacity-0 group-hover/play:opacity-100 transition-opacity bg-gray-900 text-white text-[8px] px-2 py-1 rounded-lg pointer-events-none shadow-xl border border-white/10 flex items-center gap-2">
                      <span className="opacity-60">spotify.com</span>
                      <div className="w-px h-2 bg-white/20" />
                      <span className="font-mono">Tokyo Playlist</span>
                    </div>
                  </div>
                )}

                {hobby.id === 'music' && (
                  <div className="flex items-center gap-2 text-orange-800">
                    <Heart className="w-4 h-4 fill-current text-red-500" />
                    <span className="text-[10px] font-bold italic">NMIXX Stan</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedHobby && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHobby(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              layoutId={selectedHobby.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl z-[60] overflow-hidden"
            >
              <div className={`h-32 ${colorClasses[selectedHobby.color || 'gray']} border-b-2 flex items-center justify-center relative`}>
                {selectedHobby.icon && <selectedHobby.icon className="w-16 h-16 opacity-20" />}
                <button 
                  onClick={() => setSelectedHobby(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/40 hover:bg-white/60 text-gray-900 transition-colors shadow-sm cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-10 space-y-6">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border-2 ${colorClasses[selectedHobby.color || 'gray']}`}>
                    {selectedHobby.title}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900">More Details</h2>
                </div>

                <ul className="space-y-4">
                  {selectedHobby.details.map((detail, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="flex gap-4 text-gray-700 font-medium leading-relaxed"
                    >
                      <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${colorClasses[selectedHobby.color || 'gray'].split(' ')[2]}`} 
                           style={{ backgroundColor: 'currentColor' }} />
                      {detail}
                    </motion.li>
                  ))}
                </ul>

                {selectedHobby.id === 'music' && selectedHobby.playlistUrl && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4"
                  >
                    <iframe 
                      src={`https://open.spotify.com/embed/playlist/${selectedHobby.playlistUrl.split('/playlist/')[1].split('?')[0]}`}
                      width="100%" 
                      height="152" 
                      frameBorder="0" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                      className="rounded-2xl shadow-sm"
                    ></iframe>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="text-center pt-8">
        <p className="text-gray-400 text-sm italic">"Life is better when you're curious."</p>
      </footer>
    </div>
  );
};

export default Hobbies;
