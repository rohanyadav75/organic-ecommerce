import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Shopsearch from '../component/shop/shopsearch'
import Categoryfilter from '../component/shop/categoryfilter'
import products from '../data/Shop/data'
import Pagination from '../component/shop/pagination'
import Productcard from '../component/common/Productcard'

const maxPrice = Math.max(...products.map((product) => product.price))

const Shop = ({ wishlist = [], toggleWishlist = () => { } }) => {
  const location = useLocation()

  // Search
  const [search, setSearch] = useState("")

  // Category
  const [category, setCategory] = useState("All")

  // Ingredient
  const [ingredient, setIngredient] = useState("All")

  useEffect(() => {
    if (location.state?.ingredient) {
      setIngredient(location.state.ingredient)
    } else {
      setIngredient("All")
    }
  }, [location.state])

  // Skintype
  const [skintypes, setSkintypes] = useState("All")

  // Price
  const [price, setPrice] = useState(maxPrice)

  // Pagination
  const [page, setPage] = useState(1)
  const productsPerPage = 6

  const filteredProducts = products.filter((product) =>
    (
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
    )
    &&
    (
      category === "All" ||
      product.category === category
    )
    &&
    (
      ingredient === "All" ||
      product.mainIngredient.includes(ingredient)
    )
    &&
    (
      skintypes === "All" ||
      product.skinType.includes(skintypes)
    )
    &&
    (
      product.price <= price
    )
  )

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (page - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  return (
    <div>

      <div className='relative gap-5 grid grid-cols-12 mt-20'>

        {/* Filter */}
        <div className='col-span-3  '>
          <div
            className='bg-primary/12 sticky top-24 h-[500px] overflow-y-auto rounded-md border border-secondary/30 p-5'
            style={{ alignSelf: 'start' }}
          >
            <Categoryfilter
              category={category}
              setCategory={setCategory}
              ingredient={ingredient}
              setIngredient={setIngredient}
              skintypes={skintypes}
              setSkintypes={setSkintypes}
              price={price}
              setPrice={setPrice}
              maxPrice={maxPrice}

            />

          </div>
        </div>


        {/* Products */}
        <div className="col-span-9 px-5">
          <div className="mb">
            <Shopsearch
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              ingredient={ingredient}
              setIngredient={setIngredient}
              skintypes={skintypes}
              setSkintypes={setSkintypes}
            />
          </div>

          <div className="gap-5 grid md:grid-cols-3 mt-0">
            {currentProducts.map((product) => (
              <Productcard {...product} wishlist={wishlist} toggleWishlist={toggleWishlist} />
            ))}

            <div className='col-span-full'>
              <Pagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Shop