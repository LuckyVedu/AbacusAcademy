import './About.css';
const AdminProfile = props => {
    const {adminData} = props;
    const {email, password, mobileNumber, userRole} = adminData;
    return(
                <tr>
                <td>{email}</td>
                <td>{password}</td> 
                <td>{mobileNumber}</td>
                <td>{userRole}</td>
                </tr>
    )
}

export default AdminProfile