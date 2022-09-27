
const GetInstituteData = async (ip) => {
    const response = await fetch("http://localhost:8081/admin/viewInstitute")
    const data = await response.json();
    return data
}
export default GetInstituteData;