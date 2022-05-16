function GifSearch(props){

    
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.query(props.search)
            }
                }>
                <label htmlFor="searchInput">Enter a Search Term </label>
                <input type="text" className="form-control" id="searchInput" value = {props.search} onChange= {(e) => {
                    props.handleSearch(e.target.value)
                }}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default GifSearch
