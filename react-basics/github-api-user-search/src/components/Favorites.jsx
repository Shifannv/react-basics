    function Favorites({
  favorites,
  onSelect,
}) {
  return (

    <div className="favorites">

      <h3>⭐ Favorite Users</h3>

      {
        favorites.length === 0 ?

        (
          <p>No Favorites</p>
        )

        :

        favorites.map((user)=>(

          <button

          key={user.login}

          onClick={()=>onSelect(user.login)}

          >

          {user.login}

          </button>

        ))

      }

    </div>

  );
}

export default Favorites;