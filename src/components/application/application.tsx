const Application = () => {
    return (
        <>
        <h1> Job application form </h1>
        <h2>Section 1</h2>
        <form>
            <div>
                <label htmlFor="name"> Name </label>
                <input type ="text" id="name" name = "name"/>
            </div>

            
            <div>
                <label htmlFor="bio"> Bio: </label>
                <textarea id="bio"/>
            </div>

            <div>
                <label htmlFor="job-location">Job Location: </label>
                <select id ="job-location">
                        <option value = ""> Select a Country</option>
                        <option value = "US"> United State </option>
                        <option value = "GB"> United Kingdom </option>
                        <option value = "CA"> Canada </option>
                        <option value = "IN"> India </option>
                </select>
            </div>

            <div>
                <label>
                    <input type="checkbox" name="term" id="terms" /> I Agree to the terms and conditions
                </label>
            </div>
            <button type ="submit"> Submit </button>
        </form>
        </>
    )
}

export default Application;