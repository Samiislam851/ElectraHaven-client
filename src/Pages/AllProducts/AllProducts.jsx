import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InverterCard from '../../Component/InverterCard/InverterCard';
import { AiOutlineSearch } from 'react-icons/ai';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
const [searchTrue, setSearchTrue] = useState(false);
const [ searchTextInput,  setSearchTextInput] = useState("");


    useEffect(() => {
        axios.get('/products').then(res => setProducts(res.data));
    }, []);

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault()

        console.log('Search text:', searchText);
  
        axios.get(`/search?searchTerm=${searchText}`).then(res => {
            setProducts(res.data);
            setSearchTrue(true);
            setSearchTextInput(searchText);
            event.target.reset();
        }
        )


    };








    return (


        <div className=''>

            <div className='my-16'>
                {/* Search Bar */}
                <div className="relative mx-auto max-w-md">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name='searchInput'
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Search..."
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            className="absolute right-0 top-0 mt-2 mr-2 "
                            type='submit'
                        >
                            <AiOutlineSearch className='inline text-2xl text-gray-500 hover:text-blue-400 transition-all ease-in-out duration-500' />
                        </button>
                    </form>
                </div>
            </div>
            <div className='max-w-[1500px] mx-auto px-12 my-16'>

                {searchTextInput==""? <>
                
                </>
                :
                <>
                {searchTrue&& <div className='text-lg text-gray-500 py-5 md:ps-10'>Showing Search results for  
                <span className='font-semibold'> {searchTextInput}</span> </div> }
                </> }



                <div className='grid md:grid-cols-4 grid-cols-1 gap-3 '>


                    {
                        products.map(data => <InverterCard data={data}></InverterCard>)
                    }
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
