import React from 'react';
import './Forms.css';

function Forms() {
    return (
        <div className="forms">
            <Contact />
            <RequestForm/>
        </div>
    )
}

export default Forms;

function Contact() {
    return (
        <div className="contact">
            <ContactInfo/>
            <ContactForm/>
        </div>
    )
}

function ContactInfo() {
    return (
        <div className="contactInfo">
            <h2 className="contactTitle">Contact info</h2>
            <p className="contact_p">We appreciate your interest in our inventory, and apologize we do not have model details displaying 
                on the website at this time.</p>
            <p>Please fill form out below and our team will quickly respond, or, please call us at 765-470-4091 
                for more information.</p>
        </div>
    )
}

class ContactForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            prefer: 'phone'
        }
    }

    myChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Your request is submitted');
    }

    render() {
        return (
            <form action="#" method="GET" onSubmit={this.handleSubmit} className="contactForm">
                <input 
                    type="text" 
                    placeholder="First name" 
                    name='firstName' 
                    onChange={this.myChangeHandler} 
                    required
                    className="contactInput inputWidth"
                />
                <input 
                    type="text" 
                    placeholder="Last name" 
                    name='lastName' 
                    onChange={this.myChangeHandler} 
                    required
                    className="contactInput inputWidth"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name='email' 
                    onChange={this.myChangeHandler} 
                    required
                    className="contactInput inputWidth"
                />
                <input 
                    type="tel" 
                    placeholder="Phone" 
                    name='phone' 
                    onChange={this.myChangeHandler} 
                    className="contactInput inputWidth"
                />
                <input 
                    name="prefer" 
                    type="radio" 
                    id="preferEmail" 
                    value="email" 
                    checked={this.state.prefer === "email"} 
                    onChange={this.myChangeHandler}
                    className="radio"
                />
                <label htmlFor="preferEmail" className="radioLabel">Prefer e-mail</label>
                <input 
                    name="prefer" 
                    type="radio" 
                    id="preferPhone" 
                    value="phone" 
                    checked={this.state.prefer === "phone"} 
                    onChange={this.myChangeHandler} 
                    className="radio" 
                    />
                <label htmlFor="preferPhone" className="radioLabel">Prefer phone</label>
                <input type="submit" value="Contact us" className="contactSubmit"/>
            </form>
        )
    }
    
}

class RequestForm extends React.Component {
    constructor() {
        super()
        this.state = {
            textarea: "Your message",
            type: 'Any type',
            model: "Audi",
            firstYear: "1991",
            lastYear: "2019",
            modelsList: {
                Audi: ['Q5', 'A4', 'Q3', 'SQ5', 'Q7', 'Q8'],
                Nissan: ['370Z', 'Altima', 'Armada', 'Frontier', 'GT-R', 'Kicks', 'LEAF', 'Maxima'],
                Volkswagen: ['Passat', 'Tiguan', 'Polo', 'Vento', 'Ameo'],
                Mitsubishi: ['ASX', 'Pajero Sport', 'L200', 'Eclipse Cross', 'Mirage', 'Outlander']
            },
            modelType: 'Q5',
            price: '',
            trim: 'DX',
            color: 'White'
        }
    }

    myChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Your request is submitted');
    }

    
    render() {
        const type = ["Any type", "New", "Pre-owned"];
        const model = ["Audi", "Nissan", "Volkswagen", "Mitsubishi"];
        const trim = ['DX', 'LX', 'LS', 'EX', 'GL', 'SE', 'GT'];
        const color = ['White', 'Black', 'Aluminum Silver', 'Red', 'Warm Silver'];
        let year = [];

        for(let i = 1999; i <= 2019; i++) {
            year.push(i);
        }

        return (
            <form action="#" method="GET" onSubmit={this.handleSubmit} className="requestForm">
                <h2 className="requestTitle">Can't find what you are looking for?</h2>
                <div className="requestFields">
                        <Select 
                            options={type} 
                            value={this.state.type} 
                            updateData={this.myChangeHandler} 
                            name="type"
                            className="contactInput inputHalf"
                        />
                        <div className="requestColumn">
                        <Select 
                            options={year} 
                            value={this.state.firstYear} 
                            updateData={this.myChangeHandler} 
                            className="contactInput inputHalf"
                            name="firstYear"
                        />
                        <span className="requestSpan">-</span>
                        <Select 
                            options={year} 
                            value={this.state.lastYear} 
                            updateData={this.myChangeHandler} 
                            className="contactInput inputHalf"
                            name="lastYear"
                        />
                        </div>
                        <Select 
                            options={model} 
                            value={this.state.model} 
                            updateData={this.myChangeHandler} 
                            className="contactInput inputHalf"
                            name="model"
                            />
                        <Select 
                            options={this.state.modelsList[this.state.model]} 
                            value={this.state.modelType} 
                            updateData={this.myChangeHandler}  
                            className="contactInput inputHalf"
                            name="modelType"
                        />
                        <input 
                            type="number" 
                            placeholder="Price (max)" 
                            name='price' 
                            onChange={this.myChangeHandler} 
                            className="contactInput inputPrice"
                        />
                        <div className="requestColumn">
                        <Select 
                            options={trim} 
                            value={this.state.trim} 
                            updateData={this.myChangeHandler}  
                            className="contactInput inputHalf"
                            name="trim"
                        />
                        <Select 
                            options={color} 
                            value={this.state.color} 
                            updateData={this.myChangeHandler}  
                            className="contactInput inputHalf"
                            name="color"
                        />
                        </div>
                </div>
                <textarea 
                    value={this.state.textarea} 
                    onChange={this.myChangeHandler} 
                    name="textarea"
                    className="contactInput inputWidth textarea"
                />
                <p className="request_p">By submitting this form, you agree to be contacted with information regarding the vehicle you are
                    searching for.</p>
                <input type="submit" value="Let us find it" className="contactSubmit noneBorder" />
            </form>
        )
    } 
}

function Select(props) {
    const options = props.options.map((elem, index) => {
        return <option value={elem} key={index} >{elem}</option>
    });

    return (
        <select 
            value={props.value} 
            onChange={(event) => { props.updateData(event)}} 
            name={props.name} 
            className={props.className}>
            {options}
        </select>
    )    
}