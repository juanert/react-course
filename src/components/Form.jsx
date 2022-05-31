function Form() {
    return (
        <form>
            <label>Enter your name:</label>
            <input
                type="text"
                onChange={(e) => {console.log(e.target.value)}}
            />
        </form>
    )
}

export default Form;