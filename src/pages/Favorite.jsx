import FavoriteCard from '../components/FavoriteCard/FavoriteCard'
import './page-CSS/Favorite.scss'
export default function Favorite() {
  return (
    <div className='favorite-container'>
      <div className='fav-heading'>
        <h2>Favorites</h2>
        <p>{`(20 items)`}</p>
      </div>
      <div className='fav-card-wrapper'>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>
      </div>
    </div>
  )
}
