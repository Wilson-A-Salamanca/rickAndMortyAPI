function Search({onChange}){

    return (
        <>
            <input type = "text" onChange={(e) => {onChange(e.target.value)}}></input>
        </>
    )
};

export default Search;