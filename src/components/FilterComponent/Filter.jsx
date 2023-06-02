import './Filter.scss'

export default function Filter({filters, handleOnChange}) {
  return (
    <div className='other-filters'>
      <div className='input-item'>
        <h3>Categories</h3>
        <input 
          type="radio"
          id="all"
          name="category"
          value="0"
          checked={filters.category === "0"}
          onChange={handleOnChange}
        />
        <label htmlFor="all"> All </label>
        <br />
        <input 
          type="radio"
          id="men"
          name="category"
          value="1"
          checked={filters.category === "1"}
          onChange={handleOnChange}
        />
        <label htmlFor="men"> Men </label>
        <br />
        <input 
          type="radio"
          id="women"
          name="category"
          value="2"
          checked={filters.category === "2"}
          onChange={handleOnChange}
        />
        <label htmlFor="women"> Women</label>
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
