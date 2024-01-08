import AddToOrderButton from "./AddOrderButton"

const Starters = () => {
    return (
      <section id="starters">
        <h2>Starters</h2>
        <ul>
          <li>
            <img
              src="https://www.thespruceeats.com/thmb/IzI21XI-Gg07LQnFEu57xYVnA7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spinach-and-artichoke-dip-4157518-07-8685813570f34ac89c090084c042266d.jpg"
              width="300" />
            <p>Artichoke Dip</p>
            <AddToOrderButton />
          </li>
          <li>
            <img src="https://www.mypricechopper.com/Frontend/Media/Recipes/BakedChickenWings_Web_1110x625.jpg"
              width="300" />
            <p>Wings</p>
            <AddToOrderButton />
          </li>
          <li>
            <img src="https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-superJumbo.jpg"
              width="300" />
            <p>Garlic Bread</p>
            <AddToOrderButton />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg"
              width="300" />
            <p>Salad</p>
            <AddToOrderButton />
          </li>
        </ul>
      </section>
    )
  }

  export default Starters 