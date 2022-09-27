import React, { Component } from 'react'
import GetInstitute from './GetInstitute'
import Header from '../../Component/Home/Nav'
import './ViewInstitute.css'


export class viewInstitute extends Component {
    
    state ={instituteData: [], role: '', isAddInst: "", search: ""}

    componentDidMount(){
        this.getInstituteData();
        this.setState({role: localStorage.getItem('userRole')});
    }

    // handleCallback(val){
    //     this.setState({isAddInst: val});
    // }

    //filter //
    onSreach = event => {
        this.setState({search: event.target.value})
    }
    //delete institite//
    // deleteInstitute = id => {
    //     const {instituteData} = this.state
    //     const serachResult = instituteData.filter(eachItem => 
    //         eachItem.id !== id)    
    //         this.setState({
    //             instituteData: serachResult
    //           })
    // }

    getInstituteData = async () =>{
        const response = await fetch("http://localhost:8081/admin/viewInstitute")
        const data = await response.json()
        const displayInstitute = data.map(eachItem => ({
            id: eachItem.instituteId,
            instituteName: eachItem.instituteName,
            instituteDescription: eachItem.instituteDescription,
            instituteAddress: eachItem.instituteAddress,
            mobile: eachItem.mobile,
            email: eachItem.email,
            imgUrl: eachItem.imgUrl,
        }))
        this.setState({instituteData:displayInstitute})

    }

    onDeleteInstitute = async (id, i) => {
        const {instituteData} = this.state;
        console.log("dasdsadasd", i);
         const options = {
             "method" : "DELETE",
            //  "Access-Control-Allow-Origin": "*"
        }
     const url = `http://localhost:8081/admin/deleteInstitute?instituteId=${id}`
    const response = await fetch(url, options)
    const data =  await response.json()
    console.log(data)
    if(data.statuscode === 200){
        instituteData.splice(i,1);
        this.setState({instituteData : instituteData});
        alert("Institute deleted")
    }



    }

    render() {
        const {instituteData, role, isAddInst, search} = this.state
        const serachResult = instituteData.filter(eachData => 
            eachData.instituteName.includes(search)
        )
        return (
        <div>
            <Header shouldShow={role !== 'Student' ? true : false} text={"Add Institute"} />
            <div>
                <input type='search'
                    onChange={this.onSreach}
                    value={search}                
                />
            </div>
            {!isAddInst ? 
                    <div className='institute-container'>
                    {serachResult.map((item, i) => <GetInstitute role={role} i={i} instituteData={item} key={item.id} 
                    onDeleteInstitute={this.onDeleteInstitute}/>)}
                </div> :
                <div>
                    <input type="text"></input>
                </div>
             }
        </div>
        )
    }
}

export default viewInstitute