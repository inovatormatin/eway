import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getallBlogs } from '../../actions/blogActions'
import { Product } from '../../components';
import { BlogCardforsearch } from '../../components'
import "./Searchpage.css"

const SearchPage = () => {
    const dispatch = useDispatch();
    const productState = useSelector(state => state.getallProducts);
    const blogState = useSelector(state => state.getallBlogs);
    const { products } = productState;
    const { blogs } = blogState;
    useEffect(() => {
        dispatch(getallBlogs());
    }, [dispatch]);
    return (
        <div className='searchpage'>
            <div className='results'>
                <h3>No result found</h3>
                <span>We are working on our search functionality.</span>
            </div>
            <div className="latestFashion">
                <h1>Our Latest Fashion</h1>
                <hr />
                {products !== null && products.length > 29 ?
                    <section className='itemgallery'>
                        {products.slice(24, 28).map(((product, index) =>
                            <Product key={index} product={product} />
                        ))}
                    </section>
                    : ""}
            </div>
            <div className='blogsSectionsearchpage'>
                <h1>Explore more</h1>
                <hr />
                <div>
                    {blogs !== null ?
                        blogs.slice(0, 3).map((item, index) => {
                            return <BlogCardforsearch key={index} data={item} />
                        })
                        : ""}
                </div>
            </div>
        </div>
    )
}

export default SearchPage