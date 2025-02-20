function About() {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 glow-pulse">About the Club</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-300">
          <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
          A heartbeat of melody, rhythm, and passion—Symphony is where music transcends boundaries. Established during WinterGala-24 under the visionary guidance of Mrs. Rubby Chawla Ma’am, Director of Allenhouse Group of Institutions, the club has become the ultimate hub for musicians and vocalists of all genres. 
          </p>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
At Symphony, we embrace every form of musical expression—from soulful melodies to electrifying rock anthems. Our in-house rock band, RYTHEM, fuels the stage with high-energy performances, while our talented instrumentalists and vocalists craft symphonies that leave audiences spellbound. Under the leadership of Varun Kureel, Symphony has performed at prestigious competitions and grand events, earning accolades and admiration along the way.
</p>
<p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
Whether you're a virtuoso or just starting your musical journey, Symphony is where talent thrives, collaborations spark, and every note tells a story.

          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
  {
    "title": "Mission",
    "text": "At Symphony, our mission is simple yet powerful: 'To amplify every beat and harmonize every soul.' We strive to create a space where music transcends beyond sound—where it becomes an experience, a movement, and a force that unites people. Whether through powerful performances, soul-stirring melodies, or electrifying rock anthems, we aim to inspire and elevate the musical spirit in everyone."
  },
  {
    "title": "Events",
    "text": "Symphony is the heartbeat of campus culture, orchestrating a variety of events throughout the year. From the grandeur of the Annual Fest to the raw energy of Open Mics and skill-enhancing Workshops, our club provides a platform for musicians and singers of all genres to showcase their talent, learn, and grow."
  },
  {
    "title": "Legacy",
    "text": "Founded during the iconic WinterGala-24 by the esteemed Director of Allenhouse Group of Institutions, Mrs. Rubby Chawla Ma’am, Symphony has evolved into a musical powerhouse. Under the leadership of Varun Kureel, the club has grown to encompass musicians and vocalists across all genres, including its dynamic rock band, RYTHEM. With over 50 performances and numerous awards, Symphony has left an indelible mark on every stage, earning admiration and applause from audiences far and wide."
  }
].map((item, i) => (
              <div key={i} className="floating" style={{ animationDelay: `${i * 0.5}s` }}>
                <h3 className="text-xl sm:text-2xl text-cyan-400 glow-pulse">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default About;