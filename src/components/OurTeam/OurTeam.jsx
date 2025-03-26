import { useState } from "react";
import { peoples } from "../Json/OurTeamJson/OurTeamJson";

function OurTeam() {
  const [visibleCount, setVisibleCount] = useState(10);
  const increment = 10;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + increment);
  };

  return (
    <>
      <div className="text-center">
        <h2 className="ornament-top bgR">Our Team</h2>
      </div>
      <div className="team-wrap mt-16">
        <div className="team-container wrap">
          {peoples.slice(0, visibleCount).map((people, i) => (
            <div key={i} className="team-item">
              <div className="team-image ">
                <img src={people.img} alt={people.name} />
              </div>
              <div className="team-info mt-5">
                <p className="text-lg font-semibold">{people.name}</p>
                <p className="text-sm tracking-widest mt-1 font-light">
                  {people.position}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          {visibleCount < peoples.length ? (
            <button
              onClick={handleLoadMore}
              className=" inline-block text-white uppercase font-semibold bg-[var(--primary-color)] py-4 px-8 rounded-md mt-8 text-md tracking-wider transition-colors ease-in-out duration-300 hover:bg-[var(--secondary-color)] hover:text-[var(--dark-color)]"
            >
              Load More
            </button>
          ) : (
            <button className="cursor-not-allowed inline-block uppercase font-semibold py-4 px-8 rounded-md mt-8 text-md tracking-wider  bg-[var(--secondary-color)] text-[var(--dark-color)]">
              All are loaded
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default OurTeam;
