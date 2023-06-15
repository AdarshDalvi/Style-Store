import { useEffect, useState } from 'react'
import './page-CSS/Shop.scss'
import {BsSearch} from 'react-icons/bs'
import {MdOutlineClear} from 'react-icons/md'
import {FaFilter} from 'react-icons/fa'
import ProductList from '../components/ProductList/ProductList'
import Filter from '../components/FilterComponent/Filter'
import DialogModal from '../components/DialogModal/DialogModal'
import isEqual from 'lodash/isEqual';
import { getAllProducts } from '../utils/api'
import Skeleton from '../components/Skeleton/Skeleton'
import SomethingWentWrong from '../components/SomethingWentWrong/SomethingWentWrong'
import { useParams } from 'react-router-dom'

export default function Shop() {

  const {categoryId} = useParams()

  const [filters, setFilters ] = useState({
    category: '',
    sort: ''
  })
  let compare = {
    category: '',
    sort: '',
  }

  const categoryImages= [
    '/slider/slide-4.png',
    '/slider/slide-1.png',
    '/slider/slide-2.jpg',
    '/slider/slide-3.png',
  ]

  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [searchText,setSearchText] = useState('')
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [categoryIndex,setCategoryIndex ] = useState(null)

  useEffect(()=>{
    function watchWidth(){
      setWindowWidth(prevWidth=> window.innerWidth)
      if(window.innerWidth>850){
        setIsModalOpen(false)
      }
    }
    window.addEventListener('resize',watchWidth)
    if(categoryId!==''|| categoryId === undefined || categoryId == null){
      getData(categoryId)
    }else{
      getData('6')
    }
    setCategoryImageIndex(categoryId)

    return ()=>{
      window.removeEventListener('resize',watchWidth)
    }
  },[])


  const getData = async(category, sort='', searchQuery='')=>{
    if(category===''){
      category='6'
    }
    try{
      setLoading(true)
      let url = `/products?populate=*&filters[categories][id][$eq]=${parseInt(category)}`;
      
      if (sort) {
        url += `&sort=price:${sort}`;
      }

      if(searchQuery){
        url += `&filters[name][$containsi]=${searchQuery}`
      }

      const {data} = await getAllProducts(url);
      setProductData(prevData=> data)
      setLoading(false)
    }catch(e){
      setLoading(false)
      console.log(e.message)
    }
  }

  const setCategoryImageIndex = (categoryId) =>{
    if(categoryId==='6'){
      setCategoryIndex(0)
    }else if(categoryId==='1'){
      setCategoryIndex(1)
    }else if(categoryId==='5'){
      setCategoryIndex(2)
    }else if(categoryId==='3'){
      setCategoryIndex(3)
    }
  }
  
  function handleOnChange(event) {
    const {name, value} = event.target
    setFilters(prevFilters=> {
      return {
        ...prevFilters,
        [name] : value
      }
    })
  }

  function closeModal(){
    if(!isEqual(compare,filters)){
      setFilters(prevFilters=> compare)
      getData(compare.category, compare.sort, searchText)
      setCategoryImageIndex('6')
    }
    setIsModalOpen(false)
  }

  function applyFilters(){
    setIsModalOpen(false)
    getData(filters.category,filters.sort, searchText)
    setCategoryImageIndex(filters.category)
  }

  let show = isEqual(compare,filters) 

  const clearSearch = ()=>{
    getData(filters.category, filters.sort, '')
    setSearchText('')
  }
  
  return (
    <div className='shop-container'>
      <div className='filters-container'>
        <div className="search-container">
          <div className='search-box-wrapper'>
            <input name='searchText' value={searchText} onChange={(e)=> setSearchText(prevValue=> e.target.value)} className='search-box' type="text" placeholder='Search'/>
            {searchText!=='' && <MdOutlineClear className='clear-search' onClick={clearSearch}/>}
          </div>
          <button className='search-btn' onClick={()=> searchText!=='' && getData(filters.category,filters.sort,searchText)}>
            <BsSearch />
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
            <Filter 
              filters={filters} 
              handleOnChange={handleOnChange} 
            />
          </DialogModal>
        }
        {windowWidth>850 && <div className='desktop-filters'>
          <Filter
            filters={filters}
            handleOnChange={handleOnChange}
          />
          {!show && <div className='desktop-filter-actions'>
            <button onClick={closeModal}>Clear</button>
            <button onClick={applyFilters}>Apply</button>
          </div>}
        </div>}
      </div>
      <div className='products-container'>
        <div className='category-image'><img src={categoryImages[categoryIndex]} alt="category-image" /></div>
        {
          loading 
          ? <div className='list'> <Skeleton count={6} type='card'/> </div>
          : !loading && (productData == null || productData ===[])  
          ? <SomethingWentWrong buttonFunction={()=>getData({})}/>
          : <>
            <h3 style={{padding:'0 15px', marginTop:'1em'}}>{productData.length} Items</h3>
            <ProductList filteredData={productData}/>
          </>
        }
      </div>
    </div>
  )
}