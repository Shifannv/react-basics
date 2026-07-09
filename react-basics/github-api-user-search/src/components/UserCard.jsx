
function UserCard({ user }) {

  return (
    <div className="card">

      <img
        src={user.avatar_url}
        alt={user.login}
        className="avatar"
      />

      <h2>{user.name || user.login}</h2>

      <h4>@{user.login}</h4>

      <p className="bio">
        {user.bio || "No bio available"}
      </p>

      <div className="details">

        <p>
          📍 {user.location || "Not Available"}
        </p>

        <p>
          🏢 {user.company || "Not Available"}
        </p>

      </div>

      <div className="stats">

        <div>
          <h3>{user.followers}</h3>
          <span>Followers</span>
        </div>

        <div>
          <h3>{user.following}</h3>
          <span>Following</span>
        </div>

        <div>
          <h3>{user.public_repos}</h3>
          <span>Repos</span>
        </div>

      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <button className="profile-btn">
          Visit GitHub Profile
        </button>
      </a>

    </div>
  );
}

export default UserCard;