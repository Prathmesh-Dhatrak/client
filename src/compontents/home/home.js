import React from 'react'
import "./style.css"

export default function Home() {
    return (
        <div>
            {/* ======================== header section start ======================== */}

      <section className="header_section">
        <div className="row">
            <div className="col-lg-6" id="title">
            <h1 class="title_h1">Clothes that talks<br/> on behalf of you</h1>
				<h2 class="title_h2">Latest Style, Inexpensive rates</h2>
				<a href="#"><button type="button" class="shop">SHOP NOW<i class="fas fa-shopping-cart"></i></button></a>
            </div>
            <div className="col-lg-6" id="modal_Ellipse">
                <img class="Ellipse" src={require ('./imgs/Ellipse.png').default} />
				<img class="man"  src={require ('./imgs/modal.png').default} />
            </div>
        </div>
      </section>

      {/* ======================== header section end ========================  */}

  {/* ======================== Category section start ======================== */}

  <section className="Category">
        <h1 class="title_h2">Category</h1>
        <div className="row" id="list">
          <div className="col" id="hot" >
            <a href="">
              <img class="black_ellipse" src={require ('./imgs/Ellipse.png').default} />
            </a>
            <a href="">
              <img class="heat" src={require ('./imgs/heat.png').default} />
            </a>
            <p class="heat_p">Trendy</p>
          </div>

          <div className="col">
            <a href="">
              <img class="black_ellipse" src={require ('./imgs/Ellipse.png').default} />
            </a>
            <a href="">
              <img class="oversize" src={require ('./imgs/oversize.png').default} />
            </a>
            <p class="oversize_p">Oversized Tshirt</p>
          </div>
          <div className="col">
            <a href="">
              <img class="black_ellipse" src={require ('./imgs/Ellipse.png').default} />
            </a>
            <a href="">
              <img class="shirt" src={require ('./imgs/shirt.png').default} />
            </a>
            <p class="shirt_p">PullOver Tshirt</p>
          </div>
          <div className="col">
            <a href="">
              <img class="black_ellipse" src={require ('./imgs/Ellipse.png').default} />
            </a>
            <a href="">
              <img class="tshirt" src= {require ('./imgs/tshirt.png').default} />
            </a>
            <p class="tshirt_p">Sweat Tshirt</p>
          </div>
          <div className="col">
            <a href="">
              <img class="black_ellipse" src={require ('./imgs/Ellipse.png').default} />
            </a>
            <a href="">
              <img class="hoodie" src= {require ('./imgs/hoodie.png').default} />
            </a>
            <p class="hoodie_p">Hoodie Tshirt</p>
          </div>
          <div className="col">
            <a href="">
              <img class="black_ellipse" src={require ('./imgs/Ellipse.png').default} />
            </a>
            <a href="">
              <img class="mask" src= {require ('./imgs/mask.png').default}  />
            </a>
            <p class="mask_p">Mask</p>
          </div>
          <div className="col">
            <a href="">
              <img class="black_ellipse" src={require ('./imgs/Ellipse.png').default} />
            </a>
            <a href="">
              <img class="bottle" src= {require ('./imgs/bottle.png').default}  />
            </a>
            <p class="bottle_p">Bottle</p>
          </div>
        </div>

        <div className="row" id="products">
          <div className="col-lg-auto product">
            <img className="prod_1 image" src={require ('./imgs/prod_1.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3> 
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="col-lg-auto  product">
            <img className="prod_2 image" src={require ('./imgs/prod_2.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3>
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-auto  product">
            <img className="prod_3 image" src={require ('./imgs/prod_3.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3>
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-auto  product">
            <img className="prod_4 image" src={require ('./imgs/prod_4.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3>
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-auto  product">
            <img className="prod_2 image" src={require ('./imgs/prod_2.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3>
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-auto  product">
            <img className="prod_5 image" src={require ('./imgs/prod_5.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3>
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-auto  product">
            <img className="prod_6 image" src={require ('./imgs/prod_6.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3>
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-auto  product">
            <img className="prod_7 image" src={require ('./imgs/prod_7.png').default} />
            <div className="demo">
              <h3 class="name">Sweat Tshirt </h3>
              <a href="">
                <button type="button" class="btn btn-primary" id="add">
                  Add to cart<i class="fas fa-shopping-cart"></i>
                </button>
              </a>
              <a href="">
                <button type="button" class="btn btn-light" id="add">
                  <i class="fas fa-heart"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== Category section end ========================  */}

       {/* ======================== scroll producrt section start ======================== */}

       <section className="scroll_producrt">
        <div class="row product_1">
          <div class="col-lg-6 ">
            <h3>FEW LEFT</h3>
            <h1 class="product_1_h1">
              SPECIAL IN <br />
              BLACK
            </h1>
            <a href="home.html">
              <button type="button" class="shop">
                SHOP NOW<i class="fas fa-shopping-cart"></i>
              </button>
            </a>
            <h3 class="product_1_p">HURRY UP - GRAB THE SPECIAL T-SHIRT </h3>
          </div>

          <div class="col-lg-6 img_2m">
            <img class="two_M" src={require ('./imgs/2M.png').default} />
          </div>
        </div>

        <div class="row product_1">
          <div class="col-lg-6 ">
            <h3>FEW LEFT</h3>
            <h1 class="product_1_h1">
              SPECIAL IN <br />
              BLACK
            </h1>
            <a href="home.html">
              <button type="button" class="shop">
                SHOP NOW<i class="fas fa-shopping-cart"></i>
              </button>
            </a>
            <h3 class="product_1_p">HURRY UP - GRAB THE SPECIAL T-SHIRT </h3>
          </div>

          <div class="col-lg-6 img_2m">
            <img class="two_M" src={require ('./imgs/2M.png').default} />
          </div>
        </div>
      </section>

      {/* ======================== scroll producrt section end ======================== */}



     {/* ======================== Discover the new you section start ======================== */}

     <section class="Discover_you">
        <h1 class="Discover_you_h1">Discover the new you.</h1>

        <div class="row modals">
          <div class="col-lg-6 modal2">
            <img class="modal_img" src={require ('./imgs/modal2.jpg').default} />
          </div>

          <div class="col-lg-6 modal2">
            <img class="modal_img" src={require ('./imgs/modal3.jpg').default} />
          </div>
        </div>
      </section>

      {/* ======================== Discover the new you section end ======================== */}

      {/* ======================== Video section start ======================== */}

      <section class="video">
        <iframe
          width="100%"
          height="680px"
          src="https://www.youtube.com/embed/Q9bsSQgBanc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

      {/* ======================== Video section end ======================== */}

      {/* ======================== Look Different section start ======================== */}

      <section class="Look_Different">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
          data-interval="1500"
          data-pause="hover"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="slide_modals" src={require ('./imgs/modal4.jpg').default} />

              <img class="slide_modals" src={require ('./imgs/modal5.jpg').default} />

              <img class="slide_modals" src={require ('./imgs/modal6.jpg').default} />
            </div>

            <div class="carousel-item">
              <img class="slide_modals" src={require ('./imgs/modal6.jpg').default} />

              <img class="slide_modals" src={require ('./imgs/modal5.jpg').default} />

              <img class="slide_modals" src={require ('./imgs/modal4.jpg').default} />
            </div>

            {/* <div class="carousel-item">

      				<img class="temp-img" src="img/prod_1.png" />

       				<img class="temp-img" src="img/prod_2.png" />

        			<img class="temp-img" src="img/prod_3.png" />

    			</div>  */}
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <h1 class="Look_Different_h1">Look Different</h1>
      </section>

      {/* ======================== Look Different section end ======================== */}

        </div>
    )
}

