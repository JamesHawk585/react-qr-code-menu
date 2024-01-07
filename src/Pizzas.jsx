const Pizzas = () => {
    return (
      <section id="pizzas">
        <h2>Pizzas</h2>
        <ul>
          <li>
            <img
              src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
              width="300" />
            <p>Cheese</p>
            <AddToOrderButton />
          </li>
          <li>
            <img src="https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg" width="300" />
            <p>Pepperoni</p>
            <AddToOrderButton />
          </li>
          <li>
            <img
              src="https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg"
              width="300" />
            <p>Hawaiian</p>
            <AddToOrderButton />
          </li>
        </ul>
      </section>
    )
  }