import './Filter.scss'

export default function Filter({filters, handleOnChange, setCategory, wrapperClass}) {
  return (
    <div className={wrapperClass}>
      <div className='input-item'>
        <h3>Categories</h3>
        <input 
            id='1' 
            type="radio" 
            value='All' 
            name='category'
            checked={filters.category === 'All'}
            onChange={handleOnChange}
        />
        <label htmlFor="1"> All </label>
        <br />
        <input 
            id='2' 
            type="radio" 
            value='Men' 
            name='category'
            checked={filters.category === 'Men'}
            onChange={handleOnChange}
        />
        <label htmlFor="2"> Men </label>
        <br />
        <input 
            id='3' 
            type="radio" 
            value='Women' 
            name='category'
            checked={filters.category === 'Women'}
            onChange={handleOnChange}
        />
        <label htmlFor="3"> Women</label>
      </div>
      
      <div className="input-item">
        <h3>Sort By</h3> 
        <input 
          id='lowest' 
          type="radio" 
          value='desc' 
          name='sort' 
          checked={filters.sort === 'desc'} 
          onChange={handleOnChange}
        />
        <label htmlFor="lowest">Price(Lowest First)</label>
        <br />
        <input 
          id='highest' 
          type="radio" 
          value='asc' 
          name='sort' 
          checked={filters.sort === 'asc'} 
          onChange={handleOnChange}
        />
        <label htmlFor="highest">Price(Highest First)</label>
      </div>
    </div>
  )
}
