import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getallBlogs } from '../../actions/blogActions'
import { getSearchData } from '../../actions/utilsAction'
import { Product } from '../../components';
import { BlogCardforsearch, RingLoader } from '../../components'
import "./Searchpage.css"

const SearchPage = () => {
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.searchKeyword);
    const productState = useSelector(state => state.getallProducts);
    const blogState = useSelector(state => state.getallBlogs);
    const { products } = productState;
    const { blogs } = blogState;
    let keywordArray = window.location.pathname.split('/')
    let keyword = keywordArray[keywordArray.length - 1]
    const checkResult = () => {
        if (searchState.results === null) {
            dispatch(getSearchData(keyword));
        }
    }
    useEffect(() => {
        dispatch(getallBlogs());
        checkResult();
    }, []); // eslint-disable-line
    return (
        <div className='searchpage'>
            {searchState.loading === true ?
                <RingLoader />
                :
                <>
                    {searchState.results.blogResult.length === 0 && searchState.results.productResult.length === 0 ?
                        <div className='results'>
                            <h3>No result found related to '{keyword}'</h3>
                        </div>
                        : ""}
                    {searchState.results.productResult.length !== 0
                        ? <div className='productRes'>
                            <h1>Item related to '{keyword}'</h1>
                            <hr />
                            <section className='itemgallery'>
                                {searchState.results.productResult.map(((product, index) =>
                                    <Product key={index} product={product} />
                                ))}
                            </section>
                        </div>
                        : ""}
                    {searchState.results.blogResult.length !== 0
                        ? <div className='blogRes'>
                            <h1>Blog related '{keyword}'</h1>
                            <hr />
                            <div>
                                {searchState.results.blogResult.map((item, index) => {
                                    return <BlogCardforsearch key={index} data={item} />
                                })}
                            </div>
                        </div>
                        : ""}
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
                                blogs.slice(0, 4).map((item, index) => {
                                    return <BlogCardforsearch key={index} data={item} />
                                })
                                : ""}
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default SearchPage