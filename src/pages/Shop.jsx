import { useEffect, useState } from 'react'
import './page-CSS/Shop.scss'
import {BsSearch} from 'react-icons/bs'
import {MdOutlineClear} from 'react-icons/md'
import {FaFilter} from 'react-icons/fa'
import ProductList from '../components/ProductList/ProductList'
import Filter from '../components/FilterComponent/Filter'
import DialogModal from '../components/DialogModal/DialogModal'
import isEqual from 'lodash/isEqual';

export default function Shop() {

  const [filters , setFilters ] = useState({
    category: 'All',
    sort: '',
  })

  const [searchText,setSearchText] = useState('')

  let compare = {
    category: 'All',
    sort: '',
  }

  const [tempfilters , setTempFilters ] = useState({
    category: 'All',
    sort: '',
  })

  const [isModalOpen,setIsModalOpen] = useState(false)
  
  function handleOnChange(event) {
    const {name, value} = event.target
    setTempFilters(prevTempFilters=> {
      return {
        ...prevTempFilters,
        [name] : value
      }
    })
  }

  function setCategory(value){
    setTempFilters(prevTempFilters=>({
      ...prevTempFilters,
      category: value
    }))
  }

  function closeModal(){
    setTempFilters(prevFilters=> compare)
    setIsModalOpen(false)
  }

  function applyFilters(){
    setFilters(prevFilters=> tempfilters)
    setIsModalOpen(false)
  }

  useEffect(()=>{
    function watchWidth(){
      if(window.innerWidth>850){
        setIsModalOpen(false)
      }
    }

    window.addEventListener('resize',watchWidth)

    return ()=>{
      window.removeEventListener('resize',watchWidth)
    }
  })

  let show = isEqual(compare,tempfilters) 

  return (
    <div className='shop-container'>
      <div className='filters'>
          <div className='search-container'>
            <div className='search-box-wrapper'>
              <input 
                className='search-box' 
                onChange={handleOnChange} 
                type="text" 
                placeholder='Search' 
                name='searchText' 
                value={searchText}
              />
              {searchText.length>0 && <MdOutlineClear className='clear-button' onClick={()=>setSearchText(prevText=>'')}/>}
            </div>
            <button className='search-btn'>
              <BsSearch color='white'/>
            </button>
          </div>
          <button className='filter-btn' onClick={()=>setIsModalOpen(true)}>
            <span>Filters </span>
            <span><FaFilter className='filter-icon'/></span>
          </button>
          {isModalOpen&&
            <DialogModal 
              modalHeading='Filters' 
              closeModal={closeModal}
              applyFilters={applyFilters}
              >
              <Filter filters={tempfilters} handleOnChange={handleOnChange} setCategory={setCategory} wrapperClass='mobile-filters'/>
            </DialogModal>
          }
          <Filter 
            filters={tempfilters} 
            handleOnChange={handleOnChange} 
            setCategory={setCategory} 
            wrapperClass='other-filters'
          />
          {!show && <div className="btn-wrapper">
            <button className="clear-btn" onClick={()=>setTempFilters(prevFilters=> compare)}>Clear</button>
            <button className="apply-btn" onClick={applyFilters}>Apply</button>
          </div>}
      </div>
      <div className='products'>
        <img src="/product-page/banner-image.jpg" alt="Banner Image" />
        <ProductList filters={filters}/>
      </div>
    </div>
  )
}
