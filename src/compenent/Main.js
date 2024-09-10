import React from 'react';
import '../style/main.css'


function Main() {
  return (
    <main>
        
      <section id="intro">
        <h1>Best place to find your food love</h1>
        <p>Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna dolor enim dui lectus idristique dignissim pharetra.</p>
        <button>Make a Reservation</button>
        <img alt='image'/>
      </section>

      <section id="book_a_table"> 
        <h3>Restaurant</h3>
        <h1>Book a Table</h1>
        <p>Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna dolor enim dui lectus id. 
        Tristique dignissim pharetra feugiat mattis non. Vivamus libero feugiat odio eget potenti.</p>
        <button id="book_a_table">Make a reservation</button>

      </section>

      <section id="menu-highlight">
        <h2>Main Menu</h2>
        <div className="menu-cards">
          <article>
            <h3>Sweet Desserts</h3>
            <button>View menu</button>
          </article>
          <article>
            <h3>Amazing Coffee</h3>
            <button>View menu</button>
          </article>
          <article>
            <h3>Best Breakfasts</h3>
            <button>View menu</button>
          </article>
          <article>
            <h3>Great Cocktails</h3>
            <button>View menu</button>
          </article>
        </div>
      </section>

      <section id="best_place">
      <div className="restaurant-container">
      <div className="image-container">
        <img src="path_to_main_image.jpg" alt="Restaurant interior" className="main-image" />
        <img src="path_to_secondary_image.jpg" alt="Outdoor seating" className="secondary-image" />
      </div>
      <div className="content-container">
        <div>
            <img alt='image1'/>
            <img alt='image2'/>

        </div>
        <h1 className="title">RESTAURANT</h1>
        <p className="description">
          Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultricies volutpat enim dignissim id purus. Urna quam massa urna dolor enim dui lectus id...
        </p>
        <button >Make a reservation</button>
      </div>
      </div>
      </section>

      <section id="most-popular">
        <h2>Most Popular Sushi Meals</h2>
        <div className="menu-items">
          <article>
            <h3>Uramaki Sushi</h3>
            <p>Aliquet egestas gravida orci nulla lacus suspendisse.</p>
          </article>
          <article>
            <h3>Maki Sushi</h3>
            <p>Vel ullamcorper ultrices volutpat enim dignissim id purus.</p>
          </article>
          <article>
            <h3>Sushi Set "Samurai"</h3>
            <p>Urna quam massa urna dolor enim dui lectus idristique dignissim pharetra.</p>
          </article>
        </div>
      </section>


    </main>
  );
}

export default Main;
