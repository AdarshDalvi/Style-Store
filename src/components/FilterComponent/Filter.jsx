import './Filter.scss'

export default function Filter({ filters, handleOnChange }) {

  let defaultFilters = { ...filters }
  for (let key in defaultFilters) {
    if (key === 'category' && defaultFilters[key] === '') {
      defaultFilters[key] = '3'
    }
  }

  return (
    <div className='other-filters'>
      <div className='input-item'>
        <h3>Categories</h3>
        <input
          type="radio"
          id="all"
          name="category"
          value='3'
          checked={defaultFilters.category === '3'}
          onChange={handleOnChange}
        />
        <label htmlFor="all"> All </label>
        <br />
        <input
          type="radio"
          id="jordan"
          name="category"
          value='4'
          checked={defaultFilters.category === '4'}
          onChange={handleOnChange}
        />
        <label htmlFor="jordan"> Jordan</label>
        <br />
        <input
          type="radio"
          id="sneakers"
          name="category"
          value='5'
          checked={defaultFilters.category === '5'}
          onChange={handleOnChange}
        />
        <label htmlFor="sneakers"> Sneakers</label>
        <br />
        <input
          type="radio"
          id="running"
          name="category"
          value='6'
          checked={defaultFilters.category === "6"}
          onChange={handleOnChange}
        />
        <label htmlFor="running"> Running shoes</label>
      </div>

      <div className="input-item">
        <h3>Sort By</h3>
        <input
          id='lowest'
          type="radio"
          value='asc'
          name='sort'
          checked={defaultFilters.sort === 'asc'}
          onChange={handleOnChange}
        />
        <label htmlFor="lowest">Price(Lowest First)</label>
        <br />
        <input
          id='highest'
          type="radio"
          value='desc'
          name='sort'
          checked={defaultFilters.sort === 'desc'}
          onChange={handleOnChange}
        />
        <label htmlFor="highest">Price(Highest First)</label>
      </div>
    </div>
  )
}
