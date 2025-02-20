import React, { useEffect, useState } from 'react'
import { data } from 'react-router';
import Bookcard from '../books/Bookcard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]


const TopSellers = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))   
    }, [])

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())



  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/* category filtering */}
        <div className='mb-8 flex items-center'>
            <select onChange={(e) => setSelectedCategory(e.target.value)} className='px-2 py-2 bg-gray-100 rounded ring-1 ring-gray-400' name="category" id="category">
                {
                    categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>

        <Swiper
        navigation={true}

        slidesPerView={1}
        spaceBetween={30}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }

        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >



            {
                filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                    <SwiperSlide key={index}>
                        <Bookcard book={book} />
                    </SwiperSlide>
                ))
            }
      </Swiper>


    </div>
  )
}


export default TopSellers