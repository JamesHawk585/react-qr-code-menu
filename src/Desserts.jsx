const Desserts = () => {
    return (
      <section id="desserts">
        <h2>Desserts</h2>
        <ul>
          <li>
            <img
              src="https://static01.nyt.com/images/2021/11/02/dining/dg-Tall-and-Creamy-Cheesecake/dg-Tall-and-Creamy-Cheesecake-threeByTwoMediumAt2X.jpg"
              width="300" />
            <p>Cheesecake</p>
            <button>Add to order</button>
          </li>
          <li>
            <img
              src="https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"
              width="300" />
            <p>Ice Cream</p>
            <AddToOrderButton />
          </li>
        </ul>
      </section>
    )
  }