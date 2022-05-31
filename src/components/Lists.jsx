function Lists() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((auto, index) => <li>{(index+1)+' '+auto}</li>)}
            </ul>
        </>
    );
}

export default Lists;