import React, { Component } from 'react';
import axios from 'axios';


class Book_now extends Component {
    constructor(props) {
        super(props)
        this.state = {
            applicant_full_name: '',
            father_name:''
        }
        this.onChangeApplicantFullName = this.onChangeApplicantFullName.bind(this);
        this.onChangeApplicantFatherName = this.onChangeApplicantFatherName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }


    onChangeApplicantFullName(e) {
        this.setState({ applicant_full_name: e.target.value })
    }

    onChangeApplicantFatherName(e) {
        this.setState({ father_name: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            applicant_full_name: this.state.applicant_full_name,
            father_name: this.state.father_name
        };
        // GET Method
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        });
       // console.log(userObject)
        axios.post('http://localhost/smarthr/public/api/save-booking', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
        });

        this.setState({ 
            applicant_full_name: '', 
            father_name: '' 
        })
    }
    
    render() {
        return (
            <section id="call-section ">
                <div class="container">
                    <div class="row">
                            <div class="col-md-12 my-5">
                                <h3 style={{backgroundColor:'#99CC33', color:'white'}}>APPLICATION FORM</h3>                                
                                <form class="form-horizontal" method="POST"  onSubmit={this.onSubmit}>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant_full_name"> 1. Applicant Full Name:</label>
                                        <div class="col-sm-8">
                                            <input type="text"  value={this.state.applicant_full_name} onChange={this.onChangeApplicantFullName} class="form-control" id="applicant_full_name" placeholder="" name="applicant_full_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 2. Father's/Hanband Name of the Applicant:</label>
                                        <div class="col-sm-8">
                                            <input type="text"   value={this.state.father_name} onChange={this.onChangeApplicantFatherName}  class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 3. Mother's Name of the Applicant:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 4. Spouse Name of the Applicant:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 5. Profession/ Occupation of the Applicant:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 6. Age (Date of Birth):</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 7. Natonality:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 8. Religion:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 9. Telephone No/ Mobile No:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 10. Nominee (with Relationship):</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 11. Nominee Address:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 12. Permanent Address of the Applicant:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 13. Present Address:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2 text-left" for="applicant-name"> Unit No:</label>
                                        <div class="col-sm-3">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                        <label class="control-label col-sm-2 text-left" for="applicant-name"> Area:</label>
                                        <div class="col-sm-3">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div> Katha
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 14. Mode of payment:</label>
                                        <div class="col-sm-8 text-left">
                                            <input type="radio" class="" id="" value="" name="father_name"/> At a time 
                                            <input type="radio" class="" id="" value="" name="father_name"/> Insallment
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-4 text-left" for="applicant-name"> 15. Aount you have paid with particuler (Bank Draft/ Pay order/ cheque or cash):</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="father_name" placeholder="" name="father_name"/>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group row">        
                                        <h4 class="text-center">DECLARATION</h4>
                                        <p>I do hereby declare that the information and particulars furnished by me herinbefore are ture to the best of my knowledge and that I have no concealed or mispresnted anything. I further declare that I have gone through the propectus...</p>
                                    </div>

                                    <div class="form-group row">        
                                            <label class="control-label col-sm-4 text-left" for="applicant-name"> Signature of the Applicant</label><br/>
                                            <label class="control-label col-sm-4 text-left" for="applicant-name"> Date......................</label>
                                    </div>
                                    <hr/>

                                    <div class="form-group row">        
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-success btn-lg ">Submit</button>
                                    </div>
                                    </div>
                                </form> 
                            </div>
                            
                    </div>
                </div>
            </section>
        );
    }
}

export default Book_now; 