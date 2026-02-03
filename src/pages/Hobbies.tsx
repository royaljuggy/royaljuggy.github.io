import { Heart, Camera, Coffee, Mountain } from 'lucide-react';

const Hobbies = () => {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Beyond the Code</h1>
        <p className="text-xl text-gray-500">A glimpse into my life and what keeps me inspired.</p>
      </header>

      <div className="space-y-24">
        {/* Hobby 1: Photography */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-bold">
              <Camera className="w-4 h-4" />
              <span>Photography</span>
            </div>
            <h2 className="text-3xl font-bold">Capturing the Small Moments</h2>
            <p className="text-gray-600 leading-relaxed">
              When I'm not staring at a terminal, I'm usually behind a lens. Photography has taught me
              to appreciate the subtle play of light and shadow, much like how I appreciate the 
              clean architecture of a well-written codebase. I love street photography and 
              landscape photography, finding beauty in the mundane and the majestic alike.
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              "To me, photography is an art of observation. It's about finding something interesting
              in an ordinary place..."
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
              <img src="https://via.placeholder.com/400x500" alt="Hobby" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-sm mt-8">
              <img src="https://via.placeholder.com/400x500" alt="Hobby" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Hobby 2: Coffee & Community */}
        <section className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-bold">
              <Coffee className="w-4 h-4" />
              <span>Coffee Culture</span>
            </div>
            <h2 className="text-3xl font-bold">The Perfect Brew</h2>
            <p className="text-gray-600 leading-relaxed">
              There's a certain meditative quality to brewing a pour-over at 7 AM. I'm a self-proclaimed
              specialty coffee enthusiast. For me, it's not just about the caffeine; it's about the
              craft—from the origin of the beans to the precision of the grind. I love visiting 
              local roasteries and chatting with baristas about their latest harvests.
            </p>
          </div>
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg border-8 border-white">
            <img src="https://via.placeholder.com/800x600" alt="Coffee" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Hobby 3: Hiking */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold">
              <Mountain className="w-4 h-4" />
              <span>Exploration</span>
            </div>
            <h2 className="text-3xl font-bold">Seeking the Summits</h2>
            <p className="text-gray-600 leading-relaxed">
              Hiking is my way of resetting. There's nothing like a 10-mile trek to gain some 
              perspective. Whether it's the rugged trails of the PNW or the rolling hills of the 
              East Coast, being in nature reminds me of the importance of resilience and 
              steady progress—qualities that I carry back to my engineering work.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-[3rem] overflow-hidden">
            <img src="https://via.placeholder.com/800x450" alt="Nature" className="w-full h-full object-cover" />
          </div>
        </section>
      </div>

      <footer className="text-center py-20">
        <div className="inline-flex items-center gap-2 text-gray-400">
          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
          <span>Life is better when you're curious.</span>
        </div>
      </footer>
    </div>
  );
};

export default Hobbies;
