import React from 'react';
import Head from 'next/head';
import Script from 'next/script';


function App() {
  return(
    <>
    <Head>
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Insignia V1.0</title>
  {/* Icon  */}
  <link
    rel="shortcut icon"
    href="./images/Insignia Logo Final Without Tag.ico"
    type="image/x-icon"
  />
  {/* Loading Page */}
  <link rel="stylesheet" href="./css/loading.css" />
  <link rel="stylesheet" href="./css/style.css" />
  {/* Clock Time */}
  <link rel="stylesheet" href="./css/flipdown.css" />
  {/* Iconscout CDN */}
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
  />
  {/* GOOGLE FONTS (MONTSERRAT)*/}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Press+Start+2P&display=swap"
    rel="stylesheet"
  />
  {/* SWIPER JS */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
  />
</>
    </Head>
  {/* Nav Start */}
  <nav>
    <div className="container nav_container">
      <a href="index.html">
        <h4> Insignia V1.0 </h4>
      </a>
      <ul className="nav_menu">
        <li>
          <a href="index.html"> Home </a>
        </li>
        <li>
          <a href="#lv4"> Levels </a>
        </li>
        <li>
          <a href="#mot"> About Us </a>
        </li>
        <li>
          <a href="#fq"> Faqs </a>
        </li>
      </ul>
      <button id="open-menu-btn">
        {" "}
        <i className="uil uil-bars" />{" "}
      </button>
      <button id="close-menu-btn">
        <i className="uil uil-multiply"> </i>{" "}
      </button>
      <div>
        <a href="#" className="register-button">
          Register
        </a>
      </div>
    </div>
  </nav>
  <section className="home" id="home">
    <div className="timer">
      <h1>INSIGNIA 2K23</h1>
      <div id="flipdown" className="flipdown" />
    </div>
    {/* Header Part */}
    <header>
      <div className="container header_container">
        <div className="header_right">
          {" "}
          {/* header_left*/}
          <h1>TagLine Statement</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            deleniti doloremque qui recusandae amet nesciunt perferendis
            accusamus in. Dolorem asperiores nostrum quam facere? Earum ducimus
            ipsum reprehenderit modi dicta saepe?
          </p>
          <a href="courses.html" className="btn btn-primary">
            Get Started
          </a>
        </div>
        {/* <div class="header_right">
              <div class="header_right-image">
                  <img src="./images/header.svg" alt="ICON IMAGE">
              </div>
          </div> */}
      </div>
    </header>
  </section>
  {/* End Header Part*/}
  <div className="swiper mySwiper">
    <div className="swiper-wrapper">
      {/* START About Section  */}
      <section className="about swiper-slide" id="about-us">
        <h2 className="heading">What's Insignia 2k23?</h2>
        <div className="about-container">
          <div className="about-images">
            <img src="./images/about achievements.svg" />
          </div>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              commodi deleniti consequuntur quas enim necessitatibus, rem illo
              id exercitationem quasi odit adipisci, libero itaque.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad
              ullam delectus labore maiores aut aliquam!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              deleniti amet commodi ipsum cumque temporibus distinctio eligendi!
              Enim atque perferendis laborum.
            </p>
          </div>
        </div>
      </section>
      {/* End About Section  */}
      {/* START About Section  */}
      <section className="about swiper-slide" id="about-us">
        <h2 className="heading">What's Insignia 2k23?</h2>
        <div className="about-container">
          <div className="about-images">
            <img src="./images/about achievements.svg" />
          </div>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              commodi deleniti consequuntur quas enim necessitatibus, rem illo
              id exercitationem quasi odit adipisci, libero itaque.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad
              ullam delectus labore maiores aut aliquam!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              deleniti amet commodi ipsum cumque temporibus distinctio eligendi!
              Enim atque perferendis laborum.
            </p>
          </div>
        </div>
      </section>
      {/* End About Section  */}
      {/* START About Section  */}
      <section className="about swiper-slide" id="about-us">
        <h2 className="heading">What's Insignia 2k23?</h2>
        <div className="about-container">
          <div className="about-images">
            <img src="./images/about achievements.svg" />
          </div>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              commodi deleniti consequuntur quas enim necessitatibus, rem illo
              id exercitationem quasi odit adipisci, libero itaque.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad
              ullam delectus labore maiores aut aliquam!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              deleniti amet commodi ipsum cumque temporibus distinctio eligendi!
              Enim atque perferendis laborum.
            </p>
          </div>
        </div>
      </section>
      {/* End About Section  */}
    </div>
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
    <div className="swiper-pagination" />
  </div>
  {/*================================== Start OF Levels ======================*/}
  <section id="lv4" className="levels">
    <h2> Rules &amp; Details for each Level </h2>
    <div className="container levels_container">
      <article className="level">
        <div className="card">
          <div className="front">
            <div className="level_image">
              <img src="./images/course1.jpg" />
            </div>
            <div className="levels_info">
              <h4> Responsive Socail Media Website Ui Design</h4>
              <a href="#" className="btn btn-primary learn-more">
                Learn More
              </a>
            </div>
          </div>
          <div className="back">
            <h1>Level 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              vel. Quisquam atque quod id sapiente sint!
            </p>
            <a href="#" className="btn btn-primary learn-more">
              Go Back
            </a>
          </div>
        </div>
      </article>
      <article className="level">
        <div className="card">
          <div className="front">
            <div className="level_image">
              <img src="./images/course2.jpg" />
            </div>
            <div className="levels_info">
              <h4> Responsive SmartHpme Website Design</h4>
              <a href="#" className="btn btn-primary learn-more">
                Learn More
              </a>
            </div>
          </div>
          <div className="back">
            <h1>Level 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              vel. Quisquam atque quod id sapiente sint!
            </p>
            <a href="#" className="btn btn-primary learn-more">
              Go Back
            </a>
          </div>
        </div>
      </article>
      <article className="level">
        <div className="card">
          <div className="front">
            <div className="level_image">
              <img src="./images/course1.jpg" />
            </div>
            <div className="levels_info">
              <h4> Responsive Socail Media Website Ui Design</h4>
              <a href="#" className="btn btn-primary learn-more">
                Learn More
              </a>
            </div>
          </div>
          <div className="back">
            <h1>Level 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              vel. Quisquam atque quod id sapiente sint!
            </p>
            <a href="#" className="btn btn-primary learn-more">
              Go Back
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
  {/*================================== END OF Levels ======================*/}
  {/* ############################# Start of Testimonials ##########################  */}
  {/* 
<section class="container testimonials_container mySwiper">
    <h2>Students Testimonials</h2>
    <div class="swiper-wrapper">

  <article class="testimonial swiper-slide">
      <div class="avatar">
          <img src="./images/avatar1.jpg">
      </div>
      <div class="testimonial_info">
          <h5>Diana Ayi</h5>
          <small>Student</small>
      </div>
      <div class="tetimonial_body">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati optio sit repudiandae accusamus ratione voluptatibus facilis asperiores quaerat, recusandae a quidem. Ex dignissimos sapiente officiis eum cumque quibusdam consequuntur!
          </p>
      </div>
  </article>

  <article class="testimonial swiper-slide">
      <div class="avatar">
          <img src="./images/avatar2.jpg">
      </div>
      <div class="testimonial_info">
          <h5>Ernest Achiever</h5>
          <small>Student</small>
      </div>
      <div class="tetimonial_body">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi, quae perferendis ex sit suscipit praesentium fugit repellat ut ullam voluptates molestias harum explicabo corporis quisquam et voluptate architecto natus!
          </p>
      </div>
  </article>

  <article class="testimonial swiper-slide">
      <div class="avatar">
          <img src="./images/avatar3.jpg">
      </div>
      <div class="testimonial_info">
          <h5>Edem Quist</h5>
          <small>Student</small>
      </div>
      <div class="tetimonial_body">
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio possimus magnam, eos vitae quisquam cum. Fugiat, porro. Voluptate cumque delectus eos beatae aliquam, ipsam architecto explicabo excepturi saepe amet ex?
          </p>
      </div>
  </article>

  <article class="testimonial swiper-slide">
      <div class="avatar">
          <img src="./images/avatar4.jpg">
      </div>
      <div class="testimonial_info">
          <h5>Hajia Bintu</h5>
          <small>Student</small>
      </div>
      <div class="tetimonial_body">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis tempora fuga veritatis sit, cum eos nesciunt quasi perspiciatis consectetur voluptatibus tempore inventore. Quo rerum, fuga aperiam aspernatur facere odit?
          </p>
      </div>
  </article>

  <article class="testimonial swiper-slide">
      <div class="avatar">
          <img src="./images/avatar5.jpg">
      </div>
      <div class="testimonial_info">
          <h5> Jane Doe</h5>
          <small>Student</small>
      </div>
      <div class="tetimonial_body">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque nisi nemo blanditiis quisquam quae! Ipsum exercitationem ratione, ipsam tempore, eius, temporibus hic nobis earum doloremque consequatur ea! Dolore, maxime?
          </p>
      </div>
  </article>

    </div>
    <div class="swiper-pagination"></div>
    </section> */}
  {/* ############################# End of Testimonials ##########################  */}
  {/* ############################# Start of Sponsers ##########################  */}
  <section className="sponser-section">
    <h2 className="heading">Our Sponsers</h2>
    <div className="sponsers">
      <img src="./images/about achievements.svg" alt="Sponsers Name" />
      <img src="./images/about achievements.svg" alt="Sponsers Name" />
    </div>
  </section>
  {/* ############################# End of the Sponsers ##########################  */}
  {/*###########################  MEMBERS  ###########################*/}
  <section className="team" id="mot">
    <h2>Meet Our Team</h2>
    <div className="container team_container">
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm1.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm2.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm3.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm4.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm5.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm6.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm7.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
      <article className="team_member">
        <div className="team_member-image">
          <img src="./images/tm8.jpg" />
        </div>
        <div className="team_member-info">
          <h4> ABCD </h4>
          <p>Except Tutor</p>
        </div>
        <div className="team_member-socials">
          <a href="#" target="_blank">
            <i className="uil uil-whatsapp" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="uil uil-instagram" />
          </a>
          <a href="#" target="_blank">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </article>
    </div>
  </section>
  {/*########################### END OF MEMBERS  ###########################*/}
  {/*================================== END OF Levels ======================*/}
  <section className="faqs" id="fq">
    <h2>Frequently Asked Questions</h2>
    <div className="container faqs_container">
      <article className="faq">
        <div className="faq_icon">
          <i className="uil uil-plus" />
        </div>
        <div className="question_answer">
          <h4>What?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur,
            libero temporibus iure repellat maxime aliquid deleniti perferendis
            ducimus ab.
          </p>
        </div>
      </article>
      <article className="faq">
        <div className="faq_icon">
          <i className="uil uil-plus" />
        </div>
        <div className="question_answer">
          <h4>What?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur,
            libero temporibus iure repellat maxime aliquid deleniti perferendis
            ducimus ab.
          </p>
        </div>
      </article>
      <article className="faq">
        <div className="faq_icon">
          <i className="uil uil-plus" />
        </div>
        <div className="question_answer">
          <h4>What?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur,
            libero temporibus iure repellat maxime aliquid deleniti perferendis
            ducimus ab.
          </p>
        </div>
      </article>
      <article className="faq">
        <div className="faq_icon">
          <i className="uil uil-plus" />
        </div>
        <div className="question_answer">
          <h4>What?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur,
            libero temporibus iure repellat maxime aliquid deleniti perferendis
            ducimus ab.
          </p>
        </div>
      </article>
      <article className="faq">
        <div className="faq_icon">
          <i className="uil uil-plus" />
        </div>
        <div className="question_answer">
          <h4>What?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur,
            libero temporibus iure repellat maxime aliquid deleniti perferendis
            ducimus ab.
          </p>
        </div>
      </article>
      <article className="faq">
        <div className="faq_icon">
          <i className="uil uil-plus" />
        </div>
        <div className="question_answer">
          <h4>What?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur,
            libero temporibus iure repellat maxime aliquid deleniti perferendis
            ducimus ab.
          </p>
        </div>
      </article>
    </div>
  </section>
  {/* ############################# End of the FAQ ##########################  */}
  {/*##########################  Footer Part  ##########################*/}
  <footer className="footer" id="footer">
    <div className="container footer_container">
      <div className="footer_1">
        <a href="index.html" className="footer_logo">
          <h4> Name </h4>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
          quasi.
        </p>
      </div>
      <div className="footer_2">
        <h4>Quick Links</h4>
        <ul className="permalinks">
          <li>
            <a href="index.html"> Home </a>
          </li>
          <li>
            <a href="about.html"> About </a>
          </li>
          <li>
            <a href="courses.html"> Courses </a>
          </li>
          <li>
            <a href="contact.html"> Contact </a>
          </li>
        </ul>
      </div>
      <div className="footer_3">
        <h4>Our Sponsers</h4>
        <ul className="privacy">
          <li>
            <a href="index.html"> Home </a>
          </li>
          <li>
            <a href="about.html"> About </a>
          </li>
          <li>
            <a href="courses.html"> Courses </a>
          </li>
          <li>
            <a href="contact.html"> Contact </a>
          </li>
        </ul>
      </div>
      <div className="footer_4">
        <div className="contact">
          <h4>Contact Us</h4>
          <div>
            <p>+01 23456789</p>
            <p>abcdefgh@gmail.com</p>
          </div>
          <ul className="footer_socials">
            <li>
              <a herf="#">
                <i className="uil uil-facebook-f" />
              </a>
            </li>
            <li>
              <a herf="#">
                <i className="uil uil-instagram-alt" />
              </a>
            </li>
            <li>
              <a herf="#">
                <i className="uil uil-twitter" />
              </a>
            </li>
            <li>
              <a herf="#">
                <i className="uil uil-linkedin-alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer_copyright">
      <small>
        Insignia 2k23 | Made by the CSE-DS &amp; CSE Students of MCKVIE
      </small>
    </div>
  </footer>
  {/*##########################  Footer Part  ##########################*/}

  <Script>
        document.addEventListener('DOMContentLoaded',()=>{
            let timer_ = 1694772000//unix timestamp
            let flipdown = new FlipDown(timer_)
            .start()
            .ifEnded(()=>{
                document.querySelector(".flipdown").innerHTML = `<h2> Timer is ended </h2>`
            })
        })
    </Script>


    <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></Script>
    <Script src="./js/main.js"></Script>
</>

  )
}

export default App;