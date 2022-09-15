import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css"

const SearchBar = () => {
    const [posts, setPosts] = useState('');
    const [postData, setPostData] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const fetchPosts = () => {
        fetch('/api/posts/')
            .then(response => response.json())
            .then(data => setPosts(data))
    }

    useEffect(() => {
        fetchPosts()
    }, []);



    const handleChange = (searchWord) => {
        if (searchWord) {
            const searchPostResults = posts.filter(post => post.title.toLowerCase().includes(searchWord.toLowerCase()))

            setPostData(searchPostResults);
            setDropdown(true);
            setSearchInput(searchWord)
        } else {
            setSearchInput(searchWord)
            setDropdown(false)
        }
    }


    const clickResult = () => {
        setDropdown(false);
        setSearchInput('');
    }

    return (
        <div className="search-bar">
            {dropdown &&
                <div className="search-dropdown-cancel" onClick={() => clickResult()}></div>
            }
            <div className="search-field">
                <input
                    placeholder="Search Post Title"
                    onChange={(e) => handleChange(e.target.value)}
                    value={searchInput}
                >
                </input>
            </div>
            <div className={dropdown ? "search-results" : "search-none"}>
                {
                    dropdown && (postData.length) ? (
                        <>
                            {postData &&
                                postData.map(post => (
                                    <div key={post.id} className="search-user">
                                        <Link onClick={() => clickResult()} to={`/posts/${post.id}`} >
                                            <div className="search-post-info">
                                                <div className="search-posttitle">
                                                    {post.title}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </>
                    )
                        :
                        (<div className={dropdown ? "no-show" : "no-hide"} id="no-results">No results found.</div>)
                }

            </div>

        </div>
    )
}
export default SearchBar;
