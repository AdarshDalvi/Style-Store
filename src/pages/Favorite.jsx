import { useSelector } from 'react-redux'
import FavoriteCard from '../components/FavoriteCard/FavoriteCard'
import './page-CSS/Favorite.scss'
import { NavLink } from 'react-router-dom'
export default function Favorite() {

  const { favorites } = useSelector(state => state.favorite)

  return (
    favorites.length > 0 ?
      <div className='favorite-container'>
        <div className='fav-heading'>
          <h2>Wishlist {favorites.length > 0 && `(${favorites.length} item${favorites.length === 1 ? '' : 's'})`}</h2>
        </div>
        <div className='fav-card-wrapper'>
          {
            favorites.map((item) => <FavoriteCard key={item.id} item={item} />)
          }
        </div>
      </div> :
      <div className='empty-container'>
        <div className='empty-wishlist'>
          <h3>Your wishlist is empty</h3>
          <p>Add items that you like to your wishlist. Review them anytime and easily move them to the cart.</p>
          <img src="/general/wishlist.png" alt="" />
          <NavLink to='/products/1'> <button>Continue Shopping</button> </NavLink>
        </div>
      </div>
  )
}
