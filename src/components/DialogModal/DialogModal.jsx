import { useEffect } from 'react'
import './DialogModal.scss'
import ReactDOM from 'react-dom'

export default function DialogModal({children,modalHeading,closeModal, applyFilters}) {

    useEffect(()=>{
        document.body.style.overflowY = 'hidden';

        return ()=>{
            document.body.style.overflowY = 'scroll';
        }
    },[])
    return ReactDOM.createPortal(
      <>  
          <div className='modal-overlay' onClick={closeModal}></div>
          <div className='modal-container'>
            <h2>{modalHeading}</h2>  
            <div className='modal-children'>
              {children}
            </div>
            <div className='btn-wrapper'>
                <button onClick={closeModal} className='clear-btn modal-btn'>Cancel</button>
                <button className='apply-btn modal-btn' onClick={applyFilters}>Apply</button>
            </div>
          </div>
      </>,
      document.getElementById('modal')
    )
}
