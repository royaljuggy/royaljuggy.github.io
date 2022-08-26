import React from 'react'
import './personal_info.css'

const PersonalInfo = () => {
  return (
    <section id="personal_info">
        <h5>Outside of Work</h5>
        <h2>Personal Life</h2>

        <div className="container personal_info__container">
			<h3 class="block-header">My hobbies</h3>
            <p>Sportswise, I mainly watch basketball, and of course my team is the Raptors. I also sometimes watch hockey, but being a Leafs fan is tragic tale... That said, my favourite sport by
                far is curling! In highschool, I played vice-captain and captain. Alongside my teammates, we won regionals and qualified for provincials twice!</p>
            <p>I am a huge Anime geek. Ask me for my MyAnimeList profile if you'd like (albeit I personally
                believe
                I haven't watched <em>too much</em> yet). My favourite shows are
                Re:Zero, Violet Evergarden, and the Fate series. I'm a huge sucker for the genres of isekai,
                action, and romance - oh! And I absolutely love underground, less-known shows. Something about finding a series no one has heard of and learning to love it is amazing.
                I also own a very large figurine collection!</p>
            <p>I also absolutely love playing video games! My all-time favourite is CS:GO, but I also regularly
                play
                League of Legends, Pokémon GO, and Fate Grand Order. <strong>Fun fact:</strong> My CS:GO inventory is valued at over $1250 USD!
            </p>
            <p>Lastly, I love listening to music. The moments when I'm in my "zone" are always when I'm jamming
                out
                to my playlist. You'll find me listening to very niche genres:
                J-pop, Anime music, and a bit of K-pop. If you ever get the chance to meet me, I'd love to show
                you
                the hidden gems that is Japanese music. So please ask me to!
            </p>
            <p>Check out my main Spotify playlist, 800+~ songs, 55~ hours of my favourite hits: <a href="https://open.spotify.com/playlist/6zvutQR5a6hfcHHQmOHlxz?si=3478a1e8f82f4d90" alt="My Spotify playlist">
                Nihon.
            </a></p>
            <h3 class="block-header">Awards, accomplishments, distinctions</h3>
            <ul class="bullet-points">
                <li><a
                        href="http://startuppeel.ca/startup-weekend-launched-beep-u-track-and-stoar-this-is-how-it-happened-in-54hrs/">2nd
                        Place Peel Startup Brampton</a></li>
                {/* <li><a href="https://dmoj.ca/user/skillswap">DMOJ</a> (Online programming challenges)</li> */}
                <li><strong>DECA</strong>: Top 18 Ontario in Personal Financial Literacy (PFL), 2020. Top 3 Peel
                    Region (PFL), 2019</li>
            </ul>
   
        </div>

    </section>
  )
}

export default PersonalInfo