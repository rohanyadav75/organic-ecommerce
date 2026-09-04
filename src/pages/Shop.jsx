import React, { useState } from 'react'
import Shopsearch from '../component/shop/shopsearch'
import Categoryfilter from '../component/shop/categoryfilter'
import Pricefilter from '../component/shop/pricefilter'
import products from '../data/product'
import Pagination from '../component/shop/pagination'
import Productcard from '../component/common/Productcard'

const maxPrice = Math.max(...products.map((product) => product.price))

const Shop = () => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [price, setPrice] = useState(maxPrice)

  // Pagination
  const [page, setPage] = useState(1)

  const productsPerPage = 6


  const filteredProductcard = products.filter((product) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)

    const matchesCategory =
      category === "All" ||
      product.category === category

    const matchesPrice = product.price <= price

    return matchesSearch && matchesCategory && matchesPrice
  })

  // Pagination calculation
  const startIndex = (page - 1) * productsPerPage

  const currentProducts = filteredProductcard.slice(
    startIndex,
    startIndex + productsPerPage
  )

  const totalPages = Math.ceil(
    filteredProductcard.length / productsPerPage
  )

  return (
    <div>

      <div className='gap-15 grid grid-cols-12 p-20'>
        <div className='col-span-2'>
          <Categoryfilter category={category} setCategory={setCategory} />
          <Pricefilter price={price} setPrice={setPrice} maxPrice={maxPrice} />
        </div>

        <div className="p-5 gap-5 grid md:grid-cols-3 col-span-10">
          <Shopsearch search={search} setSearch={setSearch} />

          {currentProducts.map((product) => (

            <Productcard
              key={product.id}
              {...product}
            />

          ))}

        </div>
        <div className=" col-span-10 justify-evenly w-[100]">
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
}

export default Shop
