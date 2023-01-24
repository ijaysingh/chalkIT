import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find a user'/>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>hello</p>
            </div>
        </div>
    </div>
  )
}

export default Search