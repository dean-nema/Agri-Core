import React, { Component } from 'react';
import Cows from "../assets/pictures/cow.jpg";

class Experiment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      middleButtonIndex: 1,
      animalDescription: {
        animalBreed: "Brahman",
        animalSpecies: "Cow",
        animalID: "B5643",
        medication: "Dewormed with Ivermectin",
        vac: "Yes",
        age: "20",
      },
      texts2: {
        s:'',
        b: '',
      },
      texts: {
        inputValues: {
          inputValuess: '',
          inputValuess2: '',
          inputValuess3: '',
          inputValuess4: '',
        },
      },
      isModalOpen: false,
      isModalsOpen: false,
      vacInfo: '',
    }
    
    this.state.animalQuantity = 0;
    this.state.vacInfo = ''; 
    
    
  }
  //Functions begin here

  handleInputChange = (event) => {
    this.setState({
      vacInfo: event.target.value,
    });
  };
  openModal = () => {
    this.setState({ isModalOpen: true }); 
  };
  openModals = () => {
    this.setState({ isModalsOpen: true }); 
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  closeModals = () => {
    this.setState({ isModalsOpen: false }); 
  };
  increaseQuantity = () => {
    this.setState((prevState) => ({
      animalQuantity: prevState.animalQuantity + 1,
    }));
  };
  decreaseQuantity = () => {
    if (this.state.animalQuantity > 0) {
      this.setState((prevState) => ({
        animalQuantity: prevState.animalQuantity - 1,
      }));
    }
  };
  displayText = () => {
    
    const inputElement = document.getElementById('animal-id2');
    const inputValue = inputElement.value;
    const inputElement2 = document.getElementById('animal-age2');
    const inputValue2 = inputElement2.value;
    const inputElement3 = document.getElementById('animal-vac2');
    const inputValue3 = inputElement3.value;
    const inputElement4 = document.getElementById('animal-med2');
    const inputValue4 = inputElement4.value;
  
   
    this.setState((prevState) => ({
      texts: {
        ...prevState.texts,
        inputValues: {
          inputValue,
          inputValue2,
          inputValue3,
          inputValue4,
        },
      },
    }));
  

    this.closeModal();
  }
  changeBreedInfo= () =>{
const spec= document.getElementById("species");
const bree = document.getElementById("breed");
const s= spec.value;
const b= bree.value;
this.setState((prevState) => ({
  texts: {
    ...prevState.texts,
    inputValues2: {
    b,
    s,
    },
  },
}));
this.closeModals();
  }


  handleClick = (index) => {
    this.setState({
      middleButtonIndex: index,
    });
  };
  addVaccination = () => {
    
    console.log(this.state.vacInfo);
  };
//code for the buttons
  renderButton1 = () => {
    const { middleButtonIndex } = this.state;

    return (
      <button
        className={`button-1 ${
          middleButtonIndex === 0 ? 'expanded-right' : ''
        }`}
        onClick={() => this.handleClick(0)}
      >
        <div className="div-with-names">
        <p className='top-heading'>ANIMAL DESCRIPTION</p>
                  <p className='description-text' >Species: {this.state.texts2.s}</p>
                <p className='description-text'>Breed: {this.state.texts2.b}</p>
                <button className='edit-description' onClick={this.openModals}>EDIT INFORMATION</button>
                  </div>
                
      </button>
    );
  };

  renderButton2 = () => {
    const { middleButtonIndex } = this.state;

    return (
      <button
        className='button-2'
        onClick={() => this.handleClick(1)}
      >
        <div className='div-with-description'>
                <p className='top-heading'>ANIMAL QUANTITY</p>
                
                <p className='description-text'>Quantity: <p className='description-text-symbols' id="sub" onClick={this.decreaseQuantity}>-    </p> {this.state.animalQuantity}<p className='description-text-symbols' id='add' onClick={this.increaseQuantity}>    + </p></p>
                
              </div>
      </button>
    );
  };

  renderButton3 = () => {
    const { middleButtonIndex } = this.state;

    return (
      <button
        className={`button-3 ${
          middleButtonIndex === 2 ? 'expanded-left' : ''
        }`}
        onClick={() => this.handleClick(2)}
      >
        <div className='vaccination'>
                  <p className="top-heading">Vaccination</p>
                  <span className='span-text'>
                    <p className='vaccination-texts' >ID: {this.state.animalDescription.animalID}</p>
                    <p className='vaccination-texts' id="animal-age">AGE: {this.state.animalDescription.age} </p>
                    <p className='vaccination-texts' id="animal-vac">Vaccination Status: {this.state.animalDescription.vac} </p>
                    <p className='vaccination-texts' id="animal-med">Medication Status: {this.state.animalDescription.medication}</p>
                  </span>
                  <span className='span-text'>
                    <p className='vaccination-texts' id="animal-id">ID: {this.state.animalDescription.animalID}</p>
                    <p className='vaccination-texts' id="animal-id">AGE: {this.state.animalDescription.age} </p>
                    <p className='vaccination-texts' id="animal-id">Vaccination Status: {this.state.animalDescription.vac} </p>
                    <p className='vaccination-texts' id="animal-id">Medication Status: {this.state.animalDescription.medication} </p>
                    
                  </span>
                  <span className='span-text'>
                  <p className='vaccination-texts' id="animal-id2">ID: {this.state.texts.inputValues.inputValuess}</p>
                    <p className='vaccination-texts' id="animal-age2">AGE: {this.state.texts.inputValues.inputValuess2} </p>
                    <p className='vaccination-texts' id="animal-vac2">Vaccination Status: {this.state.texts.inputValues.inputValuess3} </p>
                    <p className='vaccination-texts' id="animal-med2">Medication Status: {this.state.texts.inputValues.inputValuess4} </p>
                  </span>
                  <button className='add-vac' onClick={this.openModal}>ADD +</button>
                </div>
      </button>
    );
  };

  render() {
    return (
      <div className="page-container">

        {this.state.isModalOpen && ( 
                  <div className="modalk">
                    <div className='just-color'>
                    <p className='text-headings'>ADD ANIMAL</p>
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    </div>
                    <div className="modal-contentk" >
                      
                      <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID:<input type="text" className='enter' placeholder='Enter ID' id="id-info"/></p>
                      
                      <p className='text'>VACCINATION: <input className='enter' placeholder='Enter Vaccination info' id="vacicination-info"/> </p>
                      <p className='text'>MEDICATION: <input className='enter' placeholder='Enter medication info' id='medication-info'/></p>
                      <p className='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGE:<input type="text" className='enter' placeholder='Enter age' id='age-info'/></p>
                      <button className='modal-add-tasks-button'onClick={this.displayText}>DONE</button>
                    </div>
                  </div>
                )}
                 {this.state.isModalsOpen && ( 
                  <div className="modalk">
                    <div className="modal-contentk">
                      <span className="close" onClick={this.closeModals}>&times;</span>
                      <p className='text-headings'>EDIT DESCRIPTION</p>
                      <p className='text'>SPECIES:<input className='enter' placeholder='Enter species' id="species"/> BREED:  <input className='enter' placeholder='Enter breed' id="breed"/> </p>
                      <button className='modal-add-tasks-button'onClick={this.closeModals}>DONE</button>
                    </div>
                  </div>
                )}
        <div className='pic-animal'>
          <div >
          <img src={Cows} alt="image of animal" className='image-of-animal-in-description' />
          </div>
          
          {this.renderButton2()}
        </div>
        <div className="bottom-container">
          
          {this.renderButton1()}
          {this.renderButton3()}
        </div>
      </div>
    );
  }
  
  
}

export default Experiment;